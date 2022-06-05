import { Fragment } from "react";
import React from "react";
import Main from "../../components/Main";
import Menu from "../../components/Menu";

import { SliderData } from "../../data/SliderData";
import Section, { InfoDataOne, InfoDataTwo } from "../../components/Section";
import { projectsData } from "../../data/SliderData";
import Selector from "../../components/Selector";
import Projects from "../../components/Projects";

const Home = () => {
  return (
    <Fragment>
      <Menu />
      <Main slides={SliderData} />
      <Section {...InfoDataOne} />
      <Section {...InfoDataTwo} />
      <Selector />
      <Projects projects={projectsData}></Projects>
    </Fragment>
  );
};

export default Home;
