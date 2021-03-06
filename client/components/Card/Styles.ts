import { SxProps, Theme } from "@mui/material";

export const CardContainer: SxProps<Theme> = {
  display: "grid",
  gridTemplateRows: "repeat(3, auto)",
  backgroundColor: "#fff",
  borderRadius: "20px",
  cursor: "pointer",
  fontFamily: "'Poppins', sans-serif",
  fontSize: "20px",
  "&:hover": {
    boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
  },
  padding: "20px",

  img: {
    width: "100%",
    height: "400px",
    objectFit: "cover",
    borderRadius: "15px",
    objectPosition: "center center"
  },
};

export const CardHeader: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  fontFamily: "'Poppins', sans-serif",
};

export const CardBody: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  fontFamily: "'Poppins', sans-serif",
};
