import React from "react";
import { Box } from "@mui/material";
import Main from "../../components/Main";
import { SliderData } from "../../data/SliderData";

import Ventures from "./components/Ventures";
import Menu from "../../components/Menu";
import HeaderTitle from "../../components/Header-Title";
import Footer from "../../components/Footer";

const News = () => {
  return (
    <Box>
      <Menu onScroll/>
      <Main slides={SliderData}></Main>
      <HeaderTitle
        title="Emprendimientos"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor, in at facilisis pellentesque lectus quisque a, luctus sed. Urna, amet sapien, amet scelerisque venenatis netus vitae."
      />
      <Ventures></Ventures>
      <Footer></Footer>
    </Box>
  );
};

export default News;
