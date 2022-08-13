import { SxProps, Theme } from "@mui/material";

export const ImageContainer: SxProps<Theme> = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  borderRadius: "50",
  fontSize: "20px",
  padding: "25px",

  img: {
    objectFit: "cover",
    width: "100%",
    borderRadius: "50%",
  },
};

export const CardContainer: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  alignItems: "left",
  textAlign: "left",
  fontSize: "20px",
  margin: "25px 35px ",
  padding: "45px",
  maxWidth: "450px",
  height: "500px",
  borderRadius: "10px",
  boxShadow: "rgba(0, 0, 0, 0.15) 0px 8px 16px",
  cursor: "pointer",
  "&:hover": {},
};
