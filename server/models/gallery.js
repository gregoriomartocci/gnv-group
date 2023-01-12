import mongoose from "mongoose";
import auto_increment from "mongoose-auto-increment";

const { Schema } = mongoose;

const gallerySchema = new Schema(
  {
    id: {
      type: Number,
    },
    gallery: {
      type: String,
      trim: true,
    },
    artist: {
      type: String,
      required: true,
    },
    title: {
      type: String,
    },
    images: [{}],
    technique: {
      type: String,
    },
    measures: {
      type: String,
    },
    date: {
      type: String,
    },
    order: { type: Number },
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
