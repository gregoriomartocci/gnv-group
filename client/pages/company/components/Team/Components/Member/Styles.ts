import { SxProps, Theme } from "@mui/material";

export const ImageContainer: SxProps<Theme> = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  borderRadius: "50",
  fontSize: "20px",
  padding: "20px",

  img: {
    objectFit: "cover",
    width: "100%",
    borderRadius: "50%",
  },
};

export const CardContainer: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  fontSize: "20px",
  padding: "20px",
  height: "100%",
  borderRadius: "10px",
  boxShadow: "rgba(0, 0, 0, 0.15) 0px 8px 16px",
  cursor: "pointer",
  "&:hover": {},

  img: {
    objectFit: "cover",
    width: "100%",
    maxWidth: "250px",
    borderRadius: "50%",
  },
};
