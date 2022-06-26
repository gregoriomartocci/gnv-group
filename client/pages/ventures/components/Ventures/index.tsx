import React from "react";
import { Box } from "@mui/material";

import { projectsData } from "../../../../data/SliderData";
import SelectorB from "../../../../components/SelectorB";
import Cards from "../../../../components/Cards";

const Ventures = () => {
  return (
    <Box
      sx={{
        padding: "5% 10%",
      }}
    >
      <SelectorB />
      <Cards projects={projectsData}></Cards>
    </Box>
  );
};

export default Ventures;
