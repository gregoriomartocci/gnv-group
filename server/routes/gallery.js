import express from "express";

const router = express.Router();

// controllers
import {
  createGalleryItem,
  editGalleryItem,
  removeGalleryItem,
  getGallery,
} from "../controllers/gallery";

router.post("/gallery-item", createGalleryItem);
router.post("/edit-gallery/:id", editGalleryItem);
router.delete("/gallery/:id", removeGalleryItem);
router.get("/gallery", getGallery);

export default router;
