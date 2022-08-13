import { SxProps, Theme } from "@mui/material";

export const Carousel: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#fff",
  borderRadius: "20px",
  cursor: "pointer",
  fontFamily: "'Poppins', sans-serif",
  fontSize: "20px",
  "&:hover": {
    boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
  },
  padding: "20px",
  margin: "15px",

  img: {
    objectFit: "cover",
    width: "100%",
    borderRadius: "15px",
  },
};

export const CardContainer: SxProps<Theme> = {
  position: "relative",
  display: "flex",
  flexDirection: "column",
  width: "275px",
  backgroundColor: "#fff",
  borderRadius: "15px",
  cursor: "pointer",
  fontFamily: "'Poppins', sans-serif",
  fontSize: "20px",
  boxShadow: "rgba(0, 0, 0, 0.15) 0px 3px 8px",
  padding: "10px",
  margin: "-50px",
};
