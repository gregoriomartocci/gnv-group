import { SxProps, Theme } from "@mui/material";

export const CellTable: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  fontFamily: "'Montserrat', sans-serif",
  fontSize: "15px",

  img: {
    width: "35px",
    height: "35px",
    borderRadius: "50%",
    objectFit: "cover",
    margin: "0px 10px",
  },
};

export const GrayBackground: SxProps<Theme> = {
  backgroundColor: "#fafafa",
  border: "unset",

};
