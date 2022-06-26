import { SxProps, Theme } from "@mui/material";

export const ProjectContainer: SxProps<Theme> = {
  display: "grid",
  gridTemplateColumns: "repeat(2, auto)",
  backgroundColor: "#fff",
  cursor: "pointer",
  fontFamily: "'Poppins', sans-serif",
  fontSize: "20px",
  boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",

  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
};

export const ProjectBody: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  fontFamily: "'Poppins', sans-serif",
  padding: "35px",
};
