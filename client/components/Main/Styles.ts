import { SxProps, Theme } from "@mui/material";

export const SliderButtons: SxProps<Theme> = {
  position: "absolute",
  bottom: "50px",
  right: "50px",
  display: "flex",
  zIndex: 10,
  marginRight: "15px",
  userSelect: "none",
  transition: "0.3s",
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

export const arrowButtons: SxProps<Theme> = {
  width: "50px",
  height: "50px",

  // &:hover {
  //   backgroundColor: "#cd853f",
  //   transform: "scale(1.05)",
  // }
};
