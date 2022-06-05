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
  fontFamily: "Poppins",
};

export const SelectorTabs: SxProps<Theme> = {
  display: "flex",
  fontFamily: "Poppins",
};

export const SelectorTab: SxProps<Theme> = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#fafafa",
  color: "#1A2D4E",
  padding: "20px",
  fontWeight: 600,
  fontSize: "13px",
  cursor: "pointer",
  borderTop: "1px solid #eeeeee",
  borderLeft: "1px solid #eeeeee",
  borderRight: "1px solid #eeeeee",
  borderRadius: "7px 7px 0 0",
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
  zIndex: 100,
  borderTop: "1px solid #eeeeee",
  borderLeft: "1px solid #eeeeee",
  borderRight: "1px solid #eeeeee",
  borderRadius: "7px 7px 0 0",
};

export const SelectorFilters: SxProps<Theme> = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr) 20%",
  gridColumnGap: "20px",
  gridTemplateRows: "repeat(2, auto)",
  gridRowsGap: 0,
  width: "100%",
  backgroundColor: "#fff",
  padding: "20px",
  fontFamily: "Poppins",
  border: "1px solid #eeeeee",
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
