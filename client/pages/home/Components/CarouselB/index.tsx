import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { Box, Typography } from "@mui/material";
import "swiper/css";
import "swiper/css/navigation";
import styles from "../../../../styles/home.module.css";

// import required modules

export const CarouselB = ({ items }) => {
  const getFormat = (file: string) => {
    const result = file?.split(".").pop()?.toUpperCase();
    return result;
  };

  return (
    <Swiper
      navigation={true}
      freeMode={true}
      loop={true}
      modules={[Navigation]}

    >
      {items?.map((element) => {
        return (
          <SwiperSlide>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
            >
              <Typography
                sx={{
                  position: "absolute",
                  padding: "0 10%",
                  fontSize: "38px",
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
                  opacity: "0.50",
                }}
              />

              {getFormat(element?.src) === "MP4" ? (
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
                    width: "100vw",
                    height: "100vh",
                    objectFit: "cover",
                  }}
                  src={element?.src}
                  alt="foto"
                />
              )}
            </Box>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
