import { Fragment } from "react";
import React from "react";
import Main from "../../components/Main";
import Menu, { IState } from "../../components/Menu";

import { SliderData } from "../../data/SliderData";
import Section, { InfoDataOne, InfoDataTwo } from "../../components/Section";
import Footer from "../../components/Footer";
import { useSelector } from "react-redux";
import HeaderTitle from "../../components/Header-Title";

const Home = () => {
  const state = useSelector((state: IState) => state?.projects);

  return (
    <Fragment>
      <Menu onScroll />
      <Main
        slides={SliderData}
        mode="static"
        img="https://res.cloudinary.com/gregomartocci/image/upload/v1657430588/owperet7603w21sgbf7w.jpg"
      />

      <HeaderTitle
        description="Abarcamos todas las aristas del mercado inmobiliario.  Desarrollamos, construimos y comercializamos a través de cuatro segmentos: urbanización, edificios residenciales,  torres corporativas y locales comerciales. "
      />

      <Section {...InfoDataOne} />
      <Section {...InfoDataTwo} reverse />
      <Footer></Footer>
    </Fragment>
  );
};

export default Home;
