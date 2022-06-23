import express from "express";

const router = express.Router();

// controllers
const { createProject } = require("../controllers/project");

router.post("/project", createProject);

export default router;
