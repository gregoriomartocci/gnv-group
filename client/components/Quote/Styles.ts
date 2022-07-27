import { SxProps, Theme } from "@mui/material";

export const QuoteContainer: SxProps<Theme> = {
  display: "flex",
  position: "relative",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100vh",
  padding: "20% 10%",
  fontFamily: "'Poppins', sans-serif",

  img: {
    width: "400px",
    height: "400px",
    borderRadius: "50%",
    objectFit: "cover",
  },
};
