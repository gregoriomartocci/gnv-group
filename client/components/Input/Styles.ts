import { Mms } from "@mui/icons-material";
import { SxProps, Theme } from "@mui/material";

export const InputContainer: SxProps<Theme> = {

  width: "100%",
  margin: "20px 0",

  span: {
    fontSize: "15px",
    color: "#212121",
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
    fontFamily: "'Poppins', sans-serif",
    margin: "7.5px 0 0 0",
    fontSize: "13px",
  },
};
