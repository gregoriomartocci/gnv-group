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
  height?: any;
  width?: any;
  uppercase?: string;
}

const UseButton = ({
  type,
  width,
  height,
  children,
  uppercase,
  onClickHandler,
}: ButtonProps) =>
  onClickHandler ? (
    <Button
      sx={Styles[type]}
      style={{
        width: `${width}`,
        height: `${height}`,
      }}
      onClick={onClickHandler}
    >
      {children}
    </Button>
  ) : (
    <Button
      sx={Styles[type]}
      style={{ width: `${width}`, height: `${height}` }}
    >
      {children}
    </Button>
  );
export default UseButton;
