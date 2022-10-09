import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, Pagination } from "swiper";
import { Box, Typography } from "@mui/material";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import useWindowDimensions from "../../../../hooks/ScreenSize";

// import required modules

export const CarouselB = ({ items }) => {
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
      modules={[Navigation,  Pagination]}
      style={{ width: "100%" }}
      pagination={{ clickable: true }}
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
                height: "80vh",
              }}
            >
              <Typography
                sx={{
                  position: "absolute",
                  padding: { xs: "0 50px", md: "0 10%" },
                  fontSize: { xs: "24px", md: "38px" },
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
                  opacity: "0.45",
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
      <Box className="pagination" />
    </Swiper>
  );
};
