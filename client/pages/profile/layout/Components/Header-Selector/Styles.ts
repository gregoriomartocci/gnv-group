import { SxProps, Theme } from "@mui/material";

export const ImageContainer: SxProps<Theme> = {
  margin: "0 10px",

  img: {
    width: "200px",
    height: "200px",
    objectFit: "cover",
    borderRadius: "7.5px",
  },
};

export const AddImage: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 10px",
  width: "200px",
  height: "200px",
  backgroundColor: "#fafafa",
  border: "3px dashed #e0e0e0",
  borderRadius: "7.5px",
  cursor: "pointer",
};
