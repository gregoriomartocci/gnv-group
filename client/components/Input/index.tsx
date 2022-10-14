import { Box, TextField, Typography } from "@mui/material";
import { Fragment } from "react";
import useWindowDimensions from "../../hooks/ScreenSize";
import { InputContainer } from "./Styles";

export interface InputProps {
  name: string;
  description: string;
  label: string;
  type: string;
  value: any;
  onChangeHandler: any;
  children?: React.ReactNode;
  width?: string;
  height?: string;
  inputFontSize?: string;
  labelFontSize?: string;
}

const InputGroup = ({
  name,
  description,
  label,
  type,
  value,
  children,
  onChangeHandler,
  inputFontSize,
  labelFontSize,
}: InputProps) => {
  const { width, height } = useWindowDimensions();

  const xs = width && width < 600;

  return (
    <Box
      sx={{
        width: "100%",
        margin: "10px 0",

        span: {
          fontSize: "20px",
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
        },
      }}
    >
      <Fragment>
        {children ? (
          <Fragment>
            <Typography sx={{ fontSize: labelFontSize, fontWeight: 600 }}>
              {label}
            </Typography>
            {children}
          </Fragment>
        ) : (
          <Box>
            <Typography sx={{ fontSize: labelFontSize, fontWeight: 600 }}>
              {label}
            </Typography>
            <input
              style={{ fontSize: xs ? "11px" : "15px", padding:xs ? "10px 15px" : "15px" }}
              name={name}
              placeholder={description}
              type={type}
              value={value}
              onChange={onChangeHandler}
            />
          </Box>
        )}
      </Fragment>
    </Box>
  );
};

export default InputGroup;
