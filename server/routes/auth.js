import express from "express";

const router = express.Router();

// controllers
const {
  signup,
  signin,
  forgotPassword,
  resetPassword,
  getUsers,
  deleteUser,
  updateUser,
} = require("../controllers/auth");

// User
router.get("/user", getUsers);
router.post("/edit-user/:id", updateUser);
router.delete("/user/:id", deleteUser);

//  Auth
router.post("/signup", signup);
router.post("/signin", signin);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);

export default router;
