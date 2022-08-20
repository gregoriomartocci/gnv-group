import { SxProps } from "@mui/material";

export const SelectorContainer: SxProps= {
  display: "grid",
  gridTemplateColumns: "1fr",
  width: "100%",
  margin: "40px 0",
};

export const SelectorWrapper: SxProps = {
  display: "grid",
  gridTemplateRows: "repeat(2, auto)",
  width: "100%",
  fontFamily: "Poppins",
};

export const SelectorTabs: SxProps = {
  display: "flex",
  fontFamily: "Poppins",
};

export const SelectorTab: SxProps = {
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

export const SelectorTabActive: SxProps = {
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

export const SelectorFilters: SxProps = {
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

export const SelectorFilter: SxProps = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "#1A2D4E",
  width: "100%",
  height: "100%",
  fontFamily: "Poppins",
};
