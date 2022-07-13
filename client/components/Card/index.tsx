import * as React from "react";
import { Box } from "@mui/material";
import { StaticImageData } from "next/image";

import { CardContainer } from "./Styles";

const Card = ({ children }: any) => {
  return <Box sx={CardContainer}>{children}</Box>;
};

export default Card;
