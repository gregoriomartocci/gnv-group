import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { TDemo } from "../..";

const Card = ({ img, title }: TDemo) => {
  return (
    <Box>
      <img src={img} alt={title}></img>
      <Typography>{title}</Typography>
    </Box>
  );
};

export default Card;
