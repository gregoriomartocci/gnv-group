import { Fragment } from "react";
import React from "react";
import Main from "../../components/Main";
import Menu, { IState } from "../../components/Menu";
import Box from "@mui/material/Box";
import { SliderData } from "../../data/SliderData";
import Section, { InfoDataOne, InfoDataTwo } from "../../components/Section";
import Footer from "../../components/Footer";
import { useSelector } from "react-redux";
import HeaderTitle from "../../components/Header-Title";
import Counter from "../../components/Counters";

const Home = () => {
  const state = useSelector((state: IState) => state?.projects);

  const data = [
    { number: 771190, description: "m² desarrollados" },
    { number: 107000, unity: "m²", description: "de inversión" },
    { number: 21, unity: "ha", description: "urbanizados" },
    {
      number: 40000,
      unity: "m²",
      description: "corporativos World Trade Center",
    },
    { number: 771190, description: "centros comerciales desarrollados" },
  ];

  return (
    <Fragment>
      <Menu onScroll />
      <Main
        slides={SliderData}
        mode="static"
        img="https://res.cloudinary.com/gregomartocci/image/upload/v1657430151/bl6a6maqd6wmqsepcr5t.jpg"
      />

      <Box sx={{ width: "100%", padding: "5% 0" }}>
        <HeaderTitle
          height={8}
          width={18}
          fontSize="24px"
          description="Abarcamos todas las aristas del mercado inmobiliario.  Desarrollamos, construimos y comercializamos a través de cuatro segmentos: urbanización, edificios residenciales,  torres corporativas y locales comerciales. "
        />
      </Box>

      <Box sx={{ width: "100%", padding: "7.5% 0 15% 0" }}>
        <Counter data={data} />
      </Box>

      <Footer></Footer>
    </Fragment>
  );
};

export default Home;
