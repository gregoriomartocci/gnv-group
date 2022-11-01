import express from "express";

const router = express.Router();

// controllers
const {
  signup,
  signin,
  forgotPassword,
  resetPassword,
  getUsers,
} = require("../controllers/auth");

router.post("/signup", signup);
router.post("/signin", signin);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);
router.get("/users", getUsers);

export default router;
