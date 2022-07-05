import express from "express";

const router = express.Router();

// controllers
const { createProject, getProjects, removeProject } = require("../controllers/project");

router.post("/project", createProject);
router.delete("/project/:id", removeProject);
router.get("/projects", getProjects);

export default router;
