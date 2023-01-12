import User from "../models/user";
import jwt from "jsonwebtoken";
import { hashPassword, comparePassword } from "../helpers/auth";
import nanoid from "nanoid";

// sendgrid
require("dotenv").config();
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_KEY);

export const signup = async (req, res) => {
  console.log(req.body);

  try {
    // validation
    const { name, email, password, confirmPassword } = req.body;
    if (!name) {
      return res
        .json({
          error: "el nombre es requerido",
        })
        .status(400);
    }
    if (!email) {
      return res
        .json({
          error: "el email es requerido",
        })
        .status(400);
    }
    if (!password || password.length < 6) {
      return res
        .json({
          error:
            "La contraseña es requerida y necesita tener al menos 6 caracteres",
        })
        .status(400);
    }
    if (password !== confirmPassword) {
      return res
        .json({
          error: "Las contraseñas ingresadas no coinciden.",
        })
        .status(400);
    }

    console.log("Juan Roman Riquelma");

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
        expiresIn: "2h",
      });
      const { password, ...rest } = user._doc;

      console.log(user, "ok");

      return res.json({
        token,
        user: rest,
      });
    } catch (err) {
      console.log("algo salio mal", err);
    }
  } catch (err) {
    console.log(err);
  }
};

export const signin = async (req, res) => {
  console.log(req.body, "JUAN ROMAN RIQUELME");

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
    const match = await comparePassword(password, user.password);

    if (!match) {
      return res.json({
        error: "Contraseña incorrecta",
      });
    }
    // create signed token
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "2h",
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
  const { name, email, role } = req.body;
  const updatedUser = { name, email, role };

  try {
    const { id } = req.params;

    const user = await User.findByIdAndUpdate(id, updatedUser, {
      new: true,
    });

    console.log(user, "sale esto para alla!");
    return res.json(user);
  } catch (err) {
    console.log(err.message, "Algo salió mal");
    return res.json({ error: "Algo salió mal, por favor intente nuevamente" });
  }
};
