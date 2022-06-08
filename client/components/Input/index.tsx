import { Box } from "@mui/material";
import { InputContainer } from "./Styles";

export interface InputProps {
  name: string;
  description: string;
  label: string;
  type: string;
  value: string;
  onChangeHandler: any;
}

const InputGroup = ({
  name,
  description,
  label,
  type,
  value,
  onChangeHandler,
}: InputProps) => {
  return (
    <Box sx={InputContainer}>
      <span>{label}</span>
      <input
        name={name}
        placeholder={description}
        type={type}
        value={value}
        onChange={onChangeHandler}
      ></input>
    </Box>
  );
};

export default InputGroup;
