import { StaticImageData } from "next/image";

import {
  Arrow,
  MainContainer,
  MainContent,
  MainImage,
  MainSection,
  MainSlide,
  MainSlider,
  NextArrow,
  PrevArrow,
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
    <MainSection>
      <MainContainer>
        {slides.map((slide, index) => {
          return (
            <MainSlide key={index}>
              <MainSlider>
                <MainImage />
                <MainContent>
                  <h1>{slide.title}</h1>
                  <p>{slide.price}</p>

                  {/* <Button to={{slide.path}}></Button> */}
                </MainContent>
              </MainSlider>
            </MainSlide>
          );
        })}
        <SliderButtons>
          <PrevArrow />
          <NextArrow />
        </SliderButtons>
      </MainContainer>
    </MainSection>
  );
};

export default Main;
