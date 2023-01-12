import React from "react";
import { Box } from "@mui/material";
import Cards from "../../../../components/Cards";
import GalleryItem from "./Components/Gallery-Item";
import { SwiperSlide } from "swiper/react";
import Carousel from "../../../../components/Carousel";

const ArtGallery = ({ gallery }) => {

  const breakpoints = {
    0: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 1,
    },
    700: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
    1500: {
      slidesPerView: 4,
    },
  };

  return (
    <Carousel slidesPerView={4} delay={2500} breakpoints={breakpoints}>
      {gallery?.length
        ? gallery?.map((item: any, index: number) => (
            <SwiperSlide key={index}>
              <GalleryItem key={item.title + index} {...item} />
            </SwiperSlide>
          ))
        : null}
    </Carousel>
  );
};

export default ArtGallery;
