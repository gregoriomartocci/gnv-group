import React from "react";
import { Box } from "@mui/material";
import Projects from "../../../../components/Projects";
import { projectsData } from "../../../../data/SliderData";
import SelectorB from "../../../../components/SelectorB";

const Ventures = () => {
  return (
    <Box
      sx={{
        padding: "5% 10%",
      }}
    >
      <SelectorB />
      <Projects projects={projectsData}></Projects>
    </Box>
  );
};

export default Ventures;
