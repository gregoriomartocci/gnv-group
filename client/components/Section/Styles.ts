import { SxProps, Theme } from "@mui/material";

export const SectionStyle: SxProps<Theme> = {
  width: "100%",
  height: "100%",
  padding: "35px 0",
};

export const Container: SxProps<Theme> = {
  //   padding: "40px calc((100vw - 1300px) /2)",
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gridTemplateRows: "800px",
};

export const ColumnLeft: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  lineHeight: "1.4",
  padding: "15px 30px",

  h1: {
    marginBottom: "15px",
    fontSize: "(clamp, 20px, 6vw, 30px)",
  },

  p: {
    marginBottom: "20px",
  },
};

export const ColumRight: SxProps<Theme> = {
  padding: "15px 30px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
};
