import { SxProps, Theme } from "@mui/material";

export const SectionStyle: SxProps<Theme> = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100%",
};

export const Container: SxProps<Theme> = {
  display: "flex",
  width: "100%",
  height: "100%",
  alignItems: "center",
  justifyContent: "flex-end",
  textAlign: "right",
  flexDirection: {
    xs: "column-reverse",
    sm: "column-reverse",
    md: "column-reverse",
    lg: "row",
    xl: "row",
  },
  // { xs: "", sm:"", md:"", lg:"", xl:"" }

  h1: {
    marginBottom: "15px",
    fontSize: "(clamp, 20px, 6vw, 30px)",
    fontWeight: 600,
  },

  p: {
    height: "100%",
    marginBottom: "20px",
  },
};

export const Reverse: SxProps<Theme> = {
  display: "flex",
  justifyContent: "center",
  flexDirection: {
    xs: "column-reverse",
    sm: "column-reverse",
    md: "column-reverse",
    lg: "row-reverse",
    xl: "row-reverse",
  },
  textAlign: "right",
  alignItems: "center",
  width: "100%",
  height: "100%",
};

export const ColumnLeft: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  textAlign: "left",
  width: "100%",
  direction: "unset",

  height: "100%",
  padding: {
    xs: "20px 0 0 0",
    sm: "20px 0 0 0",
    md: "7.5%",
    lg: "",
    xl: "",
  },
};

export const ColumRight: SxProps<Theme> = {
  display: "flex",
  width: "100%",
  height: "100%",

  img: {
    width: "100%",
    objectFit: "cover",
  },
};
