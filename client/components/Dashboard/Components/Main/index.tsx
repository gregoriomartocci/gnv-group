import React from "react";
import { Box } from "@mui/material";
import { MainContainer } from "./Styles";

interface Main {
  children: any;
}

const Main = ({ children }: Main) => {
  return <Box sx={MainContainer}>{children}</Box>;
};

export default Main;
