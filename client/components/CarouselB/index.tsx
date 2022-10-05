import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper";
import { Box, Typography } from "@mui/material";
import "swiper/css";
import "swiper/css/navigation";

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
      modules={[Navigation, Thumbs]}
      style={{ width: "100%" }}
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
                width: "100vw",
                height: "100vh",
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
