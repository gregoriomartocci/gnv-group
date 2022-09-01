import React, { useEffect, useState } from "react";
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
import api from "../../hooks/Api";
import TeamB from "./components/Team B";
import parse from "html-react-parser";
import Logo from "../../components/Logo";

import dynamic from "next/dynamic";
import Section from "../../components/Section";
import Cards from "../../components/Cards";
import Licence from "./components/Licence";

const MessageSection = dynamic(() => import("./components/Message-Section"), {
  ssr: false,
});

const FadeFromBottom = {
  offscreen: { y: 50, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

const members = [
  {
    img: "https://res.cloudinary.com/gregomartocci/image/upload/v1658965044/vlsdhy1hikzlz1g39zoz.jpg",
    name: "Alejandro Ginevra",
    role: "Presidente",
    priority: 2,
  },
  {
    img: "https://res.cloudinary.com/gregomartocci/image/upload/v1660970514/uwlrly2kqrnolnqbvb2e.jpg",
    name: "Mercedes Ginevra",
    role: "Directora Comercial",
    priority: 2,
  },
  {
    img: "https://res.cloudinary.com/gregomartocci/image/upload/v1660970604/qfneqixqdug2vaaahvcc.jpg",
    name: "Iván Ginevra",
    role: "Director",
    priority: 3,
  },
  {
    img: "https://res.cloudinary.com/gregomartocci/image/upload/v1658965044/vlsdhy1hikzlz1g39zoz.jpg",
    name: "Camila Ginevra",
    role: "Responsable Interiorismo",
    priority: 3,
  },
  {
    img: "https://res.cloudinary.com/gregomartocci/image/upload/v1658965044/vlsdhy1hikzlz1g39zoz.jpg",
    name: "Candela Ginevra",
    role: "Responsable Marketing",
    priority: 3,
  },
  {
    img: "https://res.cloudinary.com/gregomartocci/image/upload/v1658965044/vlsdhy1hikzlz1g39zoz.jpg",
    name: "Julia Granero",
    role: "Responsable relaciones insitucionales",
    priority: 4,
  },
  {
    img: "https://res.cloudinary.com/gregomartocci/image/upload/v1658965044/vlsdhy1hikzlz1g39zoz.jpg",
    name: "Viviana Reissis",
    role: "Gerente Ginevra Realty Zona Norte",
    priority: 4,
  },
  {
    img: "https://res.cloudinary.com/gregomartocci/image/upload/v1658965044/vlsdhy1hikzlz1g39zoz.jpg",
    name: "Florencia Ponce",
    role: "Gerente comercial Ginevra Realty Puerto Madero",
    priority: 4,
  },
  {
    img: "https://res.cloudinary.com/gregomartocci/image/upload/v1658965044/vlsdhy1hikzlz1g39zoz.jpg",
    name: "Gabriela River",
    role: "Gerente Administración",
    priority: 4,
  },
  {
    img: "https://res.cloudinary.com/gregomartocci/image/upload/v1658965044/vlsdhy1hikzlz1g39zoz.jpg",
    name: "Ezequiel Acuña",
    role: "Gerente Obras",
    priority: 4,
  },
  {
    img: "https://res.cloudinary.com/gregomartocci/image/upload/v1658965044/vlsdhy1hikzlz1g39zoz.jpg",
    name: "Julieta Steinmann",
    role: "Responsable Arquitectura",
    priority: 4,
  },
];

const licences = [
  {
    img: ["", ""],
    description:
      "WTC Buenos Aires está compuesto por 4 torres AAA dentro del complejo Madero Harbour. Más de 70 empresas multinacionales y dos embajadas desarrollan allí sus actividades económicas y comerciales.",
  },
  {
    img: ["", ""],
    description:
      "Desarrollado por GNV y diseñado por el estudio de arquitectura Gómez Platero. el proyecto incluirá 80 elegantes habitaciones de hotel de última generación y 150 residencias, en dos torres estilo SLS que contarán con diseño de vanguardia, arte contemporáneo y detalles de lujo.",
  },
  {
    img: ["", ""],
    description:
      "El gigante Marriott Internacional firmó un acuerdo con GNV Group, para desarrollar por primera vez en la Argentina un proyecto hotelero/ residencia bajo la disrruptiva marca W.",
  },
];

export const sanitize = (string: string) => {
  if (typeof string === "string" && typeof window !== "undefined") {
    const reactElement = parse(string);
    return reactElement;
  }
  return "";
};

const Company = () => {
  const [gallery, setGallery] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [render, setRender] = useState<any>(typeof window !== "undefined");

  useEffect(() => {
    const getPictures = async () => {
      try {
        setLoading(true);
        const data = await api({
          method: "get",
          path: "https://api.unsplash.com/photos?client_id=8FBBMc7N0M0n2zNPFDnKZ47ifr2D0fU-O08tF-uhkjQ",
        });
        setGallery(data);
        setLoading(false);
      } catch (err) {
        setError("Something went wrong");
        setLoading(false);
      }
    };

    getPictures();

    return () => {};
  }, []);

  return (
    <Box>
      <Menu onScroll color="#212121" />
      <Main
        slides={SliderData}
        mode="static"
        img="https://res.cloudinary.com/gregomartocci/image/upload/v1660020899/uhebjkyho2wp9x5qus81.jpg"
        flip
      />

      {/* SECTION */}

      <Box sx={{ width: "100vw", padding: "7.5% 5%", height: "100%" }}>
        <motion.div
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{ once: false, amount: 0.1 }}
          variants={FadeFromBottom}
          style={{ width: "100%", height: "100%", padding: "0 10%" }}
        >
          {/* <HeaderTitle py="10%" px="2.5%" fontSize="25px" title="Compañia" /> */}

          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              padding: "7.5% 0",
              borderBottom: "1.5px solid #eeeeee",
            }}
          >
            <Section
              title={<Logo width="calc(100% - 150px)" color="#212121" />}
              paragraph="Presidida por Alejandro Ginevra y familia, con presencia en Argentina y Uruguay, de GNV se depresión sofisticados desarrollos y prestigiosas marcas relacionadas al real estate."
              image="https://res.cloudinary.com/gregomartocci/image/upload/v1660970514/uwlrly2kqrnolnqbvb2e.jpg"
              reverse
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              padding: "7.5% 0",
              borderBottom: "1.5px solid #eeeeee",
            }}
          >
            <Section
              title={<Logo width="calc(100% - 150px)" color="#212121" />}
              paragraph="Unidad destinada al corretaje inmobiliario de las propiedades residenciales y oficinas mas exclusivas del mercado."
              image="https://res.cloudinary.com/gregomartocci/image/upload/v1658965044/vlsdhy1hikzlz1g39zoz.jpg"
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              padding: "7.5% 0",
            }}
          >
            <Section
              title={<Logo width="calc(100% - 80px)" color="#212121" />}
              paragraph="Presidida por Alejandro Ginevra y familia, con presencia en Argentina y Uruguay, de GNV se depresión sofisticados desarrollos y prestigiosas marcas relacionadas al real estate."
              image="https://res.cloudinary.com/gregomartocci/image/upload/v1660970514/uwlrly2kqrnolnqbvb2e.jpg"
              reverse
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              padding: "7.5% 0",
            }}
          >
            <Section
              title={<Logo width="calc(100% - 80px)" color="#212121" />}
              paragraph="Presidida por Alejandro Ginevra y familia, con presencia en Argentina y Uruguay, de GNV se depresión sofisticados desarrollos y prestigiosas marcas relacionadas al real estate."
              image="https://res.cloudinary.com/gregomartocci/image/upload/v1660970514/uwlrly2kqrnolnqbvb2e.jpg"
            />
          </Box>
        </motion.div>
      </Box>

      {/* LICENCES */}

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "100%",
          minHeight: "100vh",
          width: "100vw",
          padding: "0 7.5%",
          backgroundColor: "#f5f5f5",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            textAlign: "left",

            padding: "50px 2.5%",
          }}
        >
          <HeaderTitle title="Licencias" fontSize="35px" />
          <Box
            sx={{
              display: "flex",
              width: "100%",
              borderBottom: "3px solid #424242",
              borderRadius: "500px",
            }}
          />
        </Box>
        <Box sx={{ display: "flex" }}>
          <Cards
            gap={""}
            columns={2}
            items={licences}
            component={(item) => <Licence {...item} />}
          />
        </Box>
      </Box>

      {/* COMPANY */}

      <Box sx={{ width: "100vw", padding: "7.5%" }}>
        <motion.div
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{ once: false, amount: 0.1 }}
          variants={FadeFromBottom}
          style={{ width: "100%", height: "100%", padding: "0 10%" }}
        >
          <HeaderTitle py="10%" px="10%" fontSize="25px" title="Compañia" />

          {render ? (
            <MessageSection
              title=" Liderar el sector inmobiliario, mucho más que una tradición familiar."
              description={
                render
                  ? sanitize(
                      "<p>Somos una empresa familiar dedicada hace más de 50 años a redefinir el desarrollo, gerenciamiento y comercialización de proyectos inmobiliarios y hoteleros de categoría internacional en Argentina y Uruguay.</p><p><br></p><p>Siempre atentos a la dinámica, necesidades y expectativas, nuestro esfuerzo está puesto en detectar y anticiparnos a las tendencias del mercado internacional, lo que nos ha permitido generar y fortalecer alianzas con marcas como World Trade Center y la cadena hotelera Marriott a través de su marca “W”, entre otras.</p><p><br></p><p>Nuestro compromiso está enfocado en la búsqueda constante de calidad e innovación en un mercado cada vez más versátil y exigente, con una fuerte vocación por un urbanismo innovador y respetuoso del entorno y el medio ambiente.</p><p>Construir pensando en el futuro, sin olvidar nuestra historia.</p> "
                    )
                  : ""
              }
              render={render}
              img="https://res.cloudinary.com/gregomartocci/image/upload/v1660704914/i7jqgzhxsgpvs6ndycaj.jpg"
            />
          ) : null}
        </motion.div>
      </Box>

      {/* TRAYECTORY */}

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

      {/* TEAM */}

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
        {/* <Team members={members} /> */}

        <TeamB members={members} />
      </Box>

      {/* GALLERY */}

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

        <ArtGallery gallery={gallery?.length ? gallery : [] ?? []} />
      </Box>

      <Footer />
    </Box>
  );
};

export default Company;
