import { Theme } from "@mui/material";
import { SxProps } from "@mui/system";

const primary = "#94A3D1";
const secondary = "#FAFCFF";
const paper = "#F5F8FF";


export const dropFileInput: SxProps = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  position: "relative",
  width: "100%",
  height: "150px",
  border: `2px dashed ${primary}`,
  borderRadius: "20px",
  backgroundColor: secondary,
  color: "#9e9e9e",
  margin: "5px 0px",
  fontFamily: "Poppins",
  textAlign: "center",

  input: {
    opacity: "0",
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    cursor: "pointer",
  },
};

export const dropFileInputIcon: SxProps = {
  fontSize: "40px",
  color: primary,
};

export const dropFileInputLabel: SxProps = {
  textAlign: "center",
  color: "red",
  fontWeight: 600,
  padding: "10px",

  img: {
    width: "100px",
  },
};

export const dropFilePreviewTitle: SxProps = {
  marginBottom: "20px",

  p: {
    fontWeight: 500,
  },
};
