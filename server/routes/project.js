import express from "express";

const router = express.Router();

// controllers
const { createProject, getProjects } = require("../controllers/project");

router.post("/project", createProject);
router.get("/projects", getProjects);


export default router;
