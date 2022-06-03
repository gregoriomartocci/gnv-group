import { SxProps, Theme } from "@mui/material";

export const ModalContainer: SxProps<Theme> = {
  position: "absolute",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  top: 0,
  left: 0,
  height: "100%",
  width: "100%",
  zIndex: 150,
};

export const ModalWrapper: SxProps<Theme> = {
  position: "absolute",
  height: "60vh",
  maxWidth: "60vw",
  borderRadius: "25px",
  backgroundColor: "#fff",
  boxShadow: 24,
};
