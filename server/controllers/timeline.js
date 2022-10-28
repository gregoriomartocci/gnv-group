import { uploadImage, validateBase64 } from "../helpers/project";
import Timeline from "../models/timeline";

// CreateTimelineItem
export const createTimelineItem = async (req, res) => {
  try {
    const { year, highlights, published } = req.body;

    if (!year) return res.json({ error: "Por favor ingrese un año" });

    if (!highlights.length)
      return res.json({
        error: "Por favor ingrese almenos un emprendimiento",
      });

    const alreadyExist = await Timeline.findOne({ year });

    if (alreadyExist) return res.json({ error: "el año ingresado ya existe." });

    const aux = highlights.map(async (item) => {
      const images = item.img.map(async (i) => ({
        ...i,
        src: await uploadImage(i.src),
      }));

      const updatedImages = await Promise.all(images);
      console.log(updatedImages, "riquelme");
      return { ...item, img: updatedImages };
    });

    const updatedHighLights = await Promise.all(aux);

    const createdTimelineItem = {
      ...req.body,
      highlights: updatedHighLights,
    };

    const timeline = await new Timeline(createdTimelineItem).save();

    console.log("Que se guarda aca?", timeline);

    return res.json(timeline);
  } catch (err) {
    console.log(err.message, "Algo salió mal");
    return res.json({ error: err.message });
  }
};

// DeleteTimelineItem
export const deleteTimelineItem = async (req, res) => {
  console.log(req.params, "Riquelme");
  const { id } = req.params;

  try {
    const timeline = await Timeline.findByIdAndDelete(id);
    return res.json(timeline);
  } catch (err) {
    console.log(err.message, "Algo salió mal");
    return res.json({ error: "Algo salió mal, por favor intente nuevamente" });
  }
};

// UpdateTimelineItem
export const updateTimelineItem = async (req, res) => {

  const { highlights, year } = req.body;

  if (!year) return res.json({ error: "Por favor ingrese un año" });

  if (!highlights.length)
    return res.json({
      error: "Por favor ingrese almenos un emprendimiento",
    });

  const isFromCloudinary = (str) => {
    const validate =
      typeof str === "string" && str.split(".")[1] === "cloudinary";
    return validate;
  };

  try {
    const { id } = req.params;

    const aux = highlights.map(async (item) => {
      const images = item.img.map(async (i) => ({
        ...i,
        src: !isFromCloudinary(i.src) ? await uploadImage(i.src) : i.src,
      }));

      const updatedImages = await Promise.all(images);
      console.log(updatedImages, "riquelme");
      return { ...item, img: updatedImages };
    });

    const updatedHighLights = await Promise.all(aux);
    const updatedTimeline = { ...req.body, highlights: updatedHighLights };

    const timeline = await Timeline.findByIdAndUpdate(id, updatedTimeline, {
      new: true,
    });

    return res.json(timeline);
  } catch (err) {
    console.log(err.message, "Algo salió mal");
    return res.json({ error: "Algo salió mal, por favor intente nuevamente" });
  }
};

// ReadTimeline
export const readTimeline = async (req, res) => {
  try {
    const all = await Timeline.find().populate("year").sort({ year: 1 });
    return res.json(all);
  } catch (err) {
    console.log(err.message, "Algo salió mal");
    return res.json({ error: "Algo salió mal, por favor intente nuevamente" });
  }
};

// ReadTimelineItem
export const readTimelineItem = async (req, res) => {
  const { id } = req.params;
  try {
    const project = await Timeline.findById(id);
    return res.json(project);
  } catch (err) {
    console.log(err.message, "Algo salió mal");
    return res.json({ error: "Algo salió mal, por favor intente nuevamente" });
  }
};
