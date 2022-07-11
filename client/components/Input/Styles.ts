import { Mms } from "@mui/icons-material";
import { SxProps, Theme } from "@mui/material";

export const InputContainer: SxProps<Theme> = {

  width: "100%",
  margin: "7.5px 0",

  span: {
    fontSize: "13px",
    color: "#9e9e9e",
    fontWeight: "600",
    margin: "10px 0",
  },
  input: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    padding: "15px",
    border: "1px solid #e0e0e0",
    borderRadius: "5px",
    fontFamily: "'Montserrat', sans-serif",
    margin: "5px 0",
    fontSize: "13px",
  },
};
