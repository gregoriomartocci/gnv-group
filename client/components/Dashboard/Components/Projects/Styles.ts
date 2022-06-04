import { SxProps, Theme } from "@mui/material";

export const ProjectsContainer: SxProps<Theme> = {
  display: "grid",
  gridTemplateColumns: "repeat(4,1fr)",
  gap: 2,
  padding: "5% 10%",
  backgroundColor: "#fff",
  fontFamily: "Poppins",
};
