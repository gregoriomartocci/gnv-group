import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import "./styles.css";ls

// import required modules
import { FreeMode, Pagination } from "swiper";

export interface ICarousel {
  children: any;
}

export const Carousel = ({ children }: any) => {
  return (
    <>
      <Swiper
        style={{ padding: "15px 10%" }}
        slidesPerView={1}
        spaceBetween={100}
        freeMode={true}
        modules={[FreeMode, Pagination, Autoplay]}
        className="mySwiper"
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        {children}
      </Swiper>
    </>
  );
};

export default Carousel;
