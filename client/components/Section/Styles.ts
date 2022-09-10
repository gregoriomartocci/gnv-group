import { SxProps, Theme } from "@mui/material";

export const SectionStyle: SxProps<Theme> = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  minHeight: "100vh",
};

export const Container: SxProps<Theme> = {
  display: "flex",
  width: "100%",
  minHeight: "100vh",
  alignItems: "center",
  justifyContent: "flex-end",
  textAlign: "right",
  flexDirection: { xs: "column", sm: "", md: "flex", lg: "flex", xl: "flex" },
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
  flexDirection: { xs: "column-reverse", sm: "", md: "row-reverse", lg: "row-reverse", xl: "row-reverse" },
  textAlign: "right",
  alignItems: "center",
  width: "100%",
  minHeight: "100vh",
};

export const ColumnLeft: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  textAlign: "left",
  width: "100%",
  direction: "unset",
  height: "100%",
  padding: "0 100px",
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
