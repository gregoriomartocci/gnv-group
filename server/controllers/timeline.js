import { uploadImage, validateBase64 } from "../helpers/project";
import Timeline from "../models/timeline";

export const createTimelineItem = async (req, res) => {
  try {
    const { year, highlights } = req.body;

    if (!year) return res.json({ error: "Por favor ingrese un año" });

    if (!highlights.length)
      return res.json({
        error: "Por favor ingrese almenos un emprendimiento",
      });

    const alreadyExist = await Timeline.findOne({ year });

    if (alreadyExist) return res.json({ error: "el año ingresado ya existe." });

    const uploadImages = images.map(async (i) => ({
      ...i,
      src: await uploadImage(i.src),
    }));

    const updatedImages = await Promise.all(uploadImages);

    const timeline = await new Timeline({
      year,
      highlights,
      images: await updatedImages,
    }).save();

    console.log("Que se guarda aca?", timeline);

    return res.json(timeline);
  } catch (err) {
    console.log(err.message, "Algo salió mal");
    return res.json({ error: err.message });
  }
};

export const removeTimelineItem = async (req, res) => {
  const { id } = req.params;
  
  try {
    const timeline = await Timeline.findByIdAndDelete(id);
    return res.json(timeline);
  } catch (err) {
    console.log(err.message, "Algo salió mal");
    return res.json({ error: "Algo salió mal, por favor intente nuevamente" });
  }
};

export const editTimelineItem = async (req, res) => {
  const { images } = req.body;

  const isFromCloudinary = (str) => {
    const validate =
      typeof str === "string" && str.split(".")[1] === "cloudinary";
    return validate;
  };

  try {
    const { id } = req.params;

    let updatedImages;
    let updatedTimeline;
    let imagesAux;

    if (images) {
      imagesAux = images.map(async (i) => ({
        ...i,
        src: !isFromCloudinary(i.src) ? await uploadImage(i.src) : i.src,
      }));
      updatedImages = await Promise.all(imagesAux);
      updatedTimeline = { ...req.body, images: updatedImages };
    } else {
      updatedTimeline = { ...req.body };
    }

    const timeline = await Timeline.findByIdAndUpdate(id, updatedTimeline, {
      new: true,
    });

    return res.json(timeline);
  } catch (err) {
    console.log(err.message, "Algo salió mal");
    return res.json({ error: "Algo salió mal, por favor intente nuevamente" });
  }
};

export const getTimeline = async (req, res) => {
  try {
    const all = await Timeline.find().populate("name").sort({ createdAt: -1 });
    return res.json(all);
  } catch (err) {
    console.log(err.message, "Algo salió mal");
    return res.json({ error: "Algo salió mal, por favor intente nuevamente" });
  }
};

export const getTimelineItem = async (req, res) => {
  const { id } = req.params;
  try {
    const project = await Timeline.findById(id);
    return res.json(project);
  } catch (err) {
    console.log(err.message, "Algo salió mal");
    return res.json({ error: "Algo salió mal, por favor intente nuevamente" });
  }
};
