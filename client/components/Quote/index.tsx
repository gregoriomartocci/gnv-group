import React from "react";
import { Box } from "@mui/material";

interface IQuote {
  text: string;
}

const Quote = ({ text }: IQuote) => {
  return <Box>{text}</Box>;
};

export default Quote;
