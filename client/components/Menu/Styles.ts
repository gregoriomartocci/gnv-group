import { SxProps, Theme } from "@mui/material";

export const MenuContainer: SxProps<Theme> = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  padding: "0 10%",
  height: "80px",
  zIndex: 50,
  color: "#fff",
  fontFamily: "'Montserrat', sans-serif",
  transition:"all 0.3s ease",
  fontWeight:600,
};

export const MenuContainerOnScroll: SxProps<Theme> = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  padding: "0 10%",
  height: "80px",
  zIndex: 50,
  color: "#212121",
  backgroundColor: "#fff",
  fontFamily: "'Montserrat', sans-serif",
  transition:"all 0.3s ease",
  fontWeight:600,
};

export const MenuContent: SxProps<Theme> = {
  display: "grid",
  gridTemplateColumns: "1fr auto",
  alignItems: "center",
  height: "100%",
  width: "100%",
};

export const Logo: SxProps<Theme> = {
  // fontFamily: "Poppins, sans-serif",
  fontFamily: "'Montserrat', sans-serif",
};

export const MenuItems: SxProps<Theme> = {
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  width: "100%",
};

export const MenuItem: SxProps<Theme> = {
  margin: "15px",
};

export const AccountIcon: SxProps<Theme> = {
  color: "#fff",
};

export const CloseIcon: SxProps<Theme> = {
  color: "#fff",
};
