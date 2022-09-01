import React from "react";
import { Box } from "@mui/material";
import Menu from "../../components/Menu";

import Footer from "../../components/Footer";
import Slider from "./components/Slider";
import HeaderTitle from "./components/Header-Title";

const items = [
  {
    src: "https://res.cloudinary.com/gregomartocci/image/upload/v1657430588/owperet7603w21sgbf7w.jpg",
    description: "WTC Buenos Aires I, II, III IV",
  },
  {
    src: "https://res.cloudinary.com/gregomartocci/image/upload/v1661433982/e0sxsbscnn7wsjy7ixup.jpg",
    description: "Ostent Tower",
  },
  {
    src: "https://res.cloudinary.com/gregomartocci/image/upload/v1657426798/jefizhrvbp3zxcpgbbay.jpg",
    description: "Harbour Tower",
  },
  {
    src: "https://res.cloudinary.com/gregomartocci/image/upload/v1657430355/g7yz4ndlvgjjqvtidfa6.jpg",
    description: "The Shops",
  },
];

const Venture = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
      }}
    >
      <Menu onScroll />
      <Box sx={{ padding: "150px 10%", width: "100%" }}>
        <HeaderTitle
          title="Venture Title"
          description="Construimos  vínculos profundos y duraderos. La suma de experiencia y visión nos permite participar activamente en los mercados locales e internacionales, mediante tres segmentos: urbanizaciones, edificios residenciales, y torres corporativas."
        />
      </Box>
      <Slider items={items ? items : []} />
      <Footer />
    </Box>
  );
};

export default Venture;
