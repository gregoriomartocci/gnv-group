import express from "express";
import {
  createTemplate,
  editTemplate,
  getTemplates,
  removeTemplate,
} from "../controllers/template";

const router = express.Router();

// controllers

router.post("/template", createTemplate);
router.post("/edit-template/:id", editTemplate);
router.delete("/template/:id", removeTemplate);
router.get("/templates", getTemplates);

export default router;
