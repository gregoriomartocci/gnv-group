import { SxProps } from "@mui/material";
import { Theme } from "@mui/system";

export const Login: SxProps<Theme> = {
  display: "flex",
  width: "700px",
  height: "auto",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  padding: "45px",
  fontFamily: "'Poppins', sans-serif",
};


export const InputContainer: SxProps<Theme> = {

    width: "100%",
    margin: "5px 0",
  
    span: {
      fontSize: "13px",
      color: "#212121",
      fontWeight: "700",
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
  