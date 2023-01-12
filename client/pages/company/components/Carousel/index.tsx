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

const CarouselB = ({ items }) => {
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
                position: "absolute",
                top: 0,
                left: 0,
                width: "100vw",
                height: "80vh",
              }}
            >
              <Typography
                sx={{
                  position: "absolute",
                  top: "45px",
                  padding: { xs: "0 50px", md: "0 10%" },
                  fontSize: { xs: "24px", md: "38px" },
                  lineHeight: { xs: "35px", md: "55px" },
                  fontWeight: "500",
                  color: "#fff",
                  zIndex: 20,
                  textAlign: "center",
                }}
              >
                {element?.phrase}
              </Typography>
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  height: "100%",
                  backgroundColor: "#212121",
                  zIndex: 15,
                  pointerEvents: "none",
                  opacity: "0.40",
                }}
              />

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

export default CarouselB;
