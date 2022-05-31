import { Theme } from "@mui/material";
import { SxProps } from "@mui/system";

export const grid: SxProps<Theme> = {
  display: "grid",
  height: "calc(100vh - 18rem)",
  overflow: "scroll",
};

export const container: SxProps<Theme> = {
  width: "100%",
  flexShrink: 0,
  p: 2,
};

export const main: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  rowGap: 1,
  bgcolor: "grey.100",
  borderRadius: 2,
  p: 1,
};

export const item: SxProps<Theme> = {
  border: "1px solid",
  borderColor: "grey.300",
  borderRadius: 2,
  bgcolor: "background.paper",
  py: 1,
  px: 2,
};
