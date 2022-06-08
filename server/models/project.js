import mongoose, { SchemaTypes } from "mongoose";
import nanoid from "nanoid";
const { Schema } = mongoose;

//    id: 7,
//     title: "Luxury Villa",
//     price: "$4.280.000",
//     details: {
//       location: "Bali, Indonesia",
//       bathrooms: 2,
//       bedrooms: 4,
//       surface: 100,
//     },
//     image: ImageOne,
//     label: "View Home",
//     path: "/homes",
//     alt: "House",

const userSchema = new Schema(
  {
    id: {
      type: nanoid,
      trim: true,
      required: true,
    },
    title: {
      type: String,
      trim: true,
      required: true,
    },
    image: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    label: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      default: "Subscriber",
    },
    resetCode: "",
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
