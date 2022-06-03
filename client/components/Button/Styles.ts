import { SxProps, Theme } from "@mui/material";

const magenta = "#e91e63"
const naranja = "#ff3d00"
const linearGradient = `linear-gradient(45deg, ${magenta}, ${naranja})`;

export const Primary: SxProps<Theme> = {
  width: "100%",
  margin: "5px 0",
  backgroundColor: "red",
};

export const Secondary: SxProps<Theme> = {
  width: "100%",
  margin: "5px 0",
  backgroundColor: "blue",
};

export const Auth: SxProps<Theme> = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  margin: "15px 0",
  fontSize: "12px",
  background: magenta,
  borderRadius: "7.5px",
  padding: "12.5px 0",
  color: "#fff",
  cursor: "pointer",
  fontWeight: 500,
};
