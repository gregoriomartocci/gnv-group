import { uploadImage } from "../helpers/project";
import Article from "../models/article";

export const createArticle = async (req, res) => {
  try {
    const { title, link, source, date, images, description } = req.body;

    if (!title) return res.json({ error: "Por favor ingrese un Título" });

    if (!source)
      return res.json({
        error: "Por favor ingrese una fuente",
      });

    if (!link)
      return res.json({ error: "Por favor ingrese el enlace de la noticia" });

    if (!date)
      return res.json({
        error: "Por favor seleccione la fecha de la noticia",
      });

    if (!description)
      return res.json({ error: "Por favor ingrese una descripción" });

    const alreadyExist = await Article.findOne({ title });

    if (alreadyExist)
      return res.json({ error: "Ya existe una noticia con ese nombre." });

    const upload_images = images.map(async (i) => ({
      ...i,
      src: await uploadImage(i.src),
    }));

    const updated_images = await Promise.all(upload_images);

    const article = await new Article({
      title,
      source,
      link,
      date,
      description,
      images: updated_images,
    }).save();

    return res.json(article);
  } catch (err) {
    console.log(err.message, "Algo salió mal");
    return res.json({
      error: err.message,
    });
  }
};

export const removeArticle = async (req, res) => {
  const { id } = req.params;
  try {
    const article = await Article.findByIdAndDelete(id);
    return res.json(article);
  } catch (err) {
    console.log(err.message, "Algo salió mal");
    return res.json({ error: err.message });
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
    const updated_article = { ...req.body, images: updated_images };

    const article = await Article.findByIdAndUpdate(id, updated_article, {
      new: true,
    });

    return res.json(article);
  } catch (err) {
    console.log(err.message, "Algo salió mal");
    return res.json({ error: "Algo salió mal, por favor intente nuevamente" });
  }
};

export const getArticles = async (req, res) => {
  try {
    const all = await Article.find().populate("title").sort({ createdAt: -1 });
    return res.json(all);
  } catch (err) {
    console.log(err.message, "Algo salió mal");
    return res.json({ error: err.message });
  }
};
