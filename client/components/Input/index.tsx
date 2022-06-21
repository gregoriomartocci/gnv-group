import { Box, TextField } from "@mui/material";
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
}

const InputGroup = ({
  name,
  description,
  label,
  type,
  value,
  children,
  onChangeHandler,
}: InputProps) => {
  return (
    <Box sx={InputContainer}>
      <Fragment>
        {children ? (
          <Fragment>
            <span>{label}</span>
            {children}
          </Fragment>
        ) : (
          <Box>
            <span>{label}</span>
            <input
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
