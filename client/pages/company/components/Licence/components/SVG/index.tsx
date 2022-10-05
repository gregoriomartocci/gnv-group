import * as React from "react";

type ILogo = {
  color?: string;
  width?: string;
  height?: string;
  children: any;
  margin?: string;
  maxWidth?: string;
};

const Svg = ({ color, width, height, margin, maxWidth, children }: ILogo) => (
  <svg style={{ maxWidth, margin }} width={width} height={height}>
    <g fill={color ?? "#212121"}>{children}</g>
  </svg>
);

export default Svg;
