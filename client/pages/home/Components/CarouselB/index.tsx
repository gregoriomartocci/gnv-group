import React, { useRef, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { Box } from "@mui/material";
import "swiper/css";
import "swiper/css/navigation";

// import required modules

export const CarouselB = ({ items }) => {

  const getFormat = (file: string) => {
    const result = file?.split(".").pop()?.toUpperCase();
    return result;
  };

  return (
    <Swiper navigation={true} modules={[Navigation]}>
      {items?.map((element) => {
        return (
          <SwiperSlide>
            {getFormat(element?.src) !== "MP4" ? (
              <video
                style={{
                  width: "100vw",
                  height: "100vh",
                  objectFit: "cover",
                }}
                src={element?.src}
                autoPlay
                loop
                muted
              />
            ) : (
              <img
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
                src={element?.src}
                alt="foto"
              />
            )}
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
