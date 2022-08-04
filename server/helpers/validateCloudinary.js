




export const validate_cloudinary = (str) => {
  const validate =
    typeof str === "string" && str.split(".")[1] === "cloudinary";
  return validate;
};
