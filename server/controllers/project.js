import { uploadImage } from "../helpers/project";
import Project from "../models/project";

export const createProject = async (req, res) => {
  try {
    const { name, description, type, published, status, images } = req.body;

    const alreadyExist = await Project.findOne({ name });

    if (alreadyExist)
      return res.json({ error: "Ya existe un emprendimiento con ese nombre." });

    const upload = images.map((i) => uploadImage(i));

    console.log(upload, "que pasa che");

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
