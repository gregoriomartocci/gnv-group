import { StaticImageData } from "next/image";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import { Box, ImageListItem } from "@mui/material";
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
  return (
    <Box sx={MainSection}>
      <Box sx={MainContainer}>
        {slides.map((slide, index) => {
          return (
            <Box sx={MainSlide} key={index}>
              <Box sx={MainSlider}>
                <Box sx={MainImage}>
                  <img
                    src={slide?.image?.src}
                    alt={slide.alt}
                    loading="lazy"
                    style={{ position: "absolute" }}
                  />
                </Box>

                <Box sx={MainContent}>
                  <h1>{slide.title}</h1>
                  <p>{slide.price}</p>

                  {/* <Button to={{slide.path}}></Button> */}
                </Box>
              </Box>
            </Box>
          );
        })}
        <Box sx={SliderButtons}>
          <ArrowCircleLeftIcon sx={ArrowButtons} />
          <ArrowCircleRightIcon sx={ArrowButtons} />
        </Box>
      </Box>
    </Box>
  );
};

export default Main;
