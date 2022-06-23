import mongoose from "mongoose";
import nanoid from "nanoid";
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    description: {},
    images: [],
    type: {
      type: String,
      required: true,
    },
    published: { type: Boolean, default: true },
    status: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Project", userSchema);
