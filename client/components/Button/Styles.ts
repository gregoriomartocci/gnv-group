import { SxProps, Theme } from "@mui/material";

const magenta = "#e91e63";
const naranja = "#ff3d00";
const white = "#ffffff";
const black = "#212121";
const blue = "#425CCD";
const linearGradient = `linear-gradient(45deg, ${magenta}, ${naranja})`;

export const Primary: SxProps<Theme> = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "12px",
  backgroundColor: black,
  borderRadius: "7.5px",
  padding: "15px 35px",
  whiteSpace: "nowrap",
  color: "#fff",
  cursor: "pointer",
  fontWeight: 500,
  fontFamily: "'Montserrat', sans-serif",
  "&:hover": {
    backgroundColor: black,
  },
};

export const Secondary: SxProps<Theme> = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "12px",
  backgroundColor: white,
  borderRadius: "7.5px",
  padding: "15px 35px",
  whiteSpace: "nowrap",
  color: "#212121",
  cursor: "pointer",
  fontWeight: 500,
  fontFamily: "'Montserrat', sans-serif",
  "&:hover": {
    backgroundColor: white,
  },
};

export const Auth: SxProps<Theme> = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "15px 0",
  fontSize: "12px",
  background: magenta,
  borderRadius: "7.5px",
  whiteSpace: "nowrap",
  color: "#fff",
  cursor: "pointer",
  fontWeight: 500,
  fontFamily: "'Montserrat', sans-serif",
  "&:hover": {
    backgroundColor: magenta,
  },
};

export const Blue: SxProps<Theme> = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  fontSize: "12px",
  backgroundColor: blue,
  borderRadius: "7.5px",
  whiteSpace: "nowrap",
  padding: "15px 35px",
  color: "#fff",
  cursor: "pointer",
  fontWeight: 500,
  fontFamily: "'Montserrat', sans-serif",

  "&:hover": {
    backgroundColor: blue,
  },
};
