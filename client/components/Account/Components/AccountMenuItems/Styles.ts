import { SxProps, Theme } from "@mui/material";

export const AccountMenuItemContainer: SxProps<Theme> = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "#212121",
  width: "100%",
};

export const AccountMenuItemIcon: SxProps<Theme> = {
  display: "flex",
  fontSize: "12px",
  color: "#e0e0e0",
};

export const AccountMenuItemText: SxProps<Theme> = {
  display: "flex",
  fontFamily: "'Poppins', sans-serif",
  fontSize: "15px",
  color: "#616161",
  margin: "0 8px",
  width: "100%",
};
