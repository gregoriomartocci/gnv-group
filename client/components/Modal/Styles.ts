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
  zIndex: 1300,
};

export const ModalWrapper: SxProps<Theme> = {
  position: "absolute",
  maxWidth: "80vw",
  borderRadius: "25px",
  backgroundColor: "#fff",
  boxShadow: 24,
};
