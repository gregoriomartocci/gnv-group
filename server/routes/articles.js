import express from "express";

const router = express.Router();

// controllers
import {
  createArticle,
  editArticle,
  getArticles,
  removeArticle,
} from "../controllers/article";

router.post("/article", createArticle);
router.post("/edit-article/:id", editArticle);
router.delete("/article/:id", removeArticle);
router.get("/articles", getArticles);

export default router;
