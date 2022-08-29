import React from "react";
import { Box } from "@mui/material";
import Cards from "../../../../components/Cards";
import GalleryItem from "./Components/Gallery-Item";
import { SwiperSlide } from "swiper/react";
import Carousel from "../../../../components/Carousel";

const ArtGallery = ({ gallery }) => {
  console.log(gallery, "Gallery");

  return (
    <Carousel slidesPerView={4} delay={2000}>
      {gallery?.length
        ? gallery?.map((item: any, index: number) => (
            <SwiperSlide>
              <GalleryItem key={item.title + index} {...item} />
            </SwiperSlide>
          ))
        : null}
    </Carousel>
  );
};

export default ArtGallery;
