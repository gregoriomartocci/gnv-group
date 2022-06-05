import { SxProps, Theme } from "@mui/material";

export const ProjectsContainer: SxProps<Theme> = {
  display: "grid",
  flexWrap: "wrap",
  gridTemplateColumns: "repeat(4,1fr)",
  gap: 8,
  padding: "40px 10%",
  backgroundColor: "#fff",
  fontFamily: "Poppins",
};
