import React from "react";
import { Box } from "@mui/material";
import Main from "../../components/Main";
import { SliderData } from "../../data/SliderData";
import Ventures from "./components/Ventures";
import Menu from "../../components/Menu";
import HeaderTitle from "../../components/Header-Title";
import Footer from "../../components/Footer";
import { motion, useAnimation } from "framer-motion";

const FadeFromBottom = {
  offscreen: { y: 50, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { duration: 2 },
  },
};

const VenturesLayout = () => {
  return (
    <Box>
      <Menu onScroll />
      <Main
        slides={SliderData}
        mode="static"
        img="https://res.cloudinary.com/gregomartocci/image/upload/v1657430588/owperet7603w21sgbf7w.jpg"
        imageOnly
        frame
      ></Main>
      
      <motion.div
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: false, amount: 0.5 }}
        variants={FadeFromBottom}
      >
        <HeaderTitle
          height={0}
          width={20}
          fontSize="22px"
          title="Emprendimientos"
          description="Tres generaciones dedicadas al desarrollo de proyectos emblemáticos, que redefinen los entornos urbanos y desafían la arquitectura y el diseño, con altos estándares de sustentabilidad y confort."
        />
      </motion.div>
      <Ventures />
      <Footer />
    </Box>
  );
};

export default VenturesLayout;
