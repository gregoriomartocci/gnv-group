import { StaticImageData } from "next/image";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import { Box } from "@mui/material";
import { MainContainer, MainSection, SliderButtons } from "./Styles";

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
            <Box sx={{}} key={index}>
              <Box sx={{}}>
                <Box sx={{}}>
                  <h1>{slide.title}</h1>
                  <p>{slide.price}</p>

                  {/* <Button to={{slide.path}}></Button> */}
                </Box>
              </Box >
            </Box>
          );
        })}
        <Box sx={SliderButtons}>
          <ArrowCircleLeftIcon />
          <ArrowCircleRightIcon />
        </Box>
      </Box >
    </Box>
  );
};

export default Main;
