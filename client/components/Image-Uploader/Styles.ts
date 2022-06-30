import { Theme } from "@mui/material";
import { SxProps } from "@mui/system";

const primary = "#94A3D1";
const secondary = "#FAFCFF";
const paper = "#F5F8FF";

export const grid: SxProps = {
  display: "grid",
  overflow: "scroll",
};

export const dropFileInput: SxProps = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  position: "relative",
  width: "100%",
  height: "200px",
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

export const dropFilePreview: SxProps = {
  marginTop: "30px",
  maxHeight: "150px",
  overflowY: "scroll",
  p: {
    fontWeight: 500,
  },
};

export const dropFilePreviewTitle: SxProps = {
  marginBottom: "20px",

  p: {
    fontWeight: 500,
  },
};

export const dropFilePreviewItem: SxProps = {
  position: "relative",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "10px",
  backgroundColor: paper,
  padding: "15px",
  borderRadius: "20px",

  img: {
    width: "50px",
    marginRight: "20px",
  },

  "&:hover": {
    opacity: "1",
  },
};

export const dropFilePreviewTitleItemInfo: SxProps = {
  display: "flex",
  justifyContent: "space-between",
  span: {
    backgroundColor: "#e0e0e0",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    right: "10px",
    top: "50%",
    transform: "translateY(-50%)",
    boxShadow: "#e0e0e0",
    cursor: "pointer",
    opacity: 0,
    transition: "opacity 0.3s ease",
  },
};

export const InfoMessage: SxProps = {
  margin: "2.5px 0",
  fontSize: "12px",
  fontFamily: "Poppins",
  fontWeight: "500",
};

export const imageContainer: SxProps = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  img: {
    width: "100%",
    maxHeight: "150px",
    borderRadius: "15px",
    objectFit: "cover",
  },
};

