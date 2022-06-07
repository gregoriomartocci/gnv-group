import { SxProps, Theme } from "@mui/material";

export const SectionStyle: SxProps<Theme> = {
  width: "100%",
  height: "100%",
  padding: "35px",
};

export const Container: SxProps<Theme> = {
  display: "flex",
  h1: {
    marginBottom: "15px",
    fontSize: "(clamp, 20px, 6vw, 30px)",
    fontWeight: 600,
  },

  p: {
    marginBottom: "20px",
  },
};

export const Reverse: SxProps<Theme> = {
  display: "flex",
  justifyContent: "flex-end",
  flexDirection: "row-reverse",
  textAlign: "right",
  width: "100%",
  h1: {
    display: "flex",
    justifyContent: "flex-end",
    marginBottom: "15px",
    fontSize: "(clamp, 20px, 6vw, 30px)",
    fontWeight: 600,
    textAlign: "right",
  },

  p: {
    marginBottom: "20px",
    textAlign: "right",
  },
};

export const ColumnLeft: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  lineHeight: "1.4",
  padding: "15px 30px",
  fontFamily: "'Montserrat', sans-serif",
};

export const ColumRight: SxProps<Theme> = {
  padding: "15px 30px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  maxWidth: "50%",

  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
};
