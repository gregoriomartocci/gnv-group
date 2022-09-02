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
    img: [
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 119.47 99.59"
      >
        <path d="M30.43 66.39c0-.68.6-.66 1-.82a24.28 24.28 0 0 0 6-3.46 6.75 6.75 0 0 0 2-2.54 2.33 2.33 0 0 0 0-1.52c-.49-1.32-1.25-2.55-1.64-3.89a11 11 0 0 1-.27-6.16c.31-1.07.58-2.15 1-3.17s1-2.3 1.62-3.43c.68-1.33 1.45-2.62 2.1-4a30.19 30.19 0 0 0 1.51-3.58 25.68 25.68 0 0 0 .72-3.15c.24-1.15.47-2.31.73-3.56a7.06 7.06 0 0 1 .7.6 38 38 0 0 1 4.57 5.71 47.12 47.12 0 0 1 2.35 4.3 15.69 15.69 0 0 1 1.57 7.66 2.63 2.63 0 0 0 .06.42 30.56 30.56 0 0 0 6.14-3.54c2-1.45 4-3 5.95-4.57a5.59 5.59 0 0 1 3.2-1.37 5.76 5.76 0 0 1 2.64.73 4.89 4.89 0 0 0 2.85.38v-.16c-.43-.2-.88-.38-1.29-.61-.81-.47-1.59-1-2.41-1.44a4.6 4.6 0 0 0-4.31-.07A16.3 16.3 0 0 0 63.39 38c-.43.36-.66.18-.82-.16-.68-1.43-1.32-2.88-2-4.31-.53-1.14-1.1-2.27-1.64-3.4s-1.18-2.54-1.78-3.79c-.35-.73-.75-1.42-1.08-2.15-.58-1.28-1.18-2.56-1.67-3.87a12.17 12.17 0 0 1-.84-3 24 24 0 0 1 .08-3.88 6 6 0 0 1 .36-1.65 29.48 29.48 0 0 1 1.7-4.14c1.2-2.13 2.62-4.14 3.93-6.2.26-.42.42-.41.62 0 .63 1.38 1.26 2.77 1.92 4.15.77 1.62 1.59 3.22 2.37 4.84.87 1.79 1.7 3.6 2.56 5.39s1.9 3.85 2.78 5.77c.56 1.2 1.06 2.42 1.62 3.61s1.13 2.26 1.67 3.4 1.16 2.47 1.74 3.7 1.13 2.34 1.68 3.51c.8 1.68 1.57 3.37 2.37 5 .57 1.18 1.18 2.34 1.75 3.53.78 1.65 1.53 3.32 2.3 5 .54 1.15 1.09 2.28 1.64 3.41s1.17 2.43 1.75 3.65l2.37 4.94c.54 1.14 1.1 2.28 1.63 3.42a3.16 3.16 0 0 1 .15.68H76.96a1.54 1.54 0 0 1-1.71-1.1c-.51-1.27-1.18-2.48-1.76-3.72s-1.1-2.38-1.67-3.56c-.8-1.67-1.64-3.33-2.44-5-1-2.07-1.9-4.16-2.88-6.23-.52-1.12-1.09-2.23-1.67-3.38a15 15 0 0 0-4.19 3.24c-1.31 1.37-2.52 2.84-3.74 4.29s-2.47 3.08-3.75 4.59a29.5 29.5 0 0 1-5.34 5 59.01 59.01 0 0 1-4 2.66A24.44 24.44 0 0 1 40.26 64a45.28 45.28 0 0 1-5.38 1.8c-1.43.3-2.88.91-4.45.59ZM114.47 92.42l5 6a3.2 3.2 0 0 1-.51.12h-2.46a1.24 1.24 0 0 1-.79-.46c-1.4-1.75-2.76-3.53-4.15-5.28a.92.92 0 0 0-.61-.21h-5.18c-.51 0-.65.22-.65.69v5.29h-2.33c-.37 0-.46-.26-.46-.61V83.51c0-.77.09-.88.86-.88 3.45 0 6.9-.08 10.35 0a5.21 5.21 0 0 1 4.7 2.49 4.75 4.75 0 0 1 .34 3.72 4.55 4.55 0 0 1-2.6 2.94c-.45.28-.98.42-1.51.64Zm-4.78-7.25h-3.85c-.5 0-.73.17-.72.69v3.52c0 .55.2.75.74.74h7.25a2.91 2.91 0 0 0 2.22-.94 2.23 2.23 0 0 0-.16-3.3 3.84 3.84 0 0 0-1.89-.66c-1.19-.13-2.39-.05-3.59-.05ZM84.27 82.18a10.46 10.46 0 0 1 6.29 2A7.14 7.14 0 0 1 93.28 88a8.58 8.58 0 0 1 .47 2.67 7.87 7.87 0 0 1-2.88 6.11 8.63 8.63 0 0 1-4.78 2 14.78 14.78 0 0 1-2.53.26c-3.29-.35-6.24-1.47-7.91-4.58a7.64 7.64 0 0 1-.84-5.33A8.21 8.21 0 0 1 78 84.08a7.41 7.41 0 0 1 3.34-1.47Zm-.34 2.6a6.75 6.75 0 0 0-3.8 1 5.18 5.18 0 0 0-2.48 3.61 7 7 0 0 0 0 2.49 5.19 5.19 0 0 0 1.45 2.8 7.1 7.1 0 0 0 4.9 1.89 7.63 7.63 0 0 0 4-.89 5.87 5.87 0 0 0 2.24-2.21 6.42 6.42 0 0 0 .61-3.57 4.71 4.71 0 0 0-1.49-3.26 7 7 0 0 0-5.43-1.86ZM.44 98.57c.33-.69.58-1.24.85-1.78q1.19-2.33 2.38-4.65c.8-1.53 1.63-3 2.42-4.57s1.47-3 2.25-4.46a1.22 1.22 0 0 1 .71-.45c.25-.07.56 0 .82 0 1.13-.3 1.71.34 2.18 1.34.88 1.8 1.86 3.55 2.76 5.35.78 1.54 1.49 3.13 2.27 4.68.67 1.31 1.38 2.6 2.07 3.91a5.08 5.08 0 0 1 .21.63h-3.05c-.17 0-.35-.46-.47-.73-.35-.73-.63-1.49-1-2.2a1 1 0 0 0-.7-.46h-8.4c-.53 0-.63.39-.81.73-.42.82-.82 1.66-1.25 2.48a.49.49 0 0 1-.35.25c-.92-.06-1.82-.07-2.89-.07Zm12.83-6L10 85.87l-.19-.06-3.3 6.73ZM34.13 82.17a10.92 10.92 0 0 1 6 1.83 10.64 10.64 0 0 1 1.61 1.47c.31.3.28.62-.11.88a12.38 12.38 0 0 0-1.22.82.52.52 0 0 1-.84-.1A5.69 5.69 0 0 0 37 85.26a8.88 8.88 0 0 0-5-.26 6 6 0 0 0-3.09 1.64 5.63 5.63 0 0 0-1.41 5.15 5.29 5.29 0 0 0 3.3 4.07 8.67 8.67 0 0 0 3.16.57 10 10 0 0 0 3.1-.43 4.62 4.62 0 0 0 2.42-1.69c.34-.47.65-.5 1.09-.12a10.82 10.82 0 0 0 1.09.79c.38.25.4.48.09.84a8.34 8.34 0 0 1-3.46 2.45 11 11 0 0 1-4.62.86 10.47 10.47 0 0 1-6.52-2.48 7.54 7.54 0 0 1-2.07-3.11 7.71 7.71 0 0 1-.55-3.54 8.31 8.31 0 0 1 2.85-5.5 8.59 8.59 0 0 1 3.18-1.75 26.28 26.28 0 0 1 3.57-.58ZM67.18 86c-.59.44-1.12.89-1.7 1.25a.62.62 0 0 1-.89-.19 5 5 0 0 0-3.13-1.89 16.33 16.33 0 0 0-3.17-.29 5.85 5.85 0 0 0-4.95 2.68 5.74 5.74 0 0 0-.25 5.75 5.34 5.34 0 0 0 3.43 2.79 8.84 8.84 0 0 0 4.53.21 5.54 5.54 0 0 0 3.66-2.16.59.59 0 0 1 .58-.09c.62.36 1.2.78 1.86 1.21a4 4 0 0 1-1.46 1.69A8.36 8.36 0 0 1 61 98.84a15.19 15.19 0 0 1-2.2.27 10.36 10.36 0 0 1-6.66-2.56 8.12 8.12 0 0 1-2.21-3.61 8.45 8.45 0 0 1-.14-4 7.72 7.72 0 0 1 3.5-5 11.18 11.18 0 0 1 7.9-1.45A8.45 8.45 0 0 1 67.18 86Z" />
      </svg>,
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 493.57 171.39"
      >
        <path d="m0 85.38 14.11-4.93 49.61-17.3q26.8-9.36 53.56-18.63 29.44-10.26 58.78-20.56 29.73-10.37 59.49-20.66a67.05 67.05 0 0 0 6.84-2.51c3-1.41 5.7-.81 8.6.21q39.76 14 79.56 27.85 35.79 12.52 71.61 24.94 33.06 11.5 66.09 23.09c7.24 2.53 14.51 5 21.76 7.49 1 .34 1.9.72 3.56 1.35-4.23 1.5-7.75 2.77-11.28 4l-45.52 15.86q-30.05 10.46-60.18 20.89-34.2 11.92-68.38 23.9-29.85 10.41-59.75 20.7a6.9 6.9 0 0 1-4.17 0q-34.93-12-69.82-24.16-31.91-11.12-63.75-22.26-34.92-12.18-69.81-24.36-19.78-6.91-39.58-13.77c-.44-.15-.86-.34-1.29-.51Zm302.23 56.52c1.64-.52 2.79-.87 3.92-1.25 3.63-1.23 3.63-1.24 3.63-5V35.35a11.29 11.29 0 0 0-.05-2.18 1.93 1.93 0 0 0-.84-1.27c-1.74-.77-3.55-1.39-5.65-2.18-3.95 18.32-7.82 36.28-11.69 54.25a37.45 37.45 0 0 1-1.83-6.93l-10.36-54a2.9 2.9 0 0 0-1.14-2c-1.88-.79-3.89-1.3-6-1.95v133.22c1.62-.51 3-1.06 4.52-1.38 2.16-.46 2.89-1.53 2.88-3.86-.1-26.39-.06-52.77-.06-79.15v-3a5.67 5.67 0 0 1 1 2.44c2.3 12.07 4.56 24.14 6.91 36.19a4.83 4.83 0 0 0 1.48 2.41c1.74-.58 4.41 1 5.08-2.28 1.32-6.57 2.87-13.09 4.34-19.64 1.1-4.93 2.23-9.86 3.35-14.79l.48.06ZM176.94 34.21a20.76 20.76 0 0 1-3.93 1.36c-2.83.39-3.44 1.88-3.43 4.62.1 30.35.06 60.71.06 91.06a8.78 8.78 0 0 0 .05 2.18 2.57 2.57 0 0 0 1.08 1.57c1.92.79 3.92 1.39 6.17 2.16V68.58a13.31 13.31 0 0 1 1.6 4c1.71 6.9 3.37 13.82 5.08 20.72q6.1 24.57 12.27 49.15a2.58 2.58 0 0 0 1.08 1.66c2.13.87 4.34 1.54 6.77 2.37V24.96c-1.37.43-2.51.76-3.63 1.14-3.83 1.28-3.82 1.29-3.82 5.24v79.82l-.44.08c-6.29-25.61-12.58-51.22-18.91-77.03ZM261.8 54.6c0-.93.11-1.72.11-2.51V23.2c0-6.39-1.55-7.78-7.29-10.46s-11.1-2.4-16.81.15c-5.53 2.48-7 3.87-7 9.9.07 11.57.1 23.14.59 34.69.33 7.56 2.07 15 6.2 21.45 2.51 3.94 5.44 7.63 8.32 11.33a34.57 34.57 0 0 1 7.2 16.2c2.12 13.76.81 27.62 1.11 41.44a4 4 0 0 1-2.71 3.93c-1 .44-2.11.8-3.18 1.18-3.69 1.31-10.69-1.61-10.32-7.14.59-8.87.16-17.8.15-26.7 0-.85-.08-1.7-.13-2.55h-7.11a11.77 11.77 0 0 0-.15 1.26c0 10.44-.06 20.88 0 31.32.06 5.42 1.7 6.89 6.62 9.18 6 2.78 11.49 3 17.55.08 5.29-2.51 6.87-4 6.88-10v-27.92c0-15.13-3.08-29.15-13.87-40.7a32.44 32.44 0 0 1-8.36-17c-2.22-13-1.37-26.15-1.3-39.24 0-1.34 1.4-3.17 2.66-3.91 2.89-1.67 5.95-2.4 9.39-.68 3.1 1.55 3.86 2.06 3.86 5.59v23.79c.09 7.14.09 7.14 7.59 6.21Zm-108.83 50.1-.64.18-18.82-55.59c-2 .72-3.73 1.43-5.5 1.93-1.57.44-2 1.26-2 2.92.08 12.71.05 25.42.05 38.12v25c0 .8.2 2.08.7 2.31 2 1 4.12 1.58 6.69 2.5V74.24a2.09 2.09 0 0 1 1.1 1.22q8.56 25 17.12 49.94a8.25 8.25 0 0 0 8.5 5.46V40.05a28.43 28.43 0 0 1-4.29 1.47c-2.58.42-3 1.89-3 4.24.1 18.78.06 37.55.06 56.33Zm164.82-18.85v40.06c0 5.81 4 8.79 9.49 7.2 2.63-.77 5.24-1.66 7.82-2.6 6.17-2.24 7.5-4.18 7.5-10.8V68.48c0-5.82.08-11.65-.12-17.47-.15-4.35-2.08-7.81-6.27-9.56-2.53-1.06-5.22-1.73-7.72-2.84-6.16-2.74-10.85 1.45-10.77 7.9.19 13.11.07 26.28.07 39.34Zm33-39.56v78.74c1.92-.68 3.48-1.35 5.11-1.76 1.83-.47 2.26-1.5 2.23-3.31-.11-8.17-.05-16.34 0-24.52 0-.86.07-1.72.12-2.66 1.6 0 3.21-.86 3.68 1.41 1 4.67 2 9.33 2.92 14 .77 3.67 1.53 7.34 2.32 11.11 1.85-.6 3.21-1.13 4.61-1.48 2.25-.55 2.51-1.74 2-3.9-1.7-7.06-3.18-14.18-4.66-21.3a2.42 2.42 0 0 1 .58-2c3.06-2.31 4.16-5.54 4.25-9.12.14-6.06.17-12.13 0-18.2-.13-4.51-1.75-8.71-6-10.65-5.44-2.49-11.18-4.2-17.12-6.36ZM220.72 152.38V19.09c-1.38.42-2.52.76-3.65 1.12-4.77 1.53-3.91 1-3.91 5.23v120.84a7.46 7.46 0 0 0 .05 2.17 3 3 0 0 0 1.22 1.78c1.86.81 3.87 1.37 6.29 2.15ZM116.19 81.92c-4.55.25-8.9.42-13.23.78-1.65.13-2.37-.16-2.31-2 .11-3.72.09-7.45 0-11.17a2.14 2.14 0 0 1 1.91-2.5c4.59-1.25 9.15-2.65 13.7-4.08.66-.2 1.63-.84 1.68-1.34.19-2.14.08-4.3.08-6.63a9.71 9.71 0 0 0-1.47.23c-7.32 2.52-14.66 5-21.94 7.67a2.79 2.79 0 0 0-1.21 2.18c-.07 13.75 0 27.5-.09 41.26a2.27 2.27 0 0 0 2 2.52c2.39.71 4.73 1.62 7.09 2.44l15.68 5.38a49.7 49.7 0 0 1 0-5.37c.22-1.9-.59-2.74-2.31-3.24-4.5-1.29-9-2.66-13.45-4.07-.6-.19-1.53-.75-1.54-1.16-.12-4.41-.07-8.82-.07-13.38h15.47Zm265.42-24.7v57.08l22-7.65v-6.86l-14.75 4.36c0-4.74.06-8.94 0-13.13 0-1.62.56-2.07 2.11-2.08 3.23 0 6.45-.28 9.69-.35 1.37 0 1.88-.63 1.79-1.94a16.29 16.29 0 0 1 0-2.42c.12-1.48-.58-2-2-2-2.26 0-4.53-.18-6.79-.19-5.76 0-4.72.19-4.79-4.81-.05-3.27 0-6.54 0-10.13l14.85 4.43a39.84 39.84 0 0 1 0-4.58c.21-1.73-.57-2.39-2.1-2.9-5-1.65-9.9-3.47-14.86-5.19-1.57-.58-3.27-1.07-5.15-1.64Z" />
        <path d="M325.47 85.42V50.49c.09-4 .95-4.63 4.66-3.45 4.64 1.47 5.33 2.33 5.38 7.53.06 6.87 0 13.74 0 20.62v42c0 5.07-1.88 7.07-6.81 7.62-1.66.19-2.69-.37-3-2a19.35 19.35 0 0 1-.26-3.13q.02-17.15.03-34.26ZM358.14 56.79c6.77.77 8.41 2.54 8.44 8.91 0 4.68.06 9.36 0 14-.11 6-2.9 5.82-7.33 5.59a1.66 1.66 0 0 1-1-1.23c-.13-9.03-.11-18.13-.11-27.27Z" />
      </svg>,
    ],
    description:
      "WTC Buenos Aires está compuesto por 4 torres AAA dentro del complejo Madero Harbour. Más de 70 empresas multinacionales y dos embajadas desarrollan allí sus actividades económicas y comerciales.",
  },
  {
    img: [
      <svg
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1638.78 273.13"
      >
        <defs>
          <style>
            {
              ".cls-1{font-size:93px;fill:#231f20;font-family:Poppins-Bold,Poppins;font-weight:700}"
            }
          </style>
        </defs>
        <path d="M64.48 59.14c.47 4.4 1.52 4.28 4 2.84 2.21-1.32 5-1.75 7.65-2.17.48-.07 1.72 1.77 1.81 2.79a23.41 23.41 0 0 1-.64 5.09c3.24 1.94 1.84 5.21 1.66 8a12.81 12.81 0 0 1-2.07 5.15c-2.13 3.71-1.62 8.41.55 10.54 3.9 3.84 4 9.2 7.14 13a11.67 11.67 0 0 0 2.26 1.49c-.56-2.49-1-4.32-1.39-6.14l.93-.39c1.22 2.5 2.3 5.08 3.72 7.46 1.07 1.78 2.25 4 4 4.8a84.16 84.16 0 0 0 13.14 5 9.88 9.88 0 0 1 6.08 4.57c2.25 3.52 5.56 4.22 8.71 2.4 1.65 3.53 1.6 6.64-1.72 9.22-.5.39-1.33 1.12-1.22 1.4 1.17 3.07-1.74 6 1 9.68 3.39 4.54 5.71 9.91 10.13 13.81a3.15 3.15 0 0 1 1 2.6c-3.09 9.48-6.36 18.9-9.51 28.37a56.47 56.47 0 0 0-2.83 10.14c-.18 1.4 1.42 3.19 2.56 4.51.39.46 1.82 0 2.77 0 0-.81-.07-1.62-.12-2.43s-.49-2-.1-2.44c3.36-4.21 4.54-10 9.3-13.18 1.4-.94 3-1.53 4.42-2.5a18.28 18.28 0 0 0 4.2-4.09c5.34-2.12 8.71-6.48 12.26-10.83 1.61-2 4.28-3.09 6.51-4.53 1.56-1 3.72-1.54 4.67-2.92 1.89-2.74 3.1-6 4.68-8.92a8.82 8.82 0 0 1 1.94-2.44c5.9-5.15 5.93-7.52-.77-10.91-3.93-2-8.41-2.89-12.77-4.32.86-4.12-2.08-5.66-5.44-7-2.64-1.08-5.62-1.93-7.66-3.76-4.4-3.94-10-2.67-14.92-3.89-1.78-.45-4.23 1.78-7 3.06a16.86 16.86 0 0 1-4.4.1c-1-.17-2.58-1.58-2.47-2.15.9-4.52-.53-6.9-5.86-6.27.64-2.45 1.12-4.3 1.61-6.16l-.74-1a23.84 23.84 0 0 0-4.15 2.65c-1.87 1.8-6 1.67-6.31-.83-.45-3.25.37-6.84 1.35-10.07.46-1.51 11.61-2.41 12.74-1.13a44 44 0 0 1 3.71 5.71l1.08-.37c-.17-1.33.12-3.05-.61-3.91-2.48-2.93-.75-4.66 1.14-6.81 1.15-1.31 1.58-3.23 2.44-4.82 1.47-2.7 3-5.36 5-7l7.76-3-5.72-3 3-2.6 6.53 5.15 1.43-1.6c-5.25-5.24-10.5-10.47-15.88-15.85l-2.09 1.66-2.62-3.68 3.23-.56c.19-8.07-7.22-9.88-11.32-14.41.16-2.35.31-4.7.43-6.52a47.65 47.65 0 0 1 5.31 4.42c2.77 3.09 5.76 6.15 7.76 9.73 2.75 4.93 6.7 7.9 12.49 10.37-.87-5-4-10 2.29-13.09 11.55 10.8 22.82 22.48 32.62 35.53s18.18 26.63 21 43.08c3.57-23.79 13.3-45.22 25-65.77C224.92 49.76 232 40.2 239 30.65c4.23-5.81 8-5.78 12.63-.25A183.08 183.08 0 0 1 263 45.84c.83 1.24.33 3.38.43 5-4.66 1-8.81 1.39-12.59-2.23-.6-.57-4.21 1.16-5.73 2.58A38.21 38.21 0 0 0 239 59c-.81 1.29-.77 3.17-.84 4.79 0 .28 1.33.62 2.52 1.13l-7.46 8.78c-.35-3.86-.6-6.72-1-10.92l-8.48 8.7.77 1 3.94-1.06c-.57 1.15-1 1.94-1.6 3.19l4-1 .27.6-3.77 2.24c2.46 4.93 1.75 6.22-3.95 5.77-4.26-.33-4 3.26-5.21 5.35-.54.95.72 2.92 1.3 4.92-4.07 4.25-9.46 8.71-13.27 14.25-2.6 3.78-3.62 9-4.19 13.73-.52 4.19 7.94 10.41 12.25 9.95a20.35 20.35 0 0 1 3.93.38c1.18.12 2.85.78 3.46.24 4.88-4.34 8.14.55 12.37 1.8-2.22 4.49.27 7.52 2.62 10.85 1.9 2.7 2.84 5.84 1.15 9.3a7.42 7.42 0 0 0-.6 5c1.59 5 3.61 10 5.49 14.89.33.87.93 1.63 1.25 2.5 1.59 4.35 4.11 5.67 8.36 3.54a23.36 23.36 0 0 0 6.33-5.31 79.06 79.06 0 0 0 5.31-7.2c.15-.21.38-.53.32-.71-1.65-4.94 3.14-5.84 5.05-8.61a11.43 11.43 0 0 0 1.53-8.08c-1-4.69.07-8.1 3.36-11.39a112.67 112.67 0 0 0 9.08-10.43c.95-1.23 1-3.14 1.51-4.72-3.53-1.33-6.68 2.7-10.16-.29l17.39-8.85c.5 3.6 1 7.33 1.68 12 1.59-5.34 2.91-9.81 4.24-14.28.21 3.68 2.68 3.25 4.86 2.91s3.7 0 4.36 2.65c.36 1.4 1.82 2.52 3 4.06-.1 4.78-.34 10.12 3.92 14.78 1.41-2 3.2-3.48 3.71-5.35 1.82-6.62 8.15-8.23 12.67-11.73 2.62-2 4.42.27 5.06 2.87a21.67 21.67 0 0 1 .06 4.67l4.08-.55c-.9 6.77-.29 13.09 4.07 18.65l-7.49-6.06-1 1c3.63 4.7 7.25 9.41 11.28 14.62l3.31-5.18c-2.58-1.24-4.85-2.35-4-6.09.33-1.41-1.6-3.3-2.38-5a31.71 31.71 0 0 1-2-5.46c-.05-.21 2.42-1.6 2.87-1.27 1.29.94 2.15 2.49 3.37 4.05.4-.24 1.23-.77 2.1-1.23 4.76-2.54 5.15-4.18 2.07-8.77-2.59-3.88-2.31-5 1.5-5.89.09 0 .21.13.59.39a17.88 17.88 0 0 0-.56 2 18 18 0 0 0 0 2.44c1.21-.84 2.48-1.28 2.52-1.8.23-3.35 2.7-3.47 5.11-4.17 6.73-1.95 10-9.74 6.93-16.35l3.37-2.86-4.58-1c4.41-3 6.9-1.31 7.81 5.17 2.69-.48 3.79-1.56 3.19-4.64-.3-1.55.72-4.59 1.82-5 4.3-1.44 5.55-5 7.95-8.49v7c0 .35-.58.73-.52 1 1.16 5.61-2.64 7.36-6.77 9.08-2.7 1.13-2.7 1.67-.75 4.47.95-.66 1.81-1.66 2.86-1.94 5.09-1.33 8.12-3.89 7.14-9.77-.14-.86 1.6-2 1.4-3l-2.46-12.18c-2-1.49-4.6-2.8-4.45-3.48.55-2.45 2.45-3.68 5.34-3.62 2.22 0 4.45-.88 6.63-1.37a26.44 26.44 0 0 0 .09 5.72c.45 2.13 1.63 4.11 2.54 6.29 2.84-3.46 2.29-7.57 1.6-10.7l7.83-5.65-3.6-1.27.71-.91 3.21.56.65-.94c-1.29-1-2.45-2.46-3.9-2.86-3.91-1.09-8-1.66-11.92-2.58a35.93 35.93 0 0 1-4.75-1.71c-2.72-1-5-3.5-8.56-1-1 .74-4.46-1.83-7-3 .15-3.9-1.93-8-4.57-7.67 2.19 3.69 0 5.17-3.08 6.27-3.3 1.17-6.62 2.32-9.78 3.8-1.76.82-3.23 2.28-5.47 2.81l10.45-8.93-1-1.13c-8.47 3.55-15 10-22.09 15.64s-13.78 12.06-20.91 18c3.51-4.22 6.92-8.52 10.55-12.63a240.09 240.09 0 0 1 41-37.34c9.39-6.65 15.09-6.71 24.42-.18 25.44 17.83 46 40.18 62.86 66.27 13.49 20.9 14.25 42.39 4.76 64.73-11.5 27.06-30.79 47.38-55.34 63-3.12 2-6.67 3.28-10 5-9.67 5.13-19.3 4.9-29.15.36C349 223 335.77 211.26 324 197.6c-12.68-14.76-23.44-30.63-27.86-50-.8-3.49-1.43-7-2-9.9-1.84 9.1-3.26 18.86-5.84 28.31-5.66 20.75-14.68 40-28.27 56.81a70.94 70.94 0 0 1-10.44 9.81c-2.73 2.25-6 2.2-8.87 0a71.37 71.37 0 0 1-8.29-6.88c-19.75-20.29-31.12-44.8-36-72.47-1-5.63-1.47-11.34-2.25-17.56-.54 2.88-1 5.33-1.46 7.77-4.1 20.39-14.52 37.51-28.32 52.51a257.78 257.78 0 0 1-25.86 23.78c-5.18 4.26-11.48 7.16-17.3 10.63-8.34 5-16.85 4.77-25.63 1.06a95.87 95.87 0 0 1-27-17.64c-15.3-13.84-28.29-29.53-38-47.85C17 140.43 18.19 116 35.87 93c8.74-11.37 18.49-21.95 28.61-33.86Zm312.44 105.18c-.26-.52-.51-1-.76-1.55a57.22 57.22 0 0 0-5.39 2.8c-2.65 1.72-5 4-7.78 5.43-4.46 2.24-5.07 3.16-3.49 8 1 3 1.73 6 2.87 8.94a3.15 3.15 0 0 0 2.47 1.65 22.91 22.91 0 0 0 6.47-1.76c7.44-3.45 10.62-2.66 15.32 4.14 2.09 3 7.92 3.25 10.12.41 2-2.62 4.7-4.92 6-7.85 1.06-2.41 1.46-5.95.44-8.25-1.8-4.08-5-7.54-7.41-11.36a58.7 58.7 0 0 1-2.84-5.67c-2.55 2.28.27 7.78-4.76 7.24-1.23-.13-2.14-3.29-3.47-5.52-2.51-.04-6.6-3.12-7.79 3.35Zm10.75-8.61a25.55 25.55 0 0 0 3.58 1.81c.78.25 2.29.34 2.46 0 1.76-3.63 3.09-1.34 4.69.13s3.6 2.49 5.57.67c-1.58-1.37-3.41-2.34-4.34-3.86-2.9-4.75-9.85-7.56-14.46-6l-6.17-3.41c1.19 2.9 1.8 6 5.73 6.3 2.45.19 4.16 1.71 2.94 4.36Zm-27.76-5.52c4.7-7.39 5.22-11.08 2.4-12.93-3.26 1.88-6.39 3.54-9.33 5.49a3.16 3.16 0 0 0-.88 2.82c1.11 3.7 4.4 4.13 7.81 4.62Zm-77.42 1.69c-2.76 1.8-4.78 3-6.63 4.39a5.38 5.38 0 0 0-1.23 2.32 17.43 17.43 0 0 0-1.59 4.74c-.12 1.67.52 3.4.83 5.1 1.35-.77 3.3-1.22 3.95-2.39a87.74 87.74 0 0 0 4.62-10.55c.36-.93.05-2.12.05-3.61Zm126.88 51.54.93 1.42 14.82-10.46c-1.27-1.81-2.28-3.23-3.81-5.4.57 9.31-8.77 9.14-11.94 14.44Zm-294.53-97.53c3.85 1.36 8.41 1.87 11.34 4.32 3.1 2.6 5.23 1.64 8.17.78-4.12-3.09-17.44-6.37-19.51-5.1ZM365.12 144c-.24 3.09-.44 5.81-.64 8.42l4.47-.58c.35-2.31.69-4.47 1-6.51ZM126.3 213.47l-1-1.53-8.11 5.85.88 1.29Z" />
        <path d="M105.62 48c-1.84-2-3-3.64-4.47-4.74-1.06-.78-2.9-1.45-3.92-1-.85.36-1 2.36-1.89 4.67l-15.47-1.71c7.19-5.64 13.55-10.87 20.13-15.76 6.27-4.62 12.7-3.56 19 .25l-20.08 8.34c0 .58.07 1.16.11 1.74l10.06 1.45c-6.92-1.59-3.46 3.54-3.47 6.76ZM223.9 91.81c2.37-2.09 5-4.43 7.65-6.71 3.9-3.33 5-3.28 8.65 0a35.16 35.16 0 0 0 3.15 2.29l-3.25 2c.15.34.3 1 .46 1 1 0 2.57.21 2.89-.31a36.68 36.68 0 0 0 2.39-5.5c.75 2 1.77 4.57 3.07 7.9l2.75-3 8.75 4.38c.38-.68.83-1.47 1.43-2.55.89 3 1 5.46-2.66 5.59a23.61 23.61 0 0 1-8.36-1.12c-2.53-.86-4.06-1-4.5 2.41l-7.46-4v-4.5ZM116.33 67.34a50.16 50.16 0 0 0-5-2.78c-4.52-1.89-5.4-5.87-2-9l5.94 1.63c.3 3.08.73 6.95 1.06 10.15ZM265.12 84.42h-10.47l1.35-4.75 9.55 3.61ZM280.14 90.77c-6.73-1.48-5.28-8.19-10.4-10.92l3.41-1c2.41 4.09 4.45 7.59 6.99 11.92ZM263.55 102.41l10.15 15.1-1.7 1.06-9.37-15.57ZM246.86 58.23c1.67 8.86 1.42 9.44-4.21 10.14 4.6-2.09 4.19-6.15 4.21-10.14ZM285.93 104.58c-2.78 1.86-4.9.53-7.86-5Z" />
        <text className="cls-1" transform="translate(534.5 223.73)">
          {"BUENOS AIRES"}
        </text>
        <text className="cls-1" transform="translate(528.08 126.18)">
          {"WORLD TRADE CENTER"}
        </text>
        <path d="M463.07 205.93a14.36 14.36 0 1 1-14 14.87 14.37 14.37 0 0 1 14-14.87Zm-12.22 14.31a12.59 12.59 0 1 0 12.63-12.54 12.59 12.59 0 0 0-12.63 12.54Z" />
        <path d="m466.31 221.44 3.45 6.41h-2.73c-.13 0-.29-.24-.37-.4-.88-1.66-1.75-3.31-2.59-5a.68.68 0 0 0-.72-.43h-2.41v5.78h-2.63v-14.52c0-.39.07-.55.5-.54 2 0 3.91 0 5.86.08a4.93 4.93 0 0 1 2.78.93 4.54 4.54 0 0 1-.78 7.54Zm-5.31-1.59c1.18 0 2.31.07 3.43 0a2.23 2.23 0 0 0 2.05-2.11 2.33 2.33 0 0 0-1.56-2.69 16.56 16.56 0 0 0-3.92-.2ZM1580.41 47.13a9.92 9.92 0 1 1-9.66 10.27 9.92 9.92 0 0 1 9.66-10.27ZM1572 57a8.69 8.69 0 1 0 8.72-8.66A8.69 8.69 0 0 0 1572 57Z" />
        <path d="m1582.65 57.84 2.38 4.43h-1.88c-.1 0-.21-.17-.27-.28-.6-1.15-1.2-2.29-1.78-3.44a.48.48 0 0 0-.5-.3h-1.66v4h-1.82V52.19c0-.27.05-.37.35-.37 1.35 0 2.7 0 4 .06a3.39 3.39 0 0 1 1.91.64 3.13 3.13 0 0 1-.54 5.21Zm-3.71-1.1h2.37a1.55 1.55 0 0 0 1.42-1.46 1.6 1.6 0 0 0-1.08-1.85 11.16 11.16 0 0 0-2.71-.14Z" />
      </svg>,
    ],
    description:
      "Desarrollado por GNV y diseñado por el estudio de arquitectura Gómez Platero. el proyecto incluirá 80 elegantes habitaciones de hotel de última generación y 150 residencias, en dos torres estilo SLS que contarán con diseño de vanguardia, arte contemporáneo y detalles de lujo.",
  },
  {
    img: [
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 171.78 107.35"
      >
        <path d="M71.18 33.52C76 23.18 80.76 13.14 85.65 2.72c4.91 10.36 9.69 20.43 14.62 30.85 1.49-3.45 2.84-6.56 4.17-9.67C107 17.94 109.56 12 112.07 6A1.73 1.73 0 0 1 114 4.73c2.77.07 5.54 0 8.55 0-7.45 16.87-14.82 33.59-22.37 50.72L85.69 23.57 71 55.37 49.11 4.7c3.29 0 6.33 0 9.36.06.37 0 .86.72 1.06 1.2Q65 18.89 70.42 31.86c.18.44.4.87.76 1.66Z" />
        <text
          transform="translate(3.67 88.21)"
          style={{
            fill: "#231f20",
            fontSize: "23.57px",
            fontFamily: "Poppins-Medium,Poppins",
            fontWeight: 500,
          }}
        >
          {"BUENOS AIRES"}
        </text>
        <text
          transform="translate(4.62 102.85)"
          style={{
            fontSize: "13.42px",
            fontFamily: "Poppins-Regular,Poppins",
            fill: "#231f20",
          }}
        >
          {"HOTEL & RESIDENCENCES"}
        </text>
      </svg>,
    ],
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
          padding: "5% 7.5%",
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
        }}
      >
        <HeaderTitle py="7.5%" px="15px" fontSize="25px" title="El Grupo" />
        {/* <Team members={members} /> */}

        <Main
          mode="static"
          imageOnly
          img="https://res.cloudinary.com/gregomartocci/image/upload/v1662070261/mknqdasujsg9glwxztue.jpg"
        />
        {/* <TeamB members={members} /> */}
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
