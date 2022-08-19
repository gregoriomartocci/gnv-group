import { SxProps, Theme } from "@mui/material";

export const CardContainer: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#fff",
  borderRadius: "20px",
  cursor: "pointer",
  fontFamily: "'Poppins', sans-serif",
  fontSize: "20px",
  "&:hover": {
    boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
  },
  padding: "20px",
  margin: "25px 35px ",
  img: {
    objectFit: "cover",
    width: "100%",
    borderRadius: "15px",
  },
};

export const CardHeader: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  fontFamily: "'Poppins', sans-serif",
};

export const CardBody: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  fontFamily: "'Poppins', sans-serif",
};
