import { SxProps, Theme } from "@mui/material";
import { textAlign } from "@mui/system";

export const MainSection: SxProps<Theme> = {
  height: "100vh",
  width: "100%",
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

export const SliderButtons: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  position: "absolute",
  bottom: "50px",
  right: "40px",
  top: "45%",
  zIndex: 10,
  marginRight: "15px",
  userSelect: "none",
  transition: "0.3s",
  color: "#b2b2b2",
};

export const ArrowButton: SxProps<Theme> = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "10px",
  color: "#fff",
  fontSize: "40px",
  cursor: "pointer",
  userSelect: "none",
  transition: "0.3s",
};

export const ArrowButtonActive: SxProps<Theme> = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "10px",
  color: "#fff",
  fontSize: "40px",
  cursor: "pointer",
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
  img: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    objectFit: "cover",
  },
  video: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    objectFit: "cover",
  },
};

export const MainContent: SxProps<Theme> = {
  position: "relative",
  zIndex: 10,
  display: "flex",
  flexDirection: "column",
  width: "100vw",
  padding: "10%",
  margin: "0 0 20px 0",
  color: "#fff",
};
