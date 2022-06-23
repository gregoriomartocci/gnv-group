import Project from "../models/project";

export const createProject = async (req, res) => {
  try {
    const { name, description, type, published, status } = req.body;

    const alreadyExist = await Project.findOne({ name })

    if (alreadyExist) return res.json({ error: "Ya existe un emprendimiento con ese nombre." });

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
