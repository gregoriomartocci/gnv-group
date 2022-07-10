import { uploadImage, validateBase64 } from "../helpers/project";
import Project from "../models/project";

export const createArticle = async (req, res) => {
  try {
    const { name, price, description, type, published, status, images } =
      req.body;

    if (!name) return res.json({ error: "Por favor ingrese un nombre" });

    if (!price)
      return res.json({
        error: "Por favor ingrese un precio",
      });

    if (!type)
      return res.json({
        error: "Por favor seleccione un tipo de emprendimiento",
      });

    if (!status)
      return res.json({
        error: "Por favor indique en que estado se encuentra el emprendimiento",
      });

    if (!description)
      return res.json({ error: "Por favor ingrese una descripción" });

    const alreadyExist = await Project.findOne({ name });

    if (alreadyExist)
      return res.json({ error: "Ya existe un emprendimiento con ese nombre." });

    const upload_images = images.map(async (i) => ({
      ...i,
      src: await uploadImage(i.src),
    }));

    const updated_images = await Promise.all(upload_images);
    console.log(updated_images, "OKAAA");

    const project = await new Project({
      name,
      description,
      type,
      published,
      status,
      images: updated_images,
    }).save();

    return res.json(project);
  } catch (err) {
    console.log(err.message, "Algo salió mal");
    return res.json("Algo salió mal, por favor intente nuevamente");
  }
};

export const removeArticle = async (req, res) => {
  const { id } = req.params;
  try {
    const project = await Project.findByIdAndDelete(id);
    return res.json(project);
  } catch (err) {
    console.log(err.message, "Algo salió mal");
    return res.json("Algo salió mal, por favor intente nuevamente");
  }
};

export const editArticle = async (req, res) => {
  const { images } = req.body;

  const validate_cloudinay = (str) => {
    const validate =
      typeof str === "string" && str.split(".")[1] === "cloudinary";
    return validate;
  };

  try {
    const { id } = req.params;
    
    const upload_images = images.map(async (i) => ({
      ...i,
      src: !validate_cloudinay(i.src) ? await uploadImage(i.src) : i.src,
    }));

    const updated_images = await Promise.all(upload_images);
    const updated_project = { ...req.body, images: updated_images };
    // console.log(updated_project, "OKAAA");

    const project = await Project.findByIdAndUpdate(id, updated_project, {
      new: true,
    });
    return res.json(project);
  } catch (err) {
    console.log(err.message, "Algo salió mal");
    return res.json("Algo salió mal, por favor intente nuevamente");
  }
};

export const getArticles = async (req, res) => {
  try {
    const all = await Project.find().populate("name").sort({ createdAt: -1 });
    return res.json(all);
  } catch (err) {
    console.log(err.message, "Algo salió mal");
    return res.json("Algo salió mal, por favor intente nuevamente");
  }
};
