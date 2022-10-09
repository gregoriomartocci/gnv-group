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
  borderRadius: "0 15px 15px 0",

  img: {
    height: "100%",
    width: "100%",
    borderRadius: "15px 0 0 15px",
    maxWidth: "100%",
    minHeight: { xs: "270px", sm: "" },
    objectFit: "cover",
    objectPosition: "center center",
  },
};
