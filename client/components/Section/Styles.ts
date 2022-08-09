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
  gridTemplateColumns: "1fr 1fr",
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
};

export const ColumnLeft: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "0 15% 0 10%",
  wordBreak: "break-word",
  width: "100%",
  height: "100%",
};

export const ColumRight: SxProps<Theme> = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100%",

  img: {
    width: "100%",
    height: "100vh",
    objectFit: "cover",
  },
};
