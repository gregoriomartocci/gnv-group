import { SxProps, Theme } from "@mui/material";

export const MenuContainer: SxProps = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  padding: "0 10%",
  height: "80px",
  zIndex: 2500,
  color: "#fff",
  fontFamily: "'Montserrat', sans-serif",
  transition: "all 0.3s ease",
  fontWeight: 600,
};

export const MenuContainerOnScroll: SxProps<Theme> = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  padding: "0 10%",
  height: "80px",
  zIndex: 2500,
  color: "#212121",
  backgroundColor: "#fff",
  fontFamily: "'Montserrat', sans-serif",
  transition: "all 0.3s ease",
  fontWeight: 600,
};

export const MenuContainerRelative: SxProps = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  position: "relative",
  top: 0,
  left: 0,
  width: "100%",
  padding: "0 10%",
  height: "80px",
  zIndex: 2500,
  color: "##212121",
  fontFamily: "'Montserrat', sans-serif",
  transition: "all 0.3s ease",
  fontWeight: 600,
};

export const MenuContent: SxProps<Theme> = {
  display: "flex",
  justifyItems: "space-between",
  alignItems: "center",
  height: "100%",
  width: "100%",
};

export const LogoStyle: SxProps<Theme> = {
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  width: "100%",
};

export const MenuItems: SxProps<Theme> = {
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  width: "100%",
  fontSize:"17px"
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
