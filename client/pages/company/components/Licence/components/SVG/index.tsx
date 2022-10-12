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

const Svg = ({ color, margin, maxWidth, children }: ILogo) => {
  const { width } = useWindowDimensions();

  const xs = width && width < 700;
  const md = width && width < 1200;

  return (
    <Box
      sx={{
        maxWidth: xs && "100%",
        maxHeight: xs && "50px",
      }}
    >
      <svg style={{ maxWidth, margin, width: "100%", height: "100%" }}>
        <g fill={color ?? "#212121"}>{children}</g>
      </svg>
    </Box>
  );
};

export default Svg;
