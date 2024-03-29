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
  alignItems: { xs: "flex-start", md: "center" },
  justifyContent: "flex-end",
  textAlign: "right",
  flexDirection: {
    xs: "column-reverse",
    lg: "row",
  },

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
    lg: "row-reverse",
  },
  textAlign: "right",
  alignItems: "center",
  width: "100%",
  height: "100%",
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
