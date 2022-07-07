import { uploadImage } from "../helpers/project";
import Project from "../models/project";

export const createProject = async (req, res) => {
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

export const removeProject = async (req, res) => {
  const { id } = req.params;
  try {
    const project = await Project.findByIdAndDelete(id);
    return res.json(project);
  } catch (err) {
    console.log(err.message, "Algo salió mal");
    return res.json("Algo salió mal, por favor intente nuevamente");
  }
};

export const editProject = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await Project.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    return res.json(project);
  } catch (err) {
    console.log(err.message, "Algo salió mal");
    return res.json("Algo salió mal, por favor intente nuevamente");
  }
};

export const getProjects = async (req, res) => {
  try {
    const all = await Project.find().populate("name").sort({ createdAt: -1 });
    return res.json(all);
  } catch (err) {
    console.log(err.message, "Algo salió mal");
    return res.json("Algo salió mal, por favor intente nuevamente");
  }
};
