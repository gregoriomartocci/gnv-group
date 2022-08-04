import { uploadImage, validateBase64 } from "../helpers/project";
import Project from "../models/project";
import Template from "../models/template";

export const createTemplate = async (req, res) => {
  try {
    const { name, title, carousel, description } = req.body;

    console.log(req.body, "que nos llega??");

    if (!name) return res.json({ error: "Por favor ingrese el nombre" });

    if (!title) return res.json({ error: "Por favor ingrese un título principal para el header" });

    if (!description)
      return res.json({ error: "Por favor ingrese una descripción" });

    const alreadyExist = await Template.findOne({ name });

    if (!carousel)
      return res.json({ error: "Por favor ingrese almenos una imagen" });

    if (alreadyExist)
      return res.json({ error: "Ya existe un Template con ese nombre." });

    const upload_images = images.map(async (i) => ({
      ...i,
      src: await uploadImage(i.src),
    }));

    const updated_images = await Promise.all(upload_images);
    console.log(updated_images, "OKAAA");

    const template = await new Template({
      name,
      title,
      carousel: updated_images,
      description,
    }).save();

    return res.json(template);
  } catch (err) {
    console.log(err.message, "Algo salió mal");
    return res.json({ error: err.message });
  }
};

export const removeTemplate = async (req, res) => {
  const { id } = req.params;
  try {
    const template = await Template.findByIdAndDelete(id);
    return res.json(template);
  } catch (err) {
    console.log(err.message, "Algo salió mal");
    return res.json({ error: "Algo salió mal, por favor intente nuevamente" });
  }
};

export const editTemplate = async (req, res) => {
  const { carousel } = req.body;

  console.log(req.body, "que poronga nos llega");

  const validate_cloudinay = (str) => {
    const validate =
      typeof str === "string" && str.split(".")[1] === "cloudinary";
    return validate;
  };

  try {
    const { id } = req.params;

    let promise_array;
    let updated_images;
    let updated_template;

    if (images) {
      const images_aux = images.map(async (i) => ({
        ...i,
        src: !validate_cloudinay(i.src) ? await uploadImage(i.src) : i.src,
      }));
      updated_images = await Promise.all(images_aux);
      updated_template = { ...req.body, images: updated_images };
    }

    updated_template = { ...req.body };

    const template = await Template.findByIdAndUpdate(id, updated_project, {
      new: true,
    });

    // console.log(project);
    return res.json(template);
  } catch (err) {
    console.log(err.message, "Algo salió mal");
    return res.json({ error: "Algo salió mal, por favor intente nuevamente" });
  }
};

export const getTemplates = async (req, res) => {
  try {
    const all = await Template.find().populate("name").sort({ createdAt: -1 });
    return res.json(all);
  } catch (err) {
    console.log(err.message, "Algo salió mal");
    return res.json({ error: "Algo salió mal, por favor intente nuevamente" });
  }
};
