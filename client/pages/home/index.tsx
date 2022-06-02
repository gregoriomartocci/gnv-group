import { Fragment } from "react";
import React from "react";
import Main from "../../components/Main";
import Menu from "../../components/Menu";

import { SliderData } from "../../data/SliderData";
import Section, { InfoDataOne, InfoDataTwo } from "../../components/Section";

const Home = () => {
  return (
    <Fragment>
      <Menu />
      <Main slides={SliderData} />
      <Section {...InfoDataOne} />
      <Section {...InfoDataTwo} />
    </Fragment>
  );
};

export default Home;
