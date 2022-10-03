import * as React from "react";

type ILogo = {
  color?: string;
  width?: string;
  height?: string;
  children: any;
};

const Svg = ({ color, width, height, children }: ILogo) => (
  <svg width={width ? width : "100%"} height={height}>
    <g fill={color ?? "#212121"}>{children}</g>
  </svg>
);

export default Svg;
