import { uploadImage, validateBase64 } from "../helpers/project";
import Gallery from "../models/gallery";

export const createGalleryItem = async (req, res) => {
  try {
    const { name, link, description, published, status, images, type } =
      req.body;

    if (!name) return res.json({ error: "Por favor ingrese un nombre" });

    if (!status)
      return res.json({
        error: "Por favor indique en que estado se encuentra el emprendimiento",
      });

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

    const gallery = await new Gallery({
      name,
      description,
      published,
      link,
      type,
      status,
      images: await updatedImages,
    }).save();

    console.log("Que se guarda aca?", gallery);

    return res.json(gallery.images[0]);
  } catch (err) {
    console.log(err.message, "Algo salió mal");
    return res.json({ error: err.message });
  }
};

export const removeGalleryItem = async (req, res) => {
  const { id } = req.params;

  try {
    const gallery = await Project.findByIdAndDelete(id);
    return res.json(gallery);
  } catch (err) {
    console.log(err.message, "Algo salió mal");
    return res.json({ error: "Algo salió mal, por favor intente nuevamente" });
  }
};

export const editGalleryItem = async (req, res) => {
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

    const gallery = await Gallery.findByIdAndUpdate(id, updatedProject, {
      new: true,
    });

    console.log(gallery, "sale esto para alla!");

    return res.json(gallery);
  } catch (err) {
    console.log(err.message, "Algo salió mal");
    return res.json({ error: "Algo salió mal, por favor intente nuevamente" });
  }
};

export const getGallery = async (req, res) => {
  try {
    const all = await Gallery.find().populate("name").sort({ createdAt: -1 });
    return res.json(all);
  } catch (err) {
    console.log(err.message, "Algo salió mal");
    return res.json({ error: "Algo salió mal, por favor intente nuevamente" });
  }
};

export const getGalleryItem = async (req, res) => {
  const { id } = req.params;
  try {
    const gallery = await Gallery.findById(id);
    return res.json(gallery);
  } catch (err) {
    console.log(err.message, "Algo salió mal");
    return res.json({ error: "Algo salió mal, por favor intente nuevamente" });
  }
};
