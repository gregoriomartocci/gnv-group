import { SxProps, Theme } from "@mui/material";

export const AuthContainer: SxProps<Theme> = {
  display: "grid",
  gridTemplateColumns: "40% auto",
  width: "100%",
  height: "100vh",
};

export const AuthImage: SxProps<Theme> = {
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
};

export const Login: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  padding: "40px 20%",
  fontFamily: "'Poppins', sans-serif",
};

export const Toast: SxProps<Theme> = {
  position: "fixed",
  left: "40%",
  width: "400px",
  top: "100px",
  fontFamily: "'Poppins', sans-serif",
};
