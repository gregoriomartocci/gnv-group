import { SxProps, Theme } from "@mui/material";

export const MenuContainer: SxProps<Theme> = {
  padding: "0 10%",
  height: "80px",
  backgroundColor: "#f5f5f5",
};

export const MenuContent: SxProps<Theme> = {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  alignItems: "center",
  height: "100%",
};

export const Logo: SxProps<Theme> = {
  fontFamily: "Poppins, sans-serif",
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
