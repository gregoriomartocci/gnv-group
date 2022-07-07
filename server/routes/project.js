import express from "express";

const router = express.Router();

// controllers
const { createProject, getProjects, removeProject, editProject } = require("../controllers/project");

router.post("/project", createProject);
router.post("/edit-project/:id", editProject);
router.delete("/project/:id", removeProject);
router.get("/projects", getProjects);

export default router;
