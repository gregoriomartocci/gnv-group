import { SxProps, Theme } from "@mui/material";

export const SelectorContainer: SxProps<Theme> = {
  display: "grid",
  gridTemplateColumns: "1fr",
  width: "100%",
  padding: "0 10%",
  margin: "10px, 0px",
};

export const SelectorWrapper: SxProps<Theme> = {
  display: "grid",
  gridTemplateRows: "repeat(2, auto)",
  width: "100%",
  backgroundColor: "#fff",
  fontFamily: "Poppins",
  boxShadow:
    "rgba(0, 0, 0, 0.1) 0px 0px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;",
};

export const SelectorTabs: SxProps<Theme> = {
  display: "flex",
  fontFamily: "Poppins",
};

export const SelectorTab: SxProps<Theme> = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#F6F6F6",
  color: "#1A2D4E",
  padding: "20px",
  fontWeight: 600,
  fontSize: "13px",
  cursor: "pointer",
};

export const SelectorTabActive: SxProps<Theme> = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#fff",
  padding: "20px",
  cursor: "pointer",
  fontWeight: 600,
  color: "#425CCD",
  fontSize: "13px",
};

export const SelectorFilters: SxProps<Theme> = {
  display: "grid",
  gridTemplateColumns: "repeat(3, auto) 15%",
  gridColumnGap: "20px",
  gridTemplateRows: "repeat(2, auto)",
  gridRowsGap: 0,
  width: "100%",
  backgroundColor: "#fff",
  padding: "25px",
  fontFamily: "Poppins",
};

export const SelectorFilter: SxProps<Theme> = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "#1A2D4E",
  width: "100%",
  height: "100%",
  fontFamily: "Poppins",
};
