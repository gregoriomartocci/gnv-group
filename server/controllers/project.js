import { uploadImage, validateBase64 } from "../helpers/project";
import Project from "../models/project";

export const createProject = async (req, res) => {
  try {
    const { name, link, description, published, status, images, type } =
      req.body;

    if (!name) return res.json({ error: "Por favor ingrese un nombre" });

    if (!status)
      return res.json({
        error: "Por favor indique en que estado se encuentra el emprendimiento",
      });

    // if (!description)
    //   return res.json({ error: "Por favor ingrese una descripción" });

    if (!images) return res.json({ error: "Por favor incluya imágenes" });

    if (!type) return res.json({ error: "Por favor ingrese un tipo" });

    const alreadyExist = await Project.findOne({ name });

    if (alreadyExist)
      return res.json({ error: "Ya existe un emprendimiento con ese nombre." });

    const uploadImages = images.map(async (i) => ({
      ...i,
      src: await uploadImage(i.src),
    }));

    const updatedImages = await Promise.all(uploadImages);

    console.log(updatedImages, "que pasa che");

    const project = await new Project({
      name,
      description,
      published,
      link,
      type,
      status,
      images: await updatedImages,
    }).save();

    console.log("Que se guarda aca?", project);

    return res.json(project.images[0]);
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

export const getProjects = async (req, res) => {
  try {
    const all = await Project.find().populate("name").sort({ createdAt: -1 });
    return res.json(all);
  } catch (err) {
    console.log(err.message, "Algo salió mal");
    return res.json({ error: "Algo salió mal, por favor intente nuevamente" });
  }
};

export const getProject = async (req, res) => {
  const { id } = req.params;
  try {
    const project = await Project.findById(id);
    return res.json(project);
  } catch (err) {
    console.log(err.message, "Algo salió mal");
    return res.json({ error: "Algo salió mal, por favor intente nuevamente" });
  }
};
