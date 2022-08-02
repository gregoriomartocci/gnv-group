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
