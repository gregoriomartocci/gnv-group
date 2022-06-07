import { SxProps, Theme } from "@mui/material";
import { textAlign } from "@mui/system";

export const SliderButtons: SxProps<Theme> = {
  position: "absolute",
  bottom: "50px",
  right: "50px",
  display: "flex",
  zIndex: 10,
  marginRight: "15px",
  userSelect: "none",
  transition: "0.3s",
  color: "#b2b2b2",

  "&:hover": {
    transform: "scale(1.05)",
  },
};

export const MainSection: SxProps<Theme> = {
  height: "100vh",
  maxHeight: "1100px",
  position: "relative",
  overflow: "hidden",
};

export const MainContainer: SxProps<Theme> = {
  width: "100%",
  height: "100%",
  display: "flex",
  justifycontent: "center",
  alignItems: "center",
  overflow: "hidden",
  position: "relative",
};

export const ArrowButtons: SxProps<Theme> = {
  width: "50px",
  height: "50px",
  color: "#fff",
  cursor: "pointer",
  borderRadius: "50px",
  padding: "10px",
  marginRight: "1rem",
  userSelect: "none",
  transition: "0.3s",
};

export const MainSlide: SxProps<Theme> = {
  zIndex: 1,
  width: "100vw",
  height: "100%",
};

export const MainSlider: SxProps<Theme> = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  "&::before": {
    content: '""',
    position: "absolute",
    zIndex: 2,
    width: "100%",
    height: "100vh",
    bottom: "0vh",
    left: 0,
    overflow: "hidden",
    opacity: "0.4",
    background:
      "linear-gradient( 0deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 50%, rgba(0, 0, 0, 0.6) 100% )",
  },
};

export const MainImage: SxProps<Theme> = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  display: "flex",
  objectFit: "cover",
};

export const MainContent: SxProps<Theme> = {
  position: "relative",
  zIndex: 10,
  display: "flex",
  flexDirection: "column",
  maxWidth: "1600px",
  width: "calc(100% - 100px)",
  color: "#fff",
  fontFamily: "'Montserrat', sans-serif",

  h1: {
    fontSize: "clamp(1rem, 8vw, 2rem);",
    fontWeight: 400,
    textTransform: "uppercase",
    textShadow: "0px 0px 20px rgba(0, 0, 0, 0.4);",
    textAlign: "left",
    marginBottom: "10px",
  },
};
