import { SxProps, Theme } from "@mui/material";

export const ProjectsContainer: SxProps<Theme> = {
  display: "grid",
  flexWrap: "wrap",
  gridTemplateColumns: "repeat(4,1fr)",
  gap: 4,
  padding: "5% 10%",
  backgroundColor: "#fff",
  fontFamily: "Poppins",
};
