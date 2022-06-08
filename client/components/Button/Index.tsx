import { Button } from "@mui/material";

import * as Styles from "./Styles";

export interface ButtonOptions {
  Auth: string;
  Primary: string;
  Secondary: string;
  Blue: string;
}

export interface ButtonProps {
  type: keyof ButtonOptions;
  children: any;
  onClickHandler?: any;
}

const UseButton = ({ type, children, onClickHandler }: ButtonProps) =>
  onClickHandler ? (
    <Button sx={Styles[type]} onClick={onClickHandler}>
      {children}
    </Button>
  ) : (
    <Button sx={Styles[type]}>{children}</Button>
  );
export default UseButton;
