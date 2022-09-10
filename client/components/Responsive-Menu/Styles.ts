import { SxProps, Theme } from "@mui/material";
import zIndex from "@mui/material/styles/zIndex";

export const DropdownContainer: SxProps<Theme> = {
  position: "fixed",
  top: 0,
  left: 0,
  display: "grid",
  alignItems: "center",
  height: "100%",
  width: "100vw",
  backgroundColor: "#fff",
  transition: "0.3s ease-in-out",
  opacity: 1,
  translateX: "20px",
  zIndex: 5000,
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
};

export const DropdownLink: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#424242",
  fontSize: "22.5px",
  textDecoration: "none",
  transition: "0.2s ease-in-out",
  cursor: "pointer",
  fontWeight: "500",
  "&:hover": {
    color: "#616161",
    backgroundColor: "#f5f5f5",
  },
};

export const CloseResponsiveMenu: SxProps<Theme> = {
  position: "absolute",
  top: "40px",
  right: "40px",
  fontSize: "30px",
  cursor: "pointer",
  display: "flex",
  justifyContent: "center",
  color: "#424242",
};
