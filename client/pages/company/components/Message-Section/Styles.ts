import { SxProps, Theme } from "@mui/material";

export const imageContainer: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  position: "relative",
  width: "100%",
  height: "70vh",
  right: "50px",
  top: "0",
  backgroundColor: "#fff",
  borderRadius: "20px",
  cursor: "pointer",
  fontFamily: "'Poppins', sans-serif",
  fontSize: "20px",
  boxShadow: "rgba(0, 0, 0, 0.20) 0px 14px 18px",
  margin: "15px",

  img: {
    objectFit: "cover",
    width: "100%",
    height: "100%",
    borderRadius: "15px",
  },
};
