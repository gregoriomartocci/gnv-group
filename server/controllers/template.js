import { uploadImage, validateBase64 } from "../helpers/project";
import { validate_cloudinary } from "../helpers/validateCloudinary";
import Project from "../models/project";
import Template from "../models/template";

// CREATE
export const createTemplate = async (req, res) => {
  try {
    const { page, title, carousel, description } = req.body;

    console.log(req.body, "que nos llega??");

    let images_aux;
    let updated_images;

    if (carousel.length) {
      // create promise array
      images_aux = carousel.map(async (i) => ({
        ...i,
        src: !validate_cloudinary(i.src) ? await uploadImage(i.src) : i.src,
      }));

      updated_images = await Promise.all(images_aux);
    }

    const new_template = {
      page,
      title,
      carousel: updated_images,
      description,
    };

    const alreadyExist = await Template.findOne({ page });

    if (alreadyExist) {
      const updated = await Template.findOneAndUpdate({ page }, new_template, {
        new: "true",
      });

      return res.json(updated);
    } else {
      const template = await new Template(new_template).save();
      return res.json(template);
    }
  } catch (err) {
    console.log(err.message, "Algo salió mal");
    return res.json({ error: err.message });
  }
};

// DELETE
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

// UPDATE
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

// READ
export const getTemplates = async (req, res) => {
  try {
    const all = await Template.find().populate("page").sort({ createdAt: -1 });
    console.log(all, "DATA");
    return res.json(all);
  } catch (err) {
    console.log(err.message, "Algo salió mal");
    return res.json({ error: "Algo salió mal, por favor intente nuevamente" });
  }
};
