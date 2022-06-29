import express from "express";

const router = express.Router();

// controllers
const { createProject, getProjects, uploadImage } = require("../controllers/project");

router.post("/upload-image", uploadImage);
router.post("/project", createProject);
router.get("/projects", getProjects);


export default router;
