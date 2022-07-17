import { SxProps, Theme } from "@mui/material";

export const MenuContainer: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  position: "relative",
  color: "#212121",
  overflow: "hidden",
  width: "100%",
};

export const MenuItem: SxProps<Theme> = {
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  color: "#666E77",
  fontFamily: "'Montserrat'",
  fontWeight: "500",
  padding: "10px",
  width: "100%",
  cursor: "pointer",

  "&:hover": {
    backgroundColor: "#eeeeee",
  },
};

export const AccountBottom: SxProps<Theme> = {
  justifyContent: "center",
  alignItems: "center",
};
