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
  delay?: number;
  breakpoints?: any;
}

export const Carousel = ({
  children,
  slidesPerView,
  delay,
  breakpoints,
}: any) => {
  return (
    <Swiper
      style={{ width: "100%", height: "100%" }}
      slidesPerView={slidesPerView}
      spaceBetween={0}
      freeMode={true}
      modules={[FreeMode, Pagination, Autoplay]}
      className="mySwiper"
      loop={true}
      autoplay={{
        delay,
        disableOnInteraction: false,
      }}
      breakpoints={breakpoints ? breakpoints : {}}
    >
      {children}
    </Swiper>
  );
};

export default Carousel;
