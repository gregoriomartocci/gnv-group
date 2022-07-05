import { uploadImage } from "../helpers/project";
import Project from "../models/project";

export const createProject = async (req, res) => {
  try {
    const { name, description, type, published, status, images } = req.body;

    const alreadyExist = await Project.findOne({ name });

    if (!name) return res.json({ error: "Por favor ingrese un nombre" });

    if (!description)
      return res.json({ error: "Por favor ingrese una descripción" });

    if (!type)
      return res.json({
        error: "Por favor seleccione un tipo de emprendimiento",
      });

    if (!status)
      return res.json({
        error: "Por favor indique en que estado se encuentra el emprendimiento",
      });

    if (alreadyExist)
      return res.json({ error: "Ya existe un emprendimiento con ese nombre." });

    const upload = images.map((i) => uploadImage(i));

    const img_links = await Promise.all(upload);

    const project = await new Project({
      name,
      description,
      type,
      published,
      status,
      images: img_links,
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

export const getProjects = async (req, res) => {
  try {
    const all = await Project.find().populate("name").sort({ createdAt: -1 });
    return res.json(all);
  } catch (err) {
    console.log(err.message, "Algo salió mal");
    return res.json("Algo salió mal, por favor intente nuevamente");
  }
};
