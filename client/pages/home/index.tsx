import { Fragment } from "react";
import React, { Component } from "react";
import Main from "../../components/Main";
import Menu from "../../components/Menu";
import { SliderData } from "../../data/SliderData";


const Home = () => {
  return (
    <Fragment>
      <Menu />
      <Main slides={SliderData} />
    </Fragment>
  );
};

export default Home;
