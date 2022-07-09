import React from "react";
import { Box } from "@mui/material";

import { projectsData } from "../../../../data/SliderData";
import SelectorB from "../../../../components/SelectorB";
import Cards from "../../../../components/Cards";
import { useSelector } from "react-redux";
import { IState } from "../../../../components/Menu";

const Ventures = () => {
  const state = useSelector((state: IState) => state?.projects);
  const { projects } = state;

  return (
    <Box
      sx={{
        padding: "5% 10%",
      }}
    >
      <SelectorB />
      <Cards projects={projects}></Cards>
    </Box>
  );
};

export default Ventures;
