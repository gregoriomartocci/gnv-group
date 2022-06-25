import { SxProps, Theme } from "@mui/material";

export const CellTable: SxProps<Theme> = {
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",

  img: {
    width: "32px",
    height: "32px",
    borderRadius: "50%",
    objectFit: "cover",
    margin: "0px 10px",
  },
};

