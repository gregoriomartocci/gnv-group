import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { TDemo } from "../..";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Svg from "./components/SVG";
import { Height } from "@mui/icons-material";
import Image from "next/image";

const Licence = ({ img, description, width, height }: TDemo) => {
  return (
    <Box
      sx={{
        display: "flex",
        cursor: "pointer",
        height,
        width,
        overflow: "hidden",
        padding: "35px 7.5%",
      }}
    >
      <Box
        sx={{
          dislpay: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
          padding: "0 0 25 px 0",
        }}
      >
        <Image src={img} alt="Licence" objectFit="cover" />
      </Box>
    </Box>
  );
};

export default Licence;
