import React from "react";
import { Box } from "@mui/material";
import { MainContainer } from "./Styles";
import Table from "../Table";

const Main = () => {
  return (
    <Box sx={MainContainer}>
      <Table />
    </Box>
  );
};

export default Main;
