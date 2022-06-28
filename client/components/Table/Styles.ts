import { SxProps, Theme } from "@mui/material";

export const GrayBackground: SxProps<Theme> = {
  backgroundColor: "#fafafa",
  border: "unset",
};

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

