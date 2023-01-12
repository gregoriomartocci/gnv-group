import React, { useState } from "react";
import { Box } from "@mui/material";
import { motion } from "framer-motion";
import parse from "html-react-parser";
import dynamic from "next/dynamic";
import useWindowDimensions from "../../hooks/ScreenSize";
import Image from "next/image";
import ginevraRealty from "../../assets/logo/GinevraRealty.png";
import wtcBuenosAires from "../../assets/licences/wtcBuenosAires.png";
import marriotLogo from "../../assets/licences/marriot.png";
import wtcCordoba from "../../assets/licences/wtcCordoba.png";
import wtcRosario from "../../assets/licences/wtcRosario.png";
import slsPuntaDelEste from "../../assets/licences/slsPuntaDelEste.png";
import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import { setGalleryItems } from "../../redux/slices/gallery";
import { ReadGalleryItems } from "../../api/gallery";
import { Loader } from "../../hooks/Loader";

const MessageSection = dynamic(() => import("./components/Message-Section"), {
  ssr: false,
});
const Main = dynamic(() => import("../../components/Main"), {
  ssr: false,
});
const Menu = dynamic(() => import("../../components/Menu"), {
  ssr: false,
});
const HeaderTitle = dynamic(() => import("../../components/Header-Title"), {
  ssr: false,
});
const Footer = dynamic(() => import("../../components/Footer"), {
  ssr: false,
});
const ArtGallery = dynamic(() => import("./components/Art-Gallery"), {
  ssr: false,
});

const Section = dynamic(() => import("../../components/Section"), {
  ssr: false,
});

const Licence = dynamic(() => import("./components/Licence"), {
  ssr: false,
});

