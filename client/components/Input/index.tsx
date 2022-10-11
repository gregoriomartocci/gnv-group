import { Box, TextField, Typography } from "@mui/material";
import { Fragment } from "react";
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
  return (
    <Box sx={InputContainer}>
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
              style={{ fontSize: inputFontSize }}
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
