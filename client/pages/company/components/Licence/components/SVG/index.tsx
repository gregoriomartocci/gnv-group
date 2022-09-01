import * as React from "react";

type ILogo = {
  color?: string;
  width: string;
  children: any;
};

const Svg = ({ color, width, children }: ILogo) => (
  <svg width={width} height="100%" viewBox="0 0 212.7 41.76">
    <g fill={color ?? "#212121"}>{children}</g>
  </svg>
);

export default Svg;
