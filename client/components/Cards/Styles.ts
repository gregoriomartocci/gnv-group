import { SxProps, Theme } from "@mui/material";

export const ProjectsContainer: SxProps<Theme> = {
  display: "grid",
  gridTemplateColumns: "repeat(4,1fr)",
  gap: 4,
  backgroundColor: "#fff",
  fontFamily: "Poppins",
};
