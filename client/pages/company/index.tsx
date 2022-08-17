import React from "react";
import { Box } from "@mui/material";
import Main from "../../components/Main";
import { SliderData } from "../../data/SliderData";
import Ventures from "./components/Ventures";
import Menu from "../../components/Menu";
import HeaderTitle from "../../components/Header-Title";
import Footer from "../../components/Footer";
import { motion, useAnimation } from "framer-motion";
import Timeline from "./components/Timeline";
import Team from "./components/Team";
import ArtGallery from "./components/Art-Gallery";
import MessageSection from "./components/Message-Section";

const FadeFromBottom = {
  offscreen: { y: 50, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { duration: 2 },
  },
};

const members = [
  {
    img: "https://res.cloudinary.com/gregomartocci/image/upload/v1660709172/l16dgiu2maxocdxd5gmg.png",
    name: "Alejandro Ginevra",
    role: "Presidente",
  },
  {
    img: "https://res.cloudinary.com/gregomartocci/image/upload/v1660709172/ppugf8iteyuvfpeearqg.png",
    name: "Mercedes Ginevra",
    role: "Directora Comercial",
  },
  {
    img: "https://res.cloudinary.com/gregomartocci/image/upload/v1660709357/orogwyh1lvyqji2tfqai.png",
    name: "Iván Ginevra",
    role: "Director",
  },
  {
    img: "https://res.cloudinary.com/gregomartocci/image/upload/v1660709469/fdy72awmrhynvgbywzcd.png",
    name: "Camila Ginevra",
    role: "Responsable Interiorismo",
  },
  {
    img: "https://res.cloudinary.com/gregomartocci/image/upload/v1660709173/eb5kfhispqmcve9x6tu4.png",
    name: "Candela Ginevra",
    role: "Responsable Marketing",
  },
  {
    img: "https://res.cloudinary.com/gregomartocci/image/upload/v1660709172/mojcy8latflmlord4ym4.png",
    name: "Julia Granero",
    role: "Responsable relaciones insitucionales",
  },
  {
    img: "https://res.cloudinary.com/gregomartocci/image/upload/v1660709172/ugugdx8tsbqgak4fkqj2.png",
    name: "Viviana Reissis",
    role: "Gerente Ginevra Realty Zona Norte",
  },
  {
    img: "https://res.cloudinary.com/gregomartocci/image/upload/v1660354943/da2yya1gt6e1i5nyhgrq.svg",
    name: "Florencia Ponce",
    role: "Gerente comercial Ginevra Realty Puerto Madero",
  },
  {
    img: "https://res.cloudinary.com/gregomartocci/image/upload/v1660709172/twoyrlmrniaxsndjw0ea.png",
    name: "Gabriela River",
    role: "Gerente Administración",
  },
  {
    img: "https://res.cloudinary.com/gregomartocci/image/upload/v1660709173/pmgsoof4pjhm5sl9tftl.png",
    name: "Ezequiel Acuña",
    role: "Gerente Obras",
  },
  {
    img: "https://res.cloudinary.com/gregomartocci/image/upload/v1660709171/qedzobkij5gv7kdt22ky.png",
    name: "Julieta Steinmann",
    role: "Responsable Arquitectura",
  },
];

