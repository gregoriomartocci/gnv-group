import { SxProps, Theme } from "@mui/material";

const paper = "#F3F6F9";

export const MainContainer: SxProps<Theme> = {
  display: "flex",
  width: "100%",
  padding: "15px",
  backgroundColor: paper,
  height:"calc(100% - 80px)",
  position: "relative",
};

