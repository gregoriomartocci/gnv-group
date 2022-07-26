import { Fragment } from "react";
import React from "react";
import Main from "../../components/Main";
import Menu, { IState } from "../../components/Menu";

import { SliderData } from "../../data/SliderData";
import Section, { InfoDataOne, InfoDataTwo } from "../../components/Section";
import Footer from "../../components/Footer";
import { useSelector } from "react-redux";

const Home = () => {
  const state = useSelector((state: IState) => state?.projects);

  return (
    <Fragment>
      <Menu onScroll />
      <Main
        slides={SliderData}
        mode="slider"
      />
      <Section {...InfoDataOne} />
      <Section {...InfoDataTwo} reverse />
      <Footer></Footer>
    </Fragment>
  );
};

export default Home;
