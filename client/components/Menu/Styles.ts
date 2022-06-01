import { SxProps, Theme } from "@mui/material";

export const MenuContainer: SxProps<Theme> = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  padding: "0 10%",
  height: "80px",
  zIndex: 10,
  color: "#fff",
};

export const MenuContent: SxProps<Theme> = {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  alignItems: "center",
  height: "100%",
};

export const Logo: SxProps<Theme> = {
  // fontFamily: "Poppins, sans-serif",
  fontFamily: "'Montserrat', sans-serif",
};

export const MenuItems: SxProps<Theme> = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-end",
  alignItems: "center",
};

export const MenuItem: SxProps<Theme> = {
  margin: "15px",
};

export const AccountIcon: SxProps<Theme> = {
  color: "#fff",
};
