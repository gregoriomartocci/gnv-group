import { SxProps, Theme } from "@mui/material";

const magenta = "#e91e63";
const naranja = "#ff3d00";
const linearGradient = `linear-gradient(45deg, ${magenta}, ${naranja})`;

export const Primary: SxProps<Theme> = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  margin: "15px 0",
  fontSize: "12px",
  background: "#212121",
  borderRadius: "7.5px",
  padding: "15px",
  color: "#fff",
  cursor: "pointer",
  fontWeight: 500,
};

export const Secondary: SxProps<Theme> = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  margin: "15px 0",
  fontSize: "12px",
  background: "#fff",
  borderRadius: "7.5px",
  padding: "15px",
  color: "#212121",
  cursor: "pointer",
  fontWeight: 500,
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
  padding: "15px",
  color: "#fff",
  cursor: "pointer",
  fontWeight: 500,
};

export const Blue: SxProps<Theme> = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  margin: "15px 0",
  fontSize: "12px",
  background: "#425CCD",
  borderRadius: "7.5px",
  padding: "15px",
  color: "#fff",
  cursor: "pointer",
  fontWeight: 500,
};
