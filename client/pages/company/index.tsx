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
      ></Main>

      {/* Campaign */}
      <Box sx={{ width: "100%", height: "100%", padding: "7.5%" }}>
        <motion.div
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{ once: false, amount: 0.25 }}
          variants={FadeFromBottom}
        >
          <HeaderTitle height={8} width={18} fontSize="25px" title="Campaña" />
        </motion.div>
      </Box>

      {/* Trayectory */}
      <Box sx={{ width: "100%", height: "100%", padding: "7.5%" }}>
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
        <HeaderTitle height={8} width={18} fontSize="25px" title="El Grupo" />
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
          height={8}
          width={18}
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
