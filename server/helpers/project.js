import cloudinary from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

export const uploadImage = async (image) => {
  // console.log(image)
  try {
    const { secure_url } = await cloudinary.uploader.upload(image);
    return secure_url;
  } catch (err) {
    if (err) console.log(err);
    return err.message;
  }
};
