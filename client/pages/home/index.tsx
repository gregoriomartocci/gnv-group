import { Fragment } from "react";
import React from "react";
import Main from "../../components/Main";
import Menu from "../../components/Menu";

import { SliderData } from "../../data/SliderData";
import Section, { InfoDataOne, InfoDataTwo } from "../../components/Section";
import Footer from "../../components/Footer";


const Home = () => {
  return (
    <Fragment>
      <Menu onScroll />
      <Main slides={SliderData} />
      <Section {...InfoDataOne} />
      <Section {...InfoDataTwo} reverse/>
      <Footer></Footer>
    </Fragment>
  );
};

export default Home;
