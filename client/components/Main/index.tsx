import { StaticImageData } from "next/image";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import { Alert, Box, Typography } from "@mui/material";
import {
  ArrowButton,
  ArrowButtonActive,
  ArrowButtons,
  HeaderTitle,
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
import Frame from "./Components/Frame";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import CircleIcon from "@mui/icons-material/Circle";

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
  imageOnly?: boolean;
  frame?: boolean;
  flip?: boolean;
}

const Main = ({ slides, mode, img, imageOnly, frame, flip }: ISlidesProps) => {
  const [current, setCurrent] = useState<number>(0);
  const lenght = slides?.length;
  const timeout = useRef(0);
  const slideTime = 15000;

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

  const setSlide = (index) => {
    timeout.current && clearTimeout(timeout.current);
    setCurrent(index);
  };

  const getFormat = (file) => {
    const result = file?.split(".").pop()?.toUpperCase();
    console.log(result, " RESULT");
    return result;
  };

  return (
    <Box sx={MainSection}>
      <Box sx={MainContainer}>
        <Box sx={SliderButtons}>
          {mode === "slider" &&
            slides?.map((slide, index) => {
              return index === current ? (
                <RadioButtonCheckedIcon
                  onClick={() => setSlide(index)}
                  sx={ArrowButtonActive}
                />
              ) : (
                <CircleIcon onClick={() => setSlide(index)} sx={ArrowButton} />
              );
            })}
          {/* <ArrowCircleRightIcon onClick={nextSlide} sx={ArrowButtons} /> */}
        </Box>

        {mode === "slider" ? (
          slides?.map((slide, index) => {
            return (
              <Box sx={MainSlide} key={index}>
                {index === current && (
                  <Box sx={MainSlider}>
                    <Box sx={MainImage}>
                      {getFormat(slide?.src) === "MP4" ? (
                        <video src={slide?.src} autoPlay loop muted/>
                      ) : (
                        <img
                          src={slide?.src}
                          alt={""}
                          loading="lazy"
                          style={{ position: "absolute" }}
                        />
                      )}
                    </Box>
                    {!imageOnly ? (
                      <Box sx={MainContent}>
                        <Typography sx={HeaderTitle}>
                          Proyectos distintivos con visión de futuro.
                        </Typography>
                        <Box style={{ width: "150px" }}>
                          <Button type={"Primary"}>Contactanos</Button>
                        </Box>
                      </Box>
                    ) : (
                      ""
                    )}
                  </Box>
                )}
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
                  style={
                    flip
                      ? { position: "absolute", transform: "scaleX(-1)" }
                      : { position: "absolute" }
                  }
                />
                {!imageOnly ? (
                  <Box sx={MainContent}>
                    <Typography sx={HeaderTitle}>
                      Proyectos distintivos con visión de futuro.
                    </Typography>
                    <Box style={{ width: "150px" }}>
                      <Button type={"Primary"}>Contactanos</Button>
                    </Box>
                  </Box>
                ) : (
                  ""
                )}
                {frame ? <Frame theme="light" width="100vw" /> : ""}
              </Box>
            </Box>
          </Box>
        ) : null}
      </Box>
    </Box>
  );
};

export default Main;
