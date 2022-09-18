import { SxProps, Theme } from "@mui/material";

export const ProjectContainer: SxProps<Theme> = {

  display: "flex",
  alignItems: "center",
  backgroundColor: "#fff",
  cursor: "pointer",
  fontFamily: "'Poppins', sans-serif",
  fontSize: "20px",
  boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
  height: "500px",
  margin: "50px 250px",

  img: {

    height: "100%",
    width: "100%",
    objectFit: "cover",
  },
};

export const ProjectBody: SxProps<Theme> = {
  display: "flex",
  height: "100%",
  flexDirection: "column",
  fontFamily: "'Poppins', sans-serif",
  padding: "35px",
  maxWidth: "40%",
};
