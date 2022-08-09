import React from "react";
import { Box } from "@mui/material";
import Main from "../../components/Main";
import { SliderData } from "../../data/SliderData";
import Ventures from "./components/Ventures";
import Menu from "../../components/Menu";
import HeaderTitle from "../../components/Header-Title";
import Footer from "../../components/Footer";
import { motion, useAnimation } from "framer-motion";
import Timeline from "../../components/Timeline";

const FadeFromBottom = {
  offscreen: { y: 50, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { duration: 2 },
  },
};

const Company = () => {
  return (
    <Box>
      <Menu onScroll={false} />
      <Main
        slides={SliderData}
        mode="static"
        img="https://res.cloudinary.com/gregomartocci/image/upload/v1660020899/uhebjkyho2wp9x5qus81.jpg"
        imageOnly
      ></Main>

      <Box sx={{ width: "100%", padding: "7.5% 0" }}>
        <motion.div
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{ once: false, amount: 0.5 }}
          variants={FadeFromBottom}
        >
          <HeaderTitle
            height={8}
            width={18}
            fontSize="25px"
            title="Trayectoria"
            description="La compañía está viviendo una etapa de expansión fenomenal.
            Fortaleciendo alianzas con marcas internacionales de la importancia de World Trade Center, la cadena hotelera Marriot Internacional y Grupo Ennismore bajo la marca SLS Hotel & Residences.
            Lo que demuestra la fuerte convicción y los valores a la hora de desarrollar un proyecto. Se trate de una torre o de su propia empresa. "
          />
        </motion.div>
      </Box>

      <Box sx={{ width: "100%", padding: "7.5% 0" }}>
        <Timeline />
      </Box>

      <Footer />
    </Box>
  );
};

export default Company;
