import { height } from "@mui/system";
import * as React from "react";
import { Box } from "@mui/material";

type IFrame = {
  theme: "light" | "dark";
  width: string;
};

const Frame = ({ theme, width }: IFrame) => (
  <Box sx={{ position: "absolute", bottom: -5 }}>
    <svg viewBox="0 0 1366 267" height="100%" width={width}>
      <path
        d="M1366 267V43.92C637.85 252.53 385 0 0 0v267h1366z"
        style={theme === "light" ? { fill: "#fff" } : { fill: "#212121" }}
      />
    </svg>
  </Box>
);

export default Frame;
