import mongoose from "mongoose";
import auto_increment from "mongoose-auto-increment";

const { Schema } = mongoose;

const gallerySchema = new Schema(
  {
    id: {
      type: Number,
      required: true,
      default: 1,
    },
    gallery: {
      type: String,
      trim: true,
      required: true,
    },
    artist: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    image: {},
    technique: {
      type: String,
      required: true,
    },
    measures: {
      type: String,
      required: true,
    },
    date: {
      type: Number,
      required: true,
    },
    published: { type: Boolean, default: true },
  },
  { timestamps: true }
);

auto_increment.initialize(mongoose.connection);

gallerySchema.plugin(auto_increment.plugin, {
  model: "Gallery",
  field: "id",
  startAt: 1,
  incrementBy: 1,
});

export default mongoose.model("Gallery", gallerySchema);
