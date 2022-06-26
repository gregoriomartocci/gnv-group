import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import "./styles.css";

// import required modules
import { FreeMode, Pagination } from "swiper";
import Card, { ICard } from "../Card";
import { Box } from "@mui/material";

export interface ICarousel {
  children: any;
}

export const Carousel = ({ children }: any) => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        freeMode={true}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {children}
      </Swiper>
    </>
  );
};

export default Carousel;
