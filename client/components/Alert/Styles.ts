import { SxProps, Theme } from "@mui/material";

export const ToastContainer: SxProps<Theme> = {
  position: "fixed",
  display: "flex",
  justifyContent: "center",
  left: "40%",
  top: "70px",
  width: "400px",
  fontFamily: "'Poppins', sans-serif",
  zIndex: 5000,
};
