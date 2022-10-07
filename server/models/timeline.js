import mongoose from "mongoose";
import auto_increment from "mongoose-auto-increment";

const { Schema } = mongoose;

const timelineSchema = new Schema(
  {
    id: {
      type: Number,
      required: true,
      default: 1,
    },
    year: {
      type: String,
      trim: true,
      required: true,
    },
    highlights: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

auto_increment.initialize(mongoose.connection);

timelineSchema.plugin(auto_increment.plugin, {
  model: "Timeline",
  field: "id",
  startAt: 1,
  incrementBy: 1,
});

export default mongoose.model("Timeline", timelineSchema);
