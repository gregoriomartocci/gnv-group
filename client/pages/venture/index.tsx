import React, { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import Menu, { IState } from "../../components/Menu";

import Footer from "../../components/Footer";
import Slider from "./components/Slider";
import HeaderTitle from "../../components/Header-Title";
import { useSelector } from "react-redux";

const Venture = () => {
  const state = useSelector((state: IState) => state?.projects);
  const { project } = state;

  return (
    <Box>
      {project ? (
        <Box
          sx={{
            width: "100vw",
            height: "100vh",
          }}
        >
          <Menu onScroll />
          <Box sx={{ padding: "150px 10%", width: "100%" }}>
            <HeaderTitle titleFontSize="38px" title={project?.name ?? ""} />
          </Box>
          <Slider items={project ? project?.images : []} />
          <Box sx={{ display: "flex", padding: "0 10%" }}>
            <Typography>{project?.description ?? ""}</Typography>
          </Box>
          <Footer />
        </Box>
      ) : null}
    </Box>
  );
};

export default Venture;
