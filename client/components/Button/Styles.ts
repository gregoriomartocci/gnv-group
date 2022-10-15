import { SxProps, Theme } from "@mui/material";

const magenta = "#e91e63";
const naranja = "#ff3d00";
const white = "#ffffff";
const black = "#212121";
const paper = "#EFF4FB";
const red = "#DD5051";
const blue = "#425CCD";
const linearGradient = `linear-gradient(45deg, ${magenta}, ${naranja})`;

export const Primary: SxProps<Theme> = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "17px",
  backgroundColor: black,
  borderRadius: "7.5px",
  padding: { xs: "10px 20px", md: "12px 35px" },
  whiteSpace: "nowrap",
  color: "#fff",
  textTransform: "unset",
  cursor: "pointer",
  fontWeight: 600,
  fontFamily: "'Poppins', sans-serif",
  "&:hover": {
    backgroundColor: "#424242",
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
  fontFamily: "'Poppins', sans-serif",
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
  fontFamily: "'Poppins', sans-serif",
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
  fontFamily: "'Poppins', sans-serif",

  "&:hover": {
    backgroundColor: blue,
  },
};

export const Delete: SxProps<Theme> = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  fontSize: "12px",
  backgroundColor: red,
  borderRadius: "7.5px",
  whiteSpace: "nowrap",
  padding: "15px 35px",
  color: "#fff",
  cursor: "pointer",
  fontWeight: 500,
  fontFamily: "'Poppins', sans-serif",

  "&:hover": {
    backgroundColor: "#C74142",
  },
};

export const Paper: SxProps<Theme> = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  fontSize: "12px",
  backgroundColor: paper,
  borderRadius: "7.5px",
  whiteSpace: "nowrap",
  padding: "15px 35px",
  color: "#8C949D",
  cursor: "pointer",
  fontWeight: 500,
  fontFamily: "'Poppins', sans-serif",

  "&:hover": {
    backgroundColor: "#E9EDF2",
  },
};
