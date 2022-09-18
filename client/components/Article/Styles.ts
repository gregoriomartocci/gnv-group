import { SxProps, Theme } from "@mui/material";

export const ProjectContainer: SxProps<Theme> = {
  display: "flex",
  flexDirection: { xs: "column", lg: "row" },
  alignItems: "center",
  backgroundColor: "#fff",
  cursor: "pointer",
  fontFamily: "'Poppins', sans-serif",
  fontSize: "20px",
  boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
  maxHeight: { xs: "100%", lg: "600px" },
  height: { xs: "100%", lg: "500px" },
  margin: { xs: "50px 10%", md: "50px 15%" },

  img: {
    height: "100%",
    width: "100%",
    maxWidth: "100%",
    objectFit: "cover",
    objectPosition: "center center",
  },
};

export const ProjectBody: SxProps<Theme> = {
  display: "flex",
  height: "100%",
  width: "100%",
  flexDirection: "column",
  justifyContent: "flex-start",
  fontFamily: "'Poppins', sans-serif",
  padding: "25px",
  maxWidth: { xs: "100%", lg: "50%" },
};
