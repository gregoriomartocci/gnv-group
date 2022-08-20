import { SxProps, Theme } from "@mui/material";

export const ImageContainer: SxProps<Theme> = {
  position: "relative",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  textAlign: "center",
  borderRadius: "50",
  fontSize: "20px",
  height: "700px",
  width: "100%",
  maxWidth: "800px",

  img: {
    position: "absolute",
    top: 0,
    left: 0,
    display: "flex",
    height: "100%",
    width: "100%",
    objectFit: "cover",
  },
};

export const CardContainer: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  position: "relative",
  alignItems: "flex-start",
  textAlign: "center",
  fontSize: "20px",

  cursor: "pointer",
};

export const BodyContainer: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  padding: "15px 0",
  alignItems: "flex-start",
  textAlign: "left",
  fontSize: "20px",
  height: "100%",
};
