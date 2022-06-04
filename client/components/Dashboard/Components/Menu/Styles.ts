import { SxProps, Theme } from "@mui/material";

const paper = "#ffffff";

export const MenuContainer: SxProps<Theme> = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px 20px",
  height: "80px",
  width: "100%",
  backgroundColor: paper,
};
