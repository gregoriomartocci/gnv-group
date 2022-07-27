import { SxProps, Theme } from "@mui/material";

export const DropdownContainer: SxProps<Theme> = {
  position: "fixed",
  top: 0,
  left: 0,
  display: "grid",
  alignItems: "center",
  zIndex: 100,
  height: "100%",
  width: "100vw",
  backgroundColor: "#212121",
  transition: "0.3s ease-in-out",
  opacity: 1,
};

export const Icon: SxProps<Theme> = {
  position: "absolute",
  top: "20px",
  right: "20px",
  background: "transparent",
  fontSize: "15px",
  cursor: "pointer",
  outline: "none",
};

export const CloseIcon: SxProps<Theme> = {
  color: "#000d1a",
};

export const DropdownMenu: SxProps<Theme> = {
  display: "grid",
  gridTemplateColumns: "1fr",
  gridTemplateRows: "repeat(4, 80px)",
  textAlign: "center",
  marginBottom: "30px",
  fontFamily: "'Montserrat', sans-serif",
  textTransform: "uppercase",
};

export const DropdownLink: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#fff",
  fontSize: "20px",
  textDecoration: "none",
  transition: "0.2s ease-in-out",

  "&:hover": {
    color: "#fff",
  },
};

export const Button: SxProps<Theme> = {
  position: "absolute",
  top: "40px",
  right: "40px",
  fontSize: "30px",
  cursor: "pointer",
  display: "flex",
  justifyContent: "center",
  color: "#fff",
};
