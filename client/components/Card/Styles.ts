import { SxProps, Theme } from "@mui/material";

export const ProjectContainer: SxProps<Theme> = {
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
    height: "100%",
    objectFit: "cover",
    borderRadius: "15px",
  },
};

export const ProjectHeader: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  fontFamily: "'Poppins', sans-serif",
};

export const ProjectBody: SxProps<Theme> = {
  display: "flex",
  flexWrap: "wrap",
  fontFamily: "'Poppins', sans-serif",
};