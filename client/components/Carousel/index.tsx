import React from "react";
// Import Swiper React components
import { Swiper } from "swiper/react";
import { Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import "./styles.css";ls

// import required modules
import { FreeMode, Pagination } from "swiper";

export interface ICarousel {
  children: any;
  slidesPerView: number;
}

export const Carousel = ({ children, slidesPerView }: any) => {
  return (
    <>
      <Swiper
        style={{ width: "100%", height: "100%" }}
        slidesPerView={slidesPerView}
        spaceBetween={0}
        freeMode={true}
        modules={[FreeMode, Pagination, Autoplay]}
        className="mySwiper"
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {children}
      </Swiper>
    </>
  );
};

export default Carousel;
