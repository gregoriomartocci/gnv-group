import { SxProps, Theme } from "@mui/material";

export const CellTable: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",

  img: {
    width: "32px",
    height: "32px",
    borderRadius: "50%",
    objectFit: "cover",
    margin: "0px 10px",
  },
};

export const CellStatus: SxProps<Theme> = {
  display: "grid",
  gridTemplateColumns: "40% auto",
  width: "100%",
  height: "100%",
};
