require("dotenv").config();
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import authRoutes from "./routes/auth";
import projectRoutes from "./routes/project";
import articleRoutes from "./routes/articles";
import templateRoutes from "./routes/template";

const morgan = require("morgan");
const app = express();

// db connection
mongoose
  .connect(process.env.DATABASE)
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("DB CONNECTION ERROR: ", err));

// middlewares
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev"));

// route middlewares
app.use("/api", authRoutes);
app.use("/api", projectRoutes);
app.use("/api", articleRoutes);
app.use("/api", templateRoutes);

const port = process.env.SERVER || 8000;

app.listen(port, () => console.log(`Server running on port ${port}`));