const gallery = [
  {
    img: "https://res.cloudinary.com/gregomartocci/image/upload/v1660354943/da2yya1gt6e1i5nyhgrq.svg",
    name: "Alejandro Ginevra",
    role: "Presidente",
  },
  {
    img: "https://res.cloudinary.com/gregomartocci/image/upload/v1660354943/da2yya1gt6e1i5nyhgrq.svg",
    name: "Mercedes Ginevra",
    role: "Presidente",
  },
  {
    img: "https://res.cloudinary.com/gregomartocci/image/upload/v1660354943/da2yya1gt6e1i5nyhgrq.svg",
    name: "Iván Ginevra",
    role: "Director",
  },
  {
    img: "https://res.cloudinary.com/gregomartocci/image/upload/v1660354943/da2yya1gt6e1i5nyhgrq.svg",
    name: "Camila Ginevra",
    role: "Responsable Interiorismo",
  },
  {
    img: "https://res.cloudinary.com/gregomartocci/image/upload/v1660354943/da2yya1gt6e1i5nyhgrq.svg",
    name: "Candela Ginevra",
    role: "Responsable Marketing",
  },
  {
    img: "https://res.cloudinary.com/gregomartocci/image/upload/v1660354943/da2yya1gt6e1i5nyhgrq.svg",
    name: "Julia Granero",
    role: "Responsable relaciones insitucionales",
  },
  {
    img: "https://res.cloudinary.com/gregomartocci/image/upload/v1660354943/da2yya1gt6e1i5nyhgrq.svg",
    name: "Viviana Reissis",
    role: "Gerente Ginevra Realty Zona Norte",
  },
  {
    img: "https://res.cloudinary.com/gregomartocci/image/upload/v1660354943/da2yya1gt6e1i5nyhgrq.svg",
    name: "Florencia Ponce",
    role: "Gerente comercial Ginevra Realty Puerto Madero",
  },
];

const Company = () => {
  return (
    <Box>
      <Menu onScroll theme="dark" />
      <Main
        slides={SliderData}
        mode="static"
        img="https://res.cloudinary.com/gregomartocci/image/upload/v1660020899/uhebjkyho2wp9x5qus81.jpg"
        flip
      ></Main>

      {/* Campaign */}
      <Box sx={{ width: "100vw", padding: "7.5%" }}>
        <motion.div
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{ once: false, amount: 0.1 }}
          variants={FadeFromBottom}
          style={{ width: "100%", height: "100%", padding: "0 10%" }}
        >
          <HeaderTitle py="10%" px="10%" fontSize="25px" title="Campaña" />

          <MessageSection
            title=" Liderar el sector inmobiliario, mucho más que una tradición familiar."
            description="Somos una empresa familiar dedicada hace más de 50 años a redefinir el
          desarrollo, gerenciamiento y comercialización de proyectos
          inmobiliarios y hoteleros de categoría internacional en Argentina y
          Uruguay. Siempre atentos a la dinámica, necesidades y expectativas,
          nuestro esfuerzo está puesto en detectar y anticiparnos a las
          tendencias del mercado internacional, lo que nos ha permitido generar
          y fortalecer alianzas con marcas como World Trade Center y la cadena
          hotelera Marriott a través de su marca “W”, entre otras. Nuestro
          compromiso está enfocado en la búsqueda constante de calidad e
          innovación en un mercado cada vez más versátil y exigente, con una
          fuerte vocación por un urbanismo innovador y respetuoso del entorno y
          el medio ambiente. Construir pensando en el futuro, sin olvidar
          nuestra historia."
            img="https://res.cloudinary.com/gregomartocci/image/upload/v1660704914/i7jqgzhxsgpvs6ndycaj.jpg"
          />
        </motion.div>
      </Box>

      {/* Trayectory */}
      <Box sx={{ width: "100%", height: "100%", padding: "7.5%" }}>
        <motion.div
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{ once: false, amount: 0.4 }}
          variants={FadeFromBottom}
        >
          <HeaderTitle
            py="45px"
            px="50px"
            fontSize="25px"
            title="Trayectoria"
            description="La compañía está viviendo una etapa de expansión fenomenal.
            Fortaleciendo alianzas con marcas internacionales de la importancia de World Trade Center, la cadena hotelera Marriot Internacional y Grupo Ennismore bajo la marca SLS Hotel & Residences.
            Lo que demuestra la fuerte convicción y los valores a la hora de desarrollar un proyecto. Se trate de una torre o de su propia empresa. "
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Timeline />
          </Box>
        </motion.div>
      </Box>

      {/* Team */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          padding: "0 10%",
        }}
      >
        <HeaderTitle py="7.5%" px="15px" fontSize="25px" title="El Grupo" />
        <Team members={members} />
      </Box>

      {/* Gallery */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <HeaderTitle
          py="7.5%"
          px="15px"
          fontSize="25px"
          title="Galería de arte GNV"
        />
        <ArtGallery gallery={gallery} />
      </Box>

      <Footer />
    </Box>
  );
};

export default Company;
