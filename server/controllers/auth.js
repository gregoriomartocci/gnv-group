import User from "../models/user";
import jwt from "jsonwebtoken";
import { hashPassword, comparePassword } from "../helpers/auth";
import nanoid from "nanoid";

// sendgrid
require("dotenv").config();
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_KEY);

export const signup = async (req, res) => {
  try {
    // validation
    const { name, email, password } = req.body;
    if (!name) {
      return res.json({
        error: "el nombre es requerido",
      });
    }
    if (!email) {
      return res.json({
        error: "el email es requerido",
      });
    }
    if (!password || password.length < 6) {
      return res.json({
        error:
          "La contraseña es requerida y necesita tener al menos 6 caracteres",
      });
    }
    const exist = await User.findOne({ email });
    if (exist) {
      return res.json({
        error: "El email ya se encuentra en uso",
      });
    }
    // hash password
    const hashedPassword = await hashPassword(password);

    try {
      const user = await new User({
        name,
        email,
        password: hashedPassword,
      }).save();

      // create signed token
      const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "7d",
      });
      const { password, ...rest } = user._doc;

      return res.json({
        token,
        user: rest,
      });
    } catch (err) {
      console.log(err);
    }
  } catch (err) {
    console.log(err);
  }
};

export const signin = async (req, res) => {
  // console.log(req.body);

  try {
    const { email, password } = req.body;
    // check if our db has user with that email
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({
        error: "No se encontró el usuario",
      });
    }
    // check password
    const match = comparePassword(password, user.password);

    console.log(match, "que onduu");
    if (!match) {
      return res.json({
        error: "Contraseña incorrecta",
      });
    }
    // create signed token
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "30m",
    });

    user.password = undefined;
    user.secret = undefined;
    res.json({
      token,
      user,
    });
  } catch (err) {
    console.log(err);
    return res
      .status(400)
      .send("Algo salió mal, por favor intente de nuevo más tarde.");
  }
};

export const forgotPassword = async (req, res) => {
  const { email } = req.body;
  // find user by email
  const user = await User.findOne({ email });
  console.log("USER ===> ", user);
  if (!user) {
    return res.json({
      error: "No se encontró un usuario con el mail ingresado.",
    });
  }
  // generate code
  const resetCode = nanoid(5).toUpperCase();
  // save to db
  user.resetCode = resetCode;
  user.save();
  // prepare email
  const emailData = {
    from: process.env.EMAIL_FROM,
    to: user.email,
    subject: "Password reset code",
    html: "<h1>Your password  reset code is: {resetCode}</h1>",
  };
  // send email
  try {
    const data = await sgMail.send(emailData);
    console.log(data);
    res.json({ ok: true });
  } catch (err) {
    console.log(err);
    res.json({ ok: false });
  }
};

export const resetPassword = async (req, res) => {
  try {
    const { email, password, resetCode } = req.body;
    // find user based on email and resetCode
    const user = await User.findOne({ email, resetCode });
    // if user not found
    if (!user) {
      return res.json({ error: "Email or reset code is invalid" });
    }
    // if password is short
    if (!password || password.length < 6) {
      return res.json({
        error: "Password is required and should be 6 characters long",
      });
    }
    // hash password
    const hashedPassword = await hashPassword(password);
    user.password = hashedPassword;
    user.resetCode = "";
    user.save();
    return res.json({ ok: true });
  } catch (err) {
    console.log(err);
  }
};

export const getUsers = async (req, res) => {
  try {
    const all = await User.find().sort({ createdAt: 1 });
    return res.json(all);
  } catch (err) {
    console.log(err.message, "Algo salió mal");
    return res.json({ error: "Algo salió mal, por favor intente nuevamente" });
  }
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findByIdAndDelete(id);
    return res.json(user);
  } catch (err) {
    console.log(err.message, "Algo salió mal");
    return res.json({ error: "Algo salió mal, por favor intente nuevamente" });
  }
};

export const updateUser = async (req, res) => {
  const { images } = req.body;

  const isFromCloudinary = (str) => {
    const validate =
      typeof str === "string" && str.split(".")[1] === "cloudinary";
    return validate;
  };

  try {
    const { id } = req.params;

    let updatedImages;
    let updatedProject;
    let imagesAux;

    if (images) {
      imagesAux = images.map(async (i) => ({
        ...i,
        src: !isFromCloudinary(i.src) ? await uploadImage(i.src) : i.src,
      }));
      updatedImages = await Promise.all(imagesAux);
      updatedProject = { ...req.body, images: updatedImages };
    } else {
      updatedProject = { ...req.body };
    }

    const project = await Project.findByIdAndUpdate(id, updatedProject, {
      new: true,
    });

    console.log(project, "sale esto para alla!");

    return res.json(project);
  } catch (err) {
    console.log(err.message, "Algo salió mal");
    return res.json({ error: "Algo salió mal, por favor intente nuevamente" });
  }
};
