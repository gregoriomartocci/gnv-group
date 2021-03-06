import mongoose from "mongoose";
import auto_increment from "mongoose-auto-increment";

const { Schema } = mongoose;

const projectSchema = new Schema(
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
    description: { type: String, required: true },
    images: [{}],
    published: { type: Boolean, default: true },
    status: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

auto_increment.initialize(mongoose.connection);

projectSchema.plugin(auto_increment.plugin, {
  model: "Project",
  field: "id",
  startAt: 1,
  incrementBy: 1,
});

export default mongoose.model("Project", projectSchema);
