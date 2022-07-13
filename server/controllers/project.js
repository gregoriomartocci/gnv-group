import { uploadImage, validateBase64 } from "../helpers/project";
import Project from "../models/project";

export const createProject = async (req, res) => {
  try {
    const { name, link, description, published, status, images } = req.body;

    if (!name) return res.json({ error: "Por favor ingrese un nombre" });

    if (!link)
      return res.json({
        error: "Por favor ingrese un precio",
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
      published,
      link,
      status,
      images: updated_images,
    }).save();

    return res.json(project);
  } catch (err) {
    console.log(err.message, "Algo salió mal");
    return res.json({ error: err.message });
  }
};

export const removeProject = async (req, res) => {
  const { id } = req.params;
  try {
    const project = await Project.findByIdAndDelete(id);
    return res.json(project);
  } catch (err) {
    console.log(err.message, "Algo salió mal");
    return res.json({ error: "Algo salió mal, por favor intente nuevamente" });
  }
};

export const editProject = async (req, res) => {
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

    console.log(project,)
    return res.json(project);
  } catch (err) {
    console.log(err.message, "Algo salió mal");
    return res.json({error:"Algo salió mal, por favor intente nuevamente"});
  }
};

export const getProjects = async (req, res) => {
  try {
    const all = await Project.find().populate("name").sort({ createdAt: -1 });
    return res.json(all);
  } catch (err) {
    console.log(err.message, "Algo salió mal");
    return res.json({error:"Algo salió mal, por favor intente nuevamente"});
  }
};
