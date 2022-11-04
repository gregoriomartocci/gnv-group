import { uploadImage, validateBase64 } from "../helpers/project";
import Gallery from "../models/gallery";

export const createGalleryItem = async (req, res) => {
  try {
    const {
      _id,
      title,
      gallery,
      artist,
      images,
      measures,
      date,
      published,
      technique,
    } = req.body;

    if (!artist)
      return res.json({ error: "Por favor ingrese el nombre del artista" });
    // if (!title) return res.json({ error: "Por favor ingrese un título" });
    // if (!gallery) return res.json({ error: "Por favor ingrese un título" });
    // if (!published)
    //   return res.json({
    //     error: "Por favor ingrese el estado de la publicación",
    //   });
    // if (!measures)
    //   return res.json({ error: "Por favor ingrese el nombre del artista" });
    // if (!date)
    //   return res.json({ error: "Por favor ingrese el nombre del artista" });
    // if (!technique)
    //   return res.json({ error: "Por favor ingrese el nombre del artista" });
    // if (!images)
    //   return res.json({ error: "Por favor incluya al menos una imagen" });

    const alreadyExist = await Gallery.findOne({ title });

    if (alreadyExist)
      return res.json({ error: "Ya existe una obra de arte con ese nombre" });

    const uploadImages = images.map(async (i) => ({
      ...i,
      src: await uploadImage(i.src),
    }));

    const updatedImages = await Promise.all(uploadImages);

    const galleryItem = await new Gallery({
      ...req.body,
      images: await updatedImages,
    }).save();

    console.log("Que se guarda aca?", galleryItem);

    return res.json(galleryItem);
  } catch (err) {
    console.log(err.message, "Algo salió mal");
    return res.json({ error: err.message });
  }
};

export const removeGalleryItem = async (req, res) => {
  const { id } = req.params;

  try {
    const gallery = await Gallery.findByIdAndDelete(id);
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
    let updatedGalleryItem;
    let imagesAux;

    if (images) {
      imagesAux = images.map(async (i) => ({
        ...i,
        src: !isFromCloudinary(i.src) ? await uploadImage(i.src) : i.src,
      }));
      updatedImages = await Promise.all(imagesAux);
      updatedGalleryItem = { ...req.body, images: updatedImages };
    } else {
      updatedGalleryItem = { ...req.body };
    }

    const gallery = await Gallery.findByIdAndUpdate(id, updatedGalleryItem, {
      new: true,
    });

    return res.json(gallery);
  } catch (err) {
    console.log(err.message, "Algo salió mal");
    return res.json({ error: "Algo salió mal, por favor intente nuevamente" });
  }
};

export const getGallery = async (req, res) => {
  try {
    const all = await Gallery.find().sort({ createdAt: 1 });
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
