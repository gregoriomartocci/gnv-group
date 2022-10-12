import { Box } from "@mui/material";
import * as React from "react";
import useWindowDimensions from "../../../../../../hooks/ScreenSize";

type ILogo = {
  color?: string;
  width?: string;
  height?: string;
  children: any;
  margin?: string;
  maxWidth?: string;
};

const Svg = ({ color, margin, children }: ILogo) => {
  return (
    <svg style={{ margin, width: "100%", height: "100%" }}>
      <g fill={color ?? "#212121"}>{children}</g>
    </svg>
  );
};

export default Svg;
