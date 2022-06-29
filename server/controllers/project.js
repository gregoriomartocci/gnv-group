import Project from "../models/project";
import cloudinary from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINAY_SECRET,
});

export const uploadImage = async (req, res) => {
  const { image } = req.body;
  console.log(req.body);

  try {
    const { secure_url } = await cloudinary.uploader.upload(image);
    return secure_url;
  } catch (err) {
    return res.json(err.message);
  }
};

export const createProject = async (req, res) => {
  try {
    const { name, description, type, published, status } = req.body;

    const alreadyExist = await Project.findOne({ name });

    if (alreadyExist)
      return res.json({ error: "Ya existe un emprendimiento con ese nombre." });

    const project = await new Project({
      name,
      description,
      type,
      published,
      status,
    }).save();

    return res.json(project);
  } catch (err) {
    return res.json(err.message);
  }
};

export const getProjects = async (req, res) => {
  try {
    const all = await Project.find().populate("name").sort({ createdAt: -1 });
    return res.json(all);
  } catch (err) {
    return res.json(err.message);
  }
};
