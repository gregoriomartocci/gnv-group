import mongoose from "mongoose";
const { Schema } = mongoose;

const templateSchema = new Schema(
  {
    id: {
      type: Number,
      required: true,
      default: 1,
    },
    name: {
      type: String,
      trim: true,
      required: true,
    },
    title: {
      type: String,
      trim: true,

    },
    carousel: [""],
    description: {
      type: String,

    },
  },
  { timestamps: true }
);

export default mongoose.model("Template", templateSchema);
