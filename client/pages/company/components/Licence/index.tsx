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
        padding: {
          xs: "45px 7.5% 25px 7.5%",
          sm: "45px 7.5% 25px 7.5%",
          md: "45px 5% 25px 5%",
          lg: "45px 5% 25px 5%",
          xl: "45px 5% 25px 5%",
        },
        margin: {
          xs: "0 40px",
          sm: "unset",
          md: "unset",
          lg: "unset",
          xl: "unset",
        },
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
