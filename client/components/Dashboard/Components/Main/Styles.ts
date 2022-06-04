import { SxProps, Theme } from "@mui/material";

const paper = "#F3F6F9";

export const MainContainer: SxProps<Theme> = {
  display: "flex",
  height: "calc(100% - 80px)",
  width: "100%",
  padding: "15px",
  backgroundColor: paper,
};

export const MenuContainer: SxProps<Theme> = {
  justifyContent: "space-between",
  alignItems: "center",
  height: "60px",
  width: "100%",
  backgroundColor: paper,
};
