import { Box } from "@mui/material";
import { InputContainer } from "./Styles";

export interface InputProps {
  name: string;
  description: string;
  label: string;
  type: string;
}

const InputGroup = ({ name, description, label, type }: InputProps) => {
  return (
    <Box sx={InputContainer}>
      <span>{label}</span>
      <input placeholder={description} type={type}></input>
    </Box>
  );
};

export default InputGroup;
