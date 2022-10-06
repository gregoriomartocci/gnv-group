import mongoose from "mongoose";
import auto_increment from "mongoose-auto-increment";

const { Schema } = mongoose;

const articleSchema = new Schema(
  {
    id: {
      type: Number,
      required: true,
      default: 1,
    },
    title: {
      type: String,
      trim: true,
      required: true,
    },
    source: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    images: [{}],
    published: { type: Boolean, default: true },
    link: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

auto_increment.initialize(mongoose.connection);

articleSchema.plugin(auto_increment.plugin, {
  model: "Article",
  field: "id",
  startAt: 1,
  incrementBy: 1,
});

export default mongoose.model("Article", articleSchema);
