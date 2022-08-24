import { SxProps, Theme } from "@mui/material";

export const SectionStyle: SxProps<Theme> = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100%",
};

export const Container: SxProps<Theme> = {
  display: "grid",
  gridTemplateColumns: "50% 50%",
  width: "100%",
  height: "100%",
  alignItems: "center",
  justifyContent: "flex-end",

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
  display: "grid",
  gridTemplateColumns: "50% 50%",
  direction: "rtl",
  textAlign: "right",
  justifyContent: "flex-end",
  alignItems: "center",
  width: "100%",
  height: "100%",

};

export const ColumnLeft: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  textAlign: "left",
  width: "100%",
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