const Svg = dynamic(() => import("./components/Licence/components/SVG"), {
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

const licences = [
  [
    {
      img: marriotLogo,
      width: { xs: "90px", sm: "110px", md: "110px", xl: "130px" },
    },
  ],
  [
    {
      img: wtcBuenosAires,
      width: { xs: "140px", sm: "150px", md: "160px", xl: "170px" },
    },
  ],
  [
    {
      img: wtcCordoba,
      width: { xs: "140px", sm: "150px", md: "160px", xl: "170px" },
    },
  ],
  [
    {
      img: wtcRosario,
      width: { xs: "140px", sm: "150px", md: "160px", xl: "170px" },
    },
  ],
  [
    {
      img: slsPuntaDelEste,
      width: { xs: "85px", sm: "90px", md: "110px", xl: "130px" },
    },
  ],
];

export const sanitize = (string: string) => {
  if (typeof string === "string" && typeof window !== "undefined") {
    const reactElement = parse(string);
    return reactElement;
  }
  return "";
};

const Company = () => {
  const [render, setRender] = useState<any>(typeof window !== "undefined");
  const { width } = useWindowDimensions();

  const dispatch = useDispatch();

  const xs = width && width < 900;

  const {
    isFetching: loading,
    isError,
    error,
    data: allGalleryItems,
  } = useQuery("gallery", ReadGalleryItems, {
    refetchOnWindowFocus: false,
    onSuccess: (data) => {
      dispatch(setGalleryItems(data));
    },
  });

  return (
    <Box sx={{ overflowX: "hidden" }}>
      <Loader delay={1500} />
      <Menu onScroll color="#212121" />
      <Main
        headerTitle="<p>Por más de 50 años </br> sinónimo de real estate</p>"
        mode="static"
        buttonLink="/home/#contact"
        img="https://res.cloudinary.com/gregomartocci/image/upload/v1660020899/uhebjkyho2wp9x5qus81.jpg"
        flip
        fontColor="#212121"
        textFontSize={{ xs: "25px", md: "32px" }}
      />

      {/* SECTION */}

      <Box
        sx={{
          width: "100vw",
          padding: { xs: "40px 25px", md: "5%" },
          height: "100%",
        }}
      >
        <motion.div
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{ once: false, amount: 0.1 }}
          variants={FadeFromBottom}
          style={{ width: "100%", height: "100%", padding: "0 5%" }}
        >
          {/* <HeaderTitle py="10%" px="2.5%" fontSize="25px" title="Compañia" /> */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              padding: { xs: "20px 0", md: "40px 0" },
              borderBottom: { xs: "", md: "1.5px solid #eeeeee" },
            }}
          >
            <Section
              title={
                <Box
                  sx={{
                    height: { xs: "65px", md: "85px" },
                    width: { xs: "200px", md: "280px" },
                  }}
                >
                  <Svg color="#212121">
                    <svg height="100%" viewBox="0 0 212.7 41.76">
                      <g>
                        <g>
                          <path d="M21.73,30.33c-2.68,2.77-5.87,3.8-9.43,3.8c-3.66,0-6.67-1.31-9.01-3.66C-0.09,27.09,0,22.91,0,17.14 c0-5.77-0.09-9.95,3.29-13.33c2.35-2.35,5.26-3.66,9.01-3.66c7.74,0,11.69,5.07,12.58,10.7h-6.57c-0.75-3.14-2.67-4.88-6.01-4.88 c-1.78,0-3.24,0.7-4.18,1.78c-1.27,1.41-1.6,2.96-1.6,9.39s0.33,8.03,1.6,9.43c0.94,1.08,2.39,1.74,4.18,1.74 c1.97,0,3.57-0.7,4.65-1.88c1.08-1.22,1.5-2.72,1.5-4.46V20.7H12.3v-5.44h12.63v4.88C24.92,24.98,24.08,27.89,21.73,30.33" />
                          <polygon points="49.85,33.85 36.62,13.33 36.62,33.85 30.09,33.85 30.09,0.43 35.91,0.43 49.15,20.89 49.15,0.43 55.67,0.43  55.67,33.85  " />
                          <polygon points="79.61,0.43 72.9,22.21 66.19,0.43 59.43,0.43 70.46,33.85 75.34,33.85 86.42,0.43  " />
                        </g>
                      </g>
                      <g>
                        <path d="M115.41,1.15v11.52h-1.44c-0.86-5.76-3.26-11.33-9.22-11.33c-5.66,0-10.27,3.41-10.27,15.75 c0,12.34,4.61,15.75,10.27,15.75c4.7,0,7.01-2.88,7.01-8.21c0-4.22-1.49-5.33-4.18-5.33h-1.3v-1.34h13.01v1.34h-1.15 c-2.06,0-2.74,0.72-2.74,2.54V33.6h-1.2c-0.77-1.34-1.2-2.11-1.73-2.11c-0.91,0-3.07,2.69-8.5,2.69 c-8.98,0-13.92-8.74-13.92-17.09C90.06,8.74,95,0,104.75,0c4.03,0,7.44,3.12,7.78,3.12c0.24,0,0.38-0.1,0.48-0.24l1.06-1.73 H115.41z" />
                        <path d="M124.57,14.31c0-1.44-0.77-1.92-3.79-1.92v-1.34l7.06-0.29v5.76h0.1c1.1-2.78,2.83-6.05,6.29-6.05 c1.92,0,3.7,1.15,3.7,3.31c0,1.44-0.91,2.35-2.21,2.35s-2.21-0.72-2.21-2.16c0-0.86,0.38-1.54,1.15-1.92 c-0.14-0.19-0.43-0.24-0.72-0.24c-1.25,0-4.18,1.44-5.42,6.96c-0.67,3.02-0.67,7.49-0.67,10.61c0,2.4,0.77,2.88,4.32,2.88v1.34 h-11.42v-1.34c3.07,0,3.84-0.48,3.84-1.92V14.31z" />
                        <path d="M139.5,22.32c0-6,3.89-11.86,10.42-11.86c6.53,0,10.42,5.86,10.42,11.86s-3.89,11.86-10.42,11.86 C143.39,34.18,139.5,28.32,139.5,22.32z M156.68,22.32c0-6.77-2.11-10.51-6.77-10.51c-4.66,0-6.77,3.74-6.77,10.51 c0,6.77,2.11,10.51,6.77,10.51C154.57,32.83,156.68,29.09,156.68,22.32z" />
                        <path d="M183.75,30.34c0,1.44,0.77,1.92,3.6,1.92v1.34l-6.86,0.29v-3.55h-0.1c-1.68,2.35-3.41,3.84-7.2,3.84 c-4.13,0-7.2-1.49-7.2-6.34V14.31c0-1.44-0.77-1.92-3.79-1.92v-1.34l7.06-0.29v17.43c0,3.07,1.68,4.66,4.51,4.66 c4.03,0,6.72-3.26,6.72-8.64v-9.89c0-1.44-0.77-1.92-3.79-1.92v-1.34l7.06-0.29V30.34z" />
                        <path d="M192.73,14.31c0-1.44-0.77-1.92-3.79-1.92v-1.34l7.01-0.29v4.27h0.1c1.58-2.26,2.74-4.56,7.01-4.56 c5.76,0,9.65,5.86,9.65,11.86s-3.89,11.86-10.42,11.86c-2.59,0-4.8-1.06-6.19-3.02h-0.1v7.34c0,1.44,0.77,1.92,3.94,1.92v1.34 H188.6v-1.34c3.36,0,4.13-0.48,4.13-1.92V14.31z M195.99,22.32c0,8.21,1.63,10.51,6.62,10.51c3.55,0,6.62-2.98,6.62-10.51 s-3.07-10.51-6.62-10.51C199.07,11.81,195.99,14.79,195.99,22.32z" />
                      </g>
                    </svg>
                  </Svg>
                </Box>
              }
              paddingColumnLeft={{ sx: "65px 0", md: "0px  0px 0px 150px" }}
              reverse
              bodyTextpadding={{ sx: "10px 0", md: "5px 0" }}
              paragraph="Empresa liderada por Alejandro Ginevra, con presencia en Argentina y Uruguay. De GNV se desprenden sofisticados desarrollos y prestigiosas marcas relacionadas al real estate."
              image="https://res.cloudinary.com/gregomartocci/image/upload/v1660970514/uwlrly2kqrnolnqbvb2e.jpg"
              imageMaxWidth="750px"
              imageMaxHeight="350px"
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              padding: { xs: "20px 0", md: "40px 0" },
              borderBottom: { xs: "", md: "1.5px solid #eeeeee" },
            }}
          >
            <Section
              title={
                <Box
                  sx={{
                    width: { xs: "130px", md: "200px" },
                    padding: { xs: "10px 0 10px 0", md: "0 0 20px 0" },
                    maxHeight: "200px",
                  }}
                >
                  <Image
                    src={ginevraRealty}
                    alt="ginevraRoyalty"
                    objectFit="cover"
                  />
                </Box>
              }
              paddingColumnLeft={{ sx: "65px 0", md: "0px  150px 0px 0px" }}
              bodyTextpadding={{ sx: "25px 0", md: "150px 0 0 0" }}
              paragraph="Unidad de negocios que brinda servicios inmobiliarios de los emprendimientos, las propiedades residenciales y oficinas más exclusivas del mercado."
              image="https://res.cloudinary.com/gregomartocci/image/upload/v1666135684/kvodyjx73j038mhmvvnz.png"
              imageMaxWidth="750px"
              imageMaxHeight="350px"
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              padding: { xs: "20px 0", md: "40px 0" },
              borderBottom: { xs: "", md: "1.5px solid #eeeeee" },
            }}
          >
            <Section
              title={
                <Box
                  sx={{
                    height: { xs: "75px", md: "110px" },
                    width: { xs: "200px", md: "280px" },
                  }}
                >
                  <Svg>
                    <svg
                      id="Layer_1"
                      data-name="Layer 1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 616.48 141.83"
                    >
                      <defs>
                        <style>
                          {".cls-1{fill:#010101}.cls-2{fill:#6d6e71}"}
                        </style>
                      </defs>
                      <path
                        className="cls-1"
                        d="M87.34 107.05c-14 14.85-39.65 14.37-53.06.4-9.72-9.72-9.46-21.75-9.46-38.35s-.26-28.63 9.46-38.36C41 24 49.42 20.21 60.21 20.21 82.48 20.21 93.84 34.8 96.4 51H77.6c-2.13-8.93-7.6-13.87-17.08-13.87a15.44 15.44 0 0 0-11.88 5.06c-3.61 4-4.55 8.41-4.55 26.69s.91 22.83 4.55 26.81c5.74 7 19.46 6.24 25.1-.4C76.81 91.82 78 87.56 78 82.61V79H60V63h36c0 16 1.46 33.36-9.21 43.53M168.2 117 130 58.06V117h-19V21h16.79L166 79.77V21h19v96h-16.8zM253.85 21l-19.28 62.56L215.3 21h-19.42l31.68 96h14.02l31.83-96h-19.56z"
                      />
                      <path
                        className="cls-2"
                        d="M331.84 47.8v14.47h-3V26.73H341q5.54 0 8.75 2.83a9.85 9.85 0 0 1 3.21 7.79c0 3.33-1 5.91-3.09 7.72s-5 2.73-8.94 2.73Zm0-2.54H341c2.91 0 5.13-.7 6.66-2.08a7.44 7.44 0 0 0 2.3-5.8 7.77 7.77 0 0 0-2.28-5.88 9.17 9.17 0 0 0-6.49-2.23h-9.3ZM371.15 38.35a10.43 10.43 0 0 0-2-.17 7.16 7.16 0 0 0-4.62 1.52 8.3 8.3 0 0 0-2.7 4.43v18.14h-2.91V35.86h2.86l.05 4.2a7.76 7.76 0 0 1 7.44-4.69 4.81 4.81 0 0 1 1.93.32ZM373.66 48.68a15.67 15.67 0 0 1 1.48-6.87 11.13 11.13 0 0 1 10.29-6.44 10.87 10.87 0 0 1 8.55 3.7q3.27 3.69 3.27 9.8v.61a15.6 15.6 0 0 1-1.48 6.9 11 11 0 0 1-4.16 4.72 11.38 11.38 0 0 1-6.13 1.66 10.86 10.86 0 0 1-8.53-3.7q-3.29-3.69-3.29-9.8Zm2.93.8a12 12 0 0 0 2.46 7.78 8.3 8.3 0 0 0 12.84 0 12.36 12.36 0 0 0 2.45-8v-.56a13.46 13.46 0 0 0-1.12-5.55 9.07 9.07 0 0 0-3.15-3.89 8.05 8.05 0 0 0-4.64-1.38 7.81 7.81 0 0 0-6.37 3.06 12.45 12.45 0 0 0-2.47 8ZM424.52 49.33q0 6.18-2.74 9.81a8.71 8.71 0 0 1-7.32 3.62 9.78 9.78 0 0 1-8.3-3.81v13.48h-2.91V35.86H406l.15 3.73a9.38 9.38 0 0 1 8.28-4.22 8.8 8.8 0 0 1 7.39 3.63q2.7 3.59 2.7 10Zm-2.93-.51q0-5.05-2.08-8a6.69 6.69 0 0 0-5.78-2.93 7.69 7.69 0 0 0-7.57 5.11v12.63a7.75 7.75 0 0 0 3 3.47 8.64 8.64 0 0 0 4.62 1.2 6.63 6.63 0 0 0 5.75-2.95q2.06-2.94 2.06-8.53ZM430.82 28.23a2 2 0 0 1 .53-1.4 1.93 1.93 0 0 1 1.47-.57 1.92 1.92 0 0 1 2 2 1.91 1.91 0 0 1-.55 1.38 2 2 0 0 1-1.48.56 2 2 0 0 1-1.47-.56 1.93 1.93 0 0 1-.5-1.41Zm3.44 34h-2.93V35.86h2.93ZM452.42 62.76a11.46 11.46 0 0 1-6.09-1.66 11.33 11.33 0 0 1-4.23-4.62 14.45 14.45 0 0 1-1.52-6.66v-1a15.62 15.62 0 0 1 1.48-6.86 11.75 11.75 0 0 1 4.11-4.79 10.13 10.13 0 0 1 5.72-1.75 9.54 9.54 0 0 1 7.63 3.28q2.82 3.29 2.82 9v1.63h-18.85v.56a11.11 11.11 0 0 0 2.57 7.49 8.22 8.22 0 0 0 6.49 3 9.47 9.47 0 0 0 4.13-.86 9.12 9.12 0 0 0 3.26-2.73l1.83 1.39a10.64 10.64 0 0 1-9.35 4.58Zm-.53-24.9a7.33 7.33 0 0 0-5.56 2.42 11.14 11.14 0 0 0-2.74 6.49h15.84v-.32a9.73 9.73 0 0 0-2.17-6.2 6.75 6.75 0 0 0-5.37-2.39ZM466.85 48.82q0-6.15 2.75-9.8a8.85 8.85 0 0 1 7.46-3.65 9.19 9.19 0 0 1 8.15 4.22V24.77h2.91v37.5h-2.74l-.12-3.51a9.42 9.42 0 0 1-8.25 4 8.79 8.79 0 0 1-7.36-3.67q-2.81-3.68-2.8-9.93Zm3 .51a13.82 13.82 0 0 0 2 8 6.57 6.57 0 0 0 5.72 2.91 7.85 7.85 0 0 0 7.66-4.76V43.06q-2.26-5.14-7.62-5.15a6.61 6.61 0 0 0-5.73 2.89q-2.07 2.89-2.07 8.53ZM512.48 62.27a13.82 13.82 0 0 1-.56-3.68 10.23 10.23 0 0 1-3.92 3.09 12 12 0 0 1-5 1.08 8.87 8.87 0 0 1-6.16-2.12 6.94 6.94 0 0 1-2.36-5.37 7.09 7.09 0 0 1 3.21-6.11q3.21-2.23 9-2.24h5.3v-3a5.8 5.8 0 0 0-1.75-4.45 7.22 7.22 0 0 0-5.09-1.62A8 8 0 0 0 500 39.4a4.63 4.63 0 0 0-2 3.76h-2.92a6.77 6.77 0 0 1 2.92-5.48 11.3 11.3 0 0 1 7.21-2.31 10.31 10.31 0 0 1 7 2.21 7.93 7.93 0 0 1 2.62 6.16v12.5a15.43 15.43 0 0 0 .81 5.74v.29Zm-9.18-2.1a9.84 9.84 0 0 0 5.24-1.41A8.37 8.37 0 0 0 511.9 55v-5.84h-5.23a13.17 13.17 0 0 0-6.83 1.6 4.81 4.81 0 0 0-2.47 4.24 4.73 4.73 0 0 0 1.63 3.71 6.18 6.18 0 0 0 4.3 1.46ZM521.42 48.82q0-6.15 2.74-9.8a8.86 8.86 0 0 1 7.46-3.65 9.2 9.2 0 0 1 8.16 4.22V24.77h2.9v37.5H540l-.12-3.51a9.45 9.45 0 0 1-8.26 4 8.81 8.81 0 0 1-7.36-3.67q-2.79-3.68-2.79-9.93Zm3 .51a13.82 13.82 0 0 0 2 8 6.55 6.55 0 0 0 5.71 2.91 7.86 7.86 0 0 0 7.67-4.76V43.06q-2.28-5.14-7.62-5.15a6.63 6.63 0 0 0-5.74 2.89c-1.38 1.93-2.07 4.77-2.07 8.53ZM560.6 62.76a11.46 11.46 0 0 1-6.09-1.66 11.26 11.26 0 0 1-4.23-4.62 14.45 14.45 0 0 1-1.52-6.66v-1a15.49 15.49 0 0 1 1.48-6.86 11.68 11.68 0 0 1 4.11-4.79 10.11 10.11 0 0 1 5.72-1.75 9.56 9.56 0 0 1 7.63 3.28q2.81 3.29 2.81 9v1.63h-18.84v.56a11.11 11.11 0 0 0 2.57 7.49 8.21 8.21 0 0 0 6.48 3 9.48 9.48 0 0 0 4.14-.86 9.12 9.12 0 0 0 3.26-2.73L570 58.1a10.65 10.65 0 0 1-9.4 4.66Zm-.53-24.9a7.33 7.33 0 0 0-5.56 2.42 11.21 11.21 0 0 0-2.75 6.49h15.85v-.32a9.73 9.73 0 0 0-2.17-6.2 6.75 6.75 0 0 0-5.37-2.39ZM592 55.56a4.16 4.16 0 0 0-1.74-3.49A13.41 13.41 0 0 0 585 50a23.92 23.92 0 0 1-5.46-1.71 7.37 7.37 0 0 1-2.88-2.36 5.86 5.86 0 0 1-.94-3.37 6.29 6.29 0 0 1 2.61-5.16 10.54 10.54 0 0 1 6.69-2 10.88 10.88 0 0 1 7.09 2.18 7 7 0 0 1 2.68 5.71h-2.93a4.73 4.73 0 0 0-1.94-3.86 8.78 8.78 0 0 0-9.53-.26 4 4 0 0 0-1.74 3.33 3.61 3.61 0 0 0 1.45 3.07 15.47 15.47 0 0 0 5.3 2 24.56 24.56 0 0 1 5.76 1.93 7.44 7.44 0 0 1 2.84 2.42 6.81 6.81 0 0 1-1.77 8.84 11.51 11.51 0 0 1-7 2 11.83 11.83 0 0 1-7.48-2.23 6.88 6.88 0 0 1-2.87-5.65h2.93a5.05 5.05 0 0 0 2.16 4 8.85 8.85 0 0 0 5.26 1.43 8.25 8.25 0 0 0 4.91-1.31 4 4 0 0 0 1.86-3.44ZM353.58 101q-.61 5.61-4 8.59t-9.07 3a12.49 12.49 0 0 1-7-2 12.75 12.75 0 0 1-4.7-5.6 20 20 0 0 1-1.69-8.29v-4.58a20.09 20.09 0 0 1 1.66-8.4 12.84 12.84 0 0 1 4.77-5.65 13 13 0 0 1 7.17-2q5.71 0 9 3.07a12.92 12.92 0 0 1 3.85 8.53h-3q-1.12-9.06-9.84-9.06a9.32 9.32 0 0 0-7.7 3.61q-2.88 3.63-2.87 10v4.35q0 6.15 2.79 9.82a9 9 0 0 0 7.56 3.66q4.71 0 7.1-2.26c1.6-1.5 2.58-3.76 3-6.77ZM358.58 98.52a15.53 15.53 0 0 1 1.48-6.87 11.1 11.1 0 0 1 10.29-6.44 10.85 10.85 0 0 1 8.54 3.7q3.27 3.69 3.28 9.8v.61a15.74 15.74 0 0 1-1.48 6.9 11 11 0 0 1-4.16 4.72 11.43 11.43 0 0 1-6.13 1.66 10.88 10.88 0 0 1-8.54-3.7q-3.27-3.69-3.28-9.8Zm2.93.8a12 12 0 0 0 2.49 7.78 8.31 8.31 0 0 0 12.85 0 12.42 12.42 0 0 0 2.45-8v-.56a13.62 13.62 0 0 0-1.16-5.54 9.07 9.07 0 0 0-3.14-3.92 8.05 8.05 0 0 0-4.64-1.38 7.79 7.79 0 0 0-6.36 3.06 12.39 12.39 0 0 0-2.47 8ZM390.86 85.7 391 90a9.74 9.74 0 0 1 3.67-3.58 10 10 0 0 1 4.88-1.2q6.25 0 7.93 5.13a10 10 0 0 1 3.79-3.8 10.45 10.45 0 0 1 5.22-1.33q8.51 0 8.67 9.28v17.62h-2.93V94.71a7.9 7.9 0 0 0-1.53-5.25q-1.5-1.71-4.89-1.71a7.73 7.73 0 0 0-5.32 2 7.17 7.17 0 0 0-2.49 4.88v17.48h-2.93V94.49a7.26 7.26 0 0 0-1.6-5.07 6.38 6.38 0 0 0-4.85-1.67 7.35 7.35 0 0 0-4.73 1.57A9.2 9.2 0 0 0 391 94v18.11h-2.93V85.7ZM442.74 112.6a11.41 11.41 0 0 1-6.09-1.66 11.28 11.28 0 0 1-4.24-4.62 14.44 14.44 0 0 1-1.51-6.66v-1a15.62 15.62 0 0 1 1.47-6.86 11.77 11.77 0 0 1 4.12-4.8 10.08 10.08 0 0 1 5.71-1.75 9.53 9.53 0 0 1 7.63 3.28q2.82 3.29 2.82 9v1.57H433.8v.56a11.07 11.07 0 0 0 2.58 7.49 8.18 8.18 0 0 0 6.48 3 9.54 9.54 0 0 0 4.14-.86 9.29 9.29 0 0 0 3.26-2.73l1.83 1.39a10.66 10.66 0 0 1-9.35 4.65Zm-.54-24.9a7.29 7.29 0 0 0-5.55 2.42 11.08 11.08 0 0 0-2.75 6.49h15.84v-.32a9.67 9.67 0 0 0-2.17-6.2 6.75 6.75 0 0 0-5.37-2.39ZM470.54 88.19a10.32 10.32 0 0 0-2-.17 7.16 7.16 0 0 0-4.63 1.52 8.42 8.42 0 0 0-2.7 4.43v18.14h-2.9V85.7h2.85l.05 4.2a7.77 7.77 0 0 1 7.45-4.69 4.87 4.87 0 0 1 1.93.32ZM484.46 110.14a7.78 7.78 0 0 0 5.12-1.72 6.11 6.11 0 0 0 2.23-4.46h2.81a8.36 8.36 0 0 1-1.52 4.41 9.55 9.55 0 0 1-3.7 3.11 11.08 11.08 0 0 1-4.94 1.12 10.2 10.2 0 0 1-8.24-3.61q-3-3.61-3-9.72v-.88a16.58 16.58 0 0 1 1.37-6.91 10.52 10.52 0 0 1 3.92-4.63 10.74 10.74 0 0 1 6-1.64 10.17 10.17 0 0 1 7.16 2.59 9.42 9.42 0 0 1 3 6.81h-2.81a7.6 7.6 0 0 0-13.51-4q-2.19 2.85-2.19 8v.86q0 5.06 2.19 7.88a7.32 7.32 0 0 0 6.11 2.79ZM500.28 78.07a2 2 0 0 1 .54-1.4 1.89 1.89 0 0 1 1.46-.57 1.92 1.92 0 0 1 2 2 1.91 1.91 0 0 1-.55 1.38 2 2 0 0 1-1.48.56 1.92 1.92 0 0 1-1.46-.56 1.9 1.9 0 0 1-.51-1.41Zm3.44 34h-2.93V85.7h2.93ZM528.33 112.11a13.82 13.82 0 0 1-.56-3.68 10.23 10.23 0 0 1-3.92 3.09 12.08 12.08 0 0 1-5 1.08 8.87 8.87 0 0 1-6.16-2.12 6.94 6.94 0 0 1-2.36-5.37A7.09 7.09 0 0 1 513.5 99q3.21-2.23 9-2.24h5.3v-3a5.8 5.8 0 0 0-1.8-4.46 7.22 7.22 0 0 0-5.09-1.62 8 8 0 0 0-5 1.56 4.63 4.63 0 0 0-2 3.76h-2.93a6.78 6.78 0 0 1 2.93-5.45 11.3 11.3 0 0 1 7.21-2.31 10.31 10.31 0 0 1 7 2.21 7.93 7.93 0 0 1 2.62 6.16v12.5a15.43 15.43 0 0 0 .81 5.74v.29Zm-9.18-2.1a9.84 9.84 0 0 0 5.24-1.41 8.37 8.37 0 0 0 3.36-3.79V99h-5.23a13.17 13.17 0 0 0-6.83 1.6 4.81 4.81 0 0 0-2.47 4.26 4.73 4.73 0 0 0 1.65 3.69 6.18 6.18 0 0 0 4.28 1.45ZM541.71 112.11h-2.93v-37.5h2.93ZM559.88 112.6a11.47 11.47 0 0 1-6.1-1.66 11.33 11.33 0 0 1-4.23-4.62 14.45 14.45 0 0 1-1.55-6.66v-1a15.62 15.62 0 0 1 1.48-6.86 11.82 11.82 0 0 1 4.14-4.8 10.13 10.13 0 0 1 5.72-1.75 9.54 9.54 0 0 1 7.66 3.24q2.82 3.29 2.82 9v1.61h-18.88v.56a11.11 11.11 0 0 0 2.57 7.49 8.22 8.22 0 0 0 6.49 3 9.54 9.54 0 0 0 4.14-.86 9.17 9.17 0 0 0 3.25-2.73l1.84 1.39a10.66 10.66 0 0 1-9.35 4.65Zm-.54-24.9a7.33 7.33 0 0 0-5.56 2.42 11.14 11.14 0 0 0-2.78 6.49h15.84v-.32a9.67 9.67 0 0 0-2.17-6.2 6.75 6.75 0 0 0-5.33-2.39ZM591.3 105.4a4.17 4.17 0 0 0-1.75-3.49 13.34 13.34 0 0 0-5.26-2.06 24.26 24.26 0 0 1-5.46-1.71 7.37 7.37 0 0 1-2.83-2.36 5.93 5.93 0 0 1-.94-3.37 6.29 6.29 0 0 1 2.61-5.16 10.56 10.56 0 0 1 6.69-2 10.93 10.93 0 0 1 7.1 2.18 7 7 0 0 1 2.67 5.71h-2.93a4.73 4.73 0 0 0-1.94-3.86 8.76 8.76 0 0 0-9.52-.26 4 4 0 0 0-1.75 3.33 3.64 3.64 0 0 0 1.45 3.07 15.47 15.47 0 0 0 5.3 2 24.4 24.4 0 0 1 5.76 1.93 7.44 7.44 0 0 1 2.85 2.46 6.78 6.78 0 0 1-1.77 8.84 11.51 11.51 0 0 1-7 2 11.83 11.83 0 0 1-7.48-2.23 6.88 6.88 0 0 1-2.87-5.65h2.93a5.11 5.11 0 0 0 2.16 4 8.85 8.85 0 0 0 5.26 1.43 8.3 8.3 0 0 0 4.94-1.35 4 4 0 0 0 1.78-3.45Z"
                      />
                      <path
                        style={{
                          fill: "none",
                          stroke: "#808285",
                          strokeMiterlimit: 10,
                          strokeWidth: 3,
                        }}
                        d="M298.5 20v97"
                      />
                    </svg>
                  </Svg>
                </Box>
              }
              bodyTextpadding={{ sx: "10px 0", md: "0" }}
              paddingColumnLeft={{ sx: "65px 0", md: "0px  0px 0px 150px" }}
              reverse
              paragraph="Unidad de negocios que opera en el mercado retail, manejando locales comerciales y desarrollando paseos gastronómicos y de compras."
              image="https://res.cloudinary.com/gregomartocci/image/upload/v1664797870/gm6dkbs9ix9oerdtbhxq.jpg"
              imageMaxWidth="750px"
              imageMaxHeight="350px"
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
          width: "100vw",
          padding: "40px 7.5%",
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
            padding: { xs: "10px 2.5%", md: "40px 2.5%" },
          }}
        >
          <HeaderTitle
            title="Licencias"
            p="0 15px"
            titleFontSize={{ xs: "20px", md: "22px" }}
            fontWeight={600}
            titlePadding="10px 0"
          />
          <Box
            sx={{
              display: "flex",
              width: "100%",
              borderBottom: "3px solid #424242",
              borderRadius: "500px",
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            height: "100%",
            alignItems: "center",
            justifyContent: "space-evenly",
            flexWrap: { xs: "wrap", lg: "none" },
          }}
        >
          {licences?.map((item, key) => {
            return <Licence item={item} key={key} />;
          })}
        </Box>
      </Box>

      {/* COMPANY */}

      <Box sx={{ width: "100vw", padding: "7.5% " }}>
        <motion.div
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{ once: true }}
          variants={FadeFromBottom}
          style={{ width: "100%", height: "100%" }}
        >
          <HeaderTitle
            p={{ xs: "30px 0 30px 0", md: "50px 0 100px 0" }}
            titleFontSize={{ xs: "20px", md: "22px" }}
            fontWeight={600}
            title="Compañia"
            color="#000"
          />

          {render ? (
            <MessageSection
              title=" Liderar el sector inmobiliario, mucho más que una tradición familiar."
              description={
                render
                  ? sanitize(
                      "<p> Nos dedicamos hace más de 50 años a desarrollar, gerenciar y comercializar emprendimientos inmobiliarios y hoteleros de categoría internacional en Argentina y Uruguay. </p> "
                    )
                  : ""
              }
              render={render}
              img="https://res.cloudinary.com/gregomartocci/image/upload/v1664804960/ao1dsohnnqtax1auwo1q.jpg"
            />
          ) : null}
        </motion.div>
      </Box>

      {/* TEAM */}

      {!xs && (
        <Box
          sx={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            width: "100%",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "25px",
              width: "100%",
              zIndex: 100,
            }}
          >
            <HeaderTitle
              p={{ xs: "0", md: "5px 25px 200px 25px" }}
              fontWeight={600}
              titleWidth={{ xs: "300px", md: "max-content" }}
              titleFontSize={{ xs: "18px", md: "20px" }}
              title="<p> La trayectoria de una gran empresa con el trato de una gran familia</p>"
              color="#fff"
            />
          </Box>
          <Main
            mode="static"
            imageOnly
            img="https://res.cloudinary.com/gregomartocci/image/upload/v1662070261/mknqdasujsg9glwxztue.jpg"
            height="80vh"
            objectPosition="center bottom"
          />
        </Box>
      )}

      {/* GALLERY */}

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          padding: { xs: "", md: "40px 0 150px 0" },
        }}
      >
        <HeaderTitle
          p={{ xs: "30px 0 30px 0", md: "50px 0 100px 0" }}
          titleFontSize={{ xs: "20px", md: "22px" }}
          fontWeight={600}
          title="Galería de arte"
        />

        <ArtGallery
          gallery={allGalleryItems?.length ? allGalleryItems : [] ?? []}
        />
      </Box>

      <Footer />
    </Box>
  );
};

export default Company;
