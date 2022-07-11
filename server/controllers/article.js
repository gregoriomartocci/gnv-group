import { uploadImage, validateBase64 } from "../helpers/project";
import Article from "../models/article";

export const createArticle = async (req, res) => {
  try {
    const { title, source, date, images } = req.body;

    if (!title) return res.json({ error: "Por favor ingrese un Título" });

    if (!source)
      return res.json({
        error: "Por favor ingrese una fuente",
      });

    if (!date)
      return res.json({
        error: "Por favor seleccione la fecha de la noticia",
      });

    const alreadyExist = await Article.findOne({ title });

    if (alreadyExist)
      return res.json({ error: "Ya existe un emprendimiento con ese nombre." });

    const upload_images = images.map(async (i) => ({
      ...i,
      src: await uploadImage(i.src),
    }));

    const updated_images = await Promise.all(upload_images);
    // console.log(updated_images, "OKAAA");

    const project = await new Project({
      title,
      source,
      date,
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
