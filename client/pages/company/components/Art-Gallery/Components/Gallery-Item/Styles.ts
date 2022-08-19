import { SxProps, Theme } from "@mui/material";

export const ImageContainer: SxProps<Theme> = {
  display: "flex",
  position: "relative",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  borderRadius: "50",
  fontSize: "20px",
  height: "600px",
  width: "100%",

  img: {
    position: "absolute",
    top: "0",
    left: "0",
    height: "100%",
    width: "100%",
    objectFit: "cover",
  },
};

export const CardContainer: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  alignItems: "left",
  textAlign: "left",
  fontSize: "20px",
  margin: "25px 35px ",
  height: "100%",
  borderRadius: "10px",
  boxShadow: "rgba(0, 0, 0, 0.15) 0px 8px 16px",
  cursor: "pointer",
  "&:hover": {},
};

export const CardBody: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  alignItems: "left",
  textAlign: "left",
  fontSize: "18px",
  fontWeight: "400",
  padding: "25px 35px",
  height: "100%",
};
