import { SxProps, Theme } from "@mui/material";

export const AuthContainer: SxProps<Theme> = {
  display: "grid",
  gridTemplateColumns: "40% auto",
  width: "100%",
  height: "100%",
};

export const AuthImage: SxProps<Theme> = {
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "20px 0px 0px 20px",
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
