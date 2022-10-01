import express from "express";

const router = express.Router();

// controllers
const {
  createProject,
  getProjects,
  removeProject,
  editProject,
  getProject,
} = require("../controllers/project");

router.post("/project", createProject);
router.post("/edit-project/:id", editProject);
router.delete("/project/:id", removeProject);
router.get("/project/:id", getProject);
router.get("/projects", getProjects);

export default router;
