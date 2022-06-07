import { StaticImageData } from "next/image";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import { Box } from "@mui/material";
import {
  ArrowButtons,
  MainContainer,
  MainContent,
  MainImage,
  MainSection,
  MainSlide,
  MainSlider,
  SliderButtons,
} from "./Styles";
import { useEffect, useRef, useState } from "react";
import { time } from "console";
import Button from "../Button";

export interface ISlide {
  title: string;
  price: string;
  path: string;
  label: string;
  image: StaticImageData;
  alt: string;
}

export interface ISlidesProps {
  slides: ISlide[];
}

const Main = ({ slides }: ISlidesProps) => {
  const [current, setCurrent] = useState(0);
  const lenght = slides.length;
  const timeout = useRef(0);
  const slideTime = 5000;

  useEffect(() => {
    const nextSlide = () => {
      setCurrent((current) => (current === lenght - 1 ? 0 : current + 1));
    };

    timeout.current = window.setTimeout(nextSlide, slideTime);

    return () => {
      timeout.current && clearTimeout(timeout.current);
    };
  }, [current, lenght]);

  const nextSlide = () => {
    timeout.current && clearTimeout(timeout.current);
    setCurrent(current === lenght - 1 ? 0 : current + 1);
    console.log(current);
  };

  const prevSlide = () => {
    timeout.current && clearTimeout(timeout.current);
    setCurrent(current === 0 ? lenght - 1 : current - 1);
    console.log(current);
  };

  return (
    <Box sx={MainSection}>
      <Box sx={MainContainer}>
        {slides?.map((slide, index) => {
          return (
            <Box sx={MainSlide} key={index}>
              {index === current && (
                <Box sx={MainSlider}>
                  <Box sx={MainImage}>
                    <img
                      src={slide?.image?.src}
                      alt={slide?.alt}
                      loading="lazy"
                      style={{ position: "absolute" }}
                    />
                  </Box>
                  <Box sx={MainContent}>
                    <h1>{slide?.title}</h1>
                    <p>{slide?.price}</p>
                    <Box style={{ width: "150px" }}>
                      <Button type={"Primary"}>View Home</Button>
                    </Box>
                  </Box>
                </Box>
              )}
            </Box>
          );
        }) ?? []}
        <Box sx={SliderButtons}>
          <ArrowCircleLeftIcon onClick={prevSlide} sx={ArrowButtons} />
          <ArrowCircleRightIcon onClick={nextSlide} sx={ArrowButtons} />
        </Box>
      </Box>
    </Box>
  );
};

export default Main;
