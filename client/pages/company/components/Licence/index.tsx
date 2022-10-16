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
        height: "100%",
        width,
        overflow: "hidden",
        padding: "45px 7.5% 25px 7.5%",
      }}
    >
      <Image
        style={{ maxWidth: width }}
        src={img}
        alt="Licence"
        objectFit="cover"
      />
    </Box>
  );
};

export default Licence;
