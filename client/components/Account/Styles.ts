import { SxProps, Theme } from "@mui/material";

export const AccountContainer: SxProps<Theme> = {
  display: "grid",
  gridTemplateRows: "repeat(3, auto)",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  color: "#212121",
  overflow: "hidden",
  width: "100%",
};

export const AccountTop: SxProps<Theme> = {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  color: "#212121",
};

export const AccountBottom: SxProps<Theme> = {
  justifyContent: "center",
  alignItems: "center",
};
