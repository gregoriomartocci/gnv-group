import { SxProps, Theme } from "@mui/material";

export const ProjectContainer: SxProps<Theme> = {
  display: "grid",
  gridTemplateRows: "repeat(3, auto)",
  backgroundColor: "#fff",
  fontFamily: "Poppins",
  border: "1px solid #eeeeee",
  borderRadius: "20px",
  cursor: "pointer",
  boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",

  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "20px 20px 0px 0px",
  },
};

export const ProjectHeader: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  padding: "15px",
};

export const ProjectBody: SxProps<Theme> = {
  display: "flex",
  flexWrap: "wrap",
  padding: "15px",
};
