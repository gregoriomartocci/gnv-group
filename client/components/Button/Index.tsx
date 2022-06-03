import { Box } from "@mui/material";
import { Fragment } from "react";
import * as Styles from "./Styles";

export interface ButtonOptions {
  Auth: string;
  Primary: string;
  Secondary: string;
}

export interface ButtonProps {
  type: keyof ButtonOptions;
  children: any;
}

const Button = ({ type, children }: ButtonProps) => (
  <Box sx={Styles[type]}>{children}</Box>
);
export default Button;
