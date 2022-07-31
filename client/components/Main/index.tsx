import { StaticImageData } from "next/image";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import { Alert, Box } from "@mui/material";
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
import { setAuth } from "../../redux/slices/auth";
import { useDispatch } from "react-redux";
import { IProject } from "../../redux/slices/projects";

export interface ISlide {
  title: string;
  price: string;
  path: string;
  label: string;
  image: StaticImageData;
  alt: string;
}

export interface ISlidesProps {
  slides?: StaticImageData[];
  mode: "slider" | "static";
  img?: string;
}

const Main = ({ slides, mode, img }: ISlidesProps) => {
  const [current, setCurrent] = useState<number>(0);
  const lenght = slides?.length;
  const timeout = useRef(0);
  const slideTime = 8000;

  const dispatch = useDispatch();

  useEffect(() => {
    const auth = localStorage.getItem("auth");
    if (auth) {
      const parse = JSON.parse(auth);
      dispatch(setAuth({ ...parse }));
    }
  }, []);

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
  };

  const prevSlide = () => {
    timeout.current && clearTimeout(timeout.current);
    setCurrent(current === 0 ? lenght - 1 : current - 1);
  };

  return (
    <Box sx={MainSection}>
      <Box sx={MainContainer}>
        {mode === "slider" ? (
          slides?.map((slide, index) => {
            return (
              <Box sx={MainSlide} key={index}>
                {index === current && (
                  <Box sx={MainSlider}>
                    <Box sx={MainImage}>
                      <img
                        src={slide?.src}
                        alt={""}
                        loading="lazy"
                        style={{ position: "absolute" }}
                      />
                    </Box>
                    <Box sx={MainContent}>
                      <Box style={{ width: "150px" }}>
                        <Button type={"Primary"}>Contactanos</Button>
                      </Box>
                    </Box>
                  </Box>
                )}

                <Box sx={SliderButtons}>
                  <ArrowCircleLeftIcon onClick={prevSlide} sx={ArrowButtons} />
                  <ArrowCircleRightIcon onClick={nextSlide} sx={ArrowButtons} />
                </Box>
              </Box>
            );
          }) ?? []
        ) : mode === "static" ? (
          <Box sx={MainSection}>
            <Box sx={MainContainer}>
              <Box sx={MainImage}>
                <img
                  src={img}
                  alt=""
                  loading="lazy"
                  style={{ position: "absolute" }}
                />
                <Box sx={MainContent}>
                  <Box style={{ width: "150px" }}>
                    <Button type={"Primary"}>Contactanos</Button>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        ) : null}
      </Box>
    </Box>
  );
};

export default Main;
