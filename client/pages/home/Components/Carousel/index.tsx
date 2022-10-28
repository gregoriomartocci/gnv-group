import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, Pagination, Autoplay } from "swiper";
import { Box, Typography } from "@mui/material";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import useWindowDimensions from "../../../../hooks/ScreenSize";

// import required modules

const Carousel = ({ items }) => {
  const { width, height } = useWindowDimensions();

  const xs = width && width < 600;

  const getFormat = (file: string) => {
    const result = file?.split(".").pop()?.toUpperCase();
    return result;
  };

  return (
    <Swiper
      navigation={true}
      freeMode={true}
      loop={true}
      modules={[Navigation, Pagination, Autoplay]}
      style={{ width: "100%" }}
      pagination={{ clickable: true }}
      // autoplay={{
      //   delay: 6000,
      //   disableOnInteraction: false,
      // }}
    >
      {items?.map((element, index) => {
        return (
          <SwiperSlide key={index}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100vw",
                height: "75vh",
                cursor: "pointer",
              }}
            >
              {getFormat(element?.src) === "MP4" ? (
                <video
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                  src={element?.src}
                  autoPlay
                  muted
                  playsInline
                  loop
                />
              ) : (
                <img
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: element?.objectPosition
                      ? element?.objectPosition
                      : "none",
                  }}
                  src={element?.src}
                  alt="foto"
                />
              )}
            </Box>
          </SwiperSlide>
        );
      })}
      <Box className="pagination" />
    </Swiper>
  );
};

export default Carousel;
