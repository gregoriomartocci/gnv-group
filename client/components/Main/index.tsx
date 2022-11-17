import { StaticImageData } from "next/image";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import { Alert, Box, Typography } from "@mui/material";
import {
  ArrowButton,
  ArrowButtonActive,
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
import UseButton from "../Button";
import Link from "next/link";
import { sanitize } from "../Article";
import LoadingScreen from "../LoadingScreen/Index";

export interface ISlide {
  title: string;
  price: string;
  path: string;
  label: string;
  image: StaticImageData;
  alt: string;
}

export interface ISlidesProps {
  slides?: any;
  mode: "slider" | "static";
  img?: string;
  phrase?: string;
  buttonLink?: string;
  imageOnly?: boolean;
  frame?: boolean;
  headerTitle?: string;
  flip?: boolean;
  fontColor?: string;
  textFontSize?: string;
  height?: string;
  objectPosition?: string;
}

const Main = ({
  slides,
  mode,
  img,
  imageOnly,
  headerTitle,
  frame,
  buttonLink,
  flip,
  phrase,
  textFontSize,
  objectPosition,
  fontColor,
  height,
}: ISlidesProps) => {
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

  const setSlide = (index: number) => {
    timeout.current && clearTimeout(timeout.current);
    setCurrent(index);
  };

  const getFormat = (file: string) => {
    const result = file?.split(".").pop()?.toUpperCase();
    return result;
  };

  return (
    <Box
      sx={{
        height: height ? height : "100vh",
        width: "100%",
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#000",
      }}
    >
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
          slides?.map(({ src, phrase }, index) => {
            return (
              <Box sx={MainSlide} key={index}>
                {index === current && (
                  <Box sx={MainSlider}>
                    <Box sx={MainImage}>
                      {getFormat(src) === "MP4" ? (
                        <video
                          src={src}
                          preload={"auto"}
                          autoPlay
                          playsInline
                          loop
                          muted
                        />
                      ) : (
                        <img
                          src={src}
                          alt={""}
                          loading="lazy"
                          style={{ position: "absolute" }}
                        />
                      )}
                    </Box>
                    {!imageOnly ? (
                      <Box sx={MainContent}>
                        <Typography
                          sx={{
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: textFontSize,
                            fontWeight: 500,
                            textAlign: "left",
                            marginBottom: "45px",
                          }}
                        >
                          {phrase}
                        </Typography>
                        <Box style={{ width: "150px" }}>
                          <UseButton
                            type={"Primary"}
                            padding={{ xs: "15px 30px", md: "10px 20px" }}
                          >
                            <Typography
                              sx={{
                                fontSize: { xs: "14px", md: "16px" },
                              }}
                            >
                              Contactanos
                            </Typography>
                          </UseButton>
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
                {getFormat(img ?? "") === "MP4" ? (
                  <video src={img} autoPlay playsInline loop muted />
                ) : (
                  <img
                    src={img ?? ""}
                    alt=""
                    loading="lazy"
                    style={{
                      position: "absolute",
                      transform: flip && "scaleX(-1)",
                      objectPosition,
                    }}
                  />
                )}
                {!imageOnly ? (
                  <Box sx={MainContent}>
                    <Typography
                      sx={{ margin: "15px 0", fontWeight: 400 }}
                      style={{ color: fontColor ?? "" }}
                      fontSize={textFontSize}
                    >
                      {headerTitle ? sanitize(headerTitle) : ""}
                    </Typography>
                    <Link href={buttonLink ?? ""}>
                      <a>
                        <Box style={{ width: "150px" }}>
                          <UseButton
                            type={"Primary"}
                            padding={{ xs: "10px 20px", md: "12px 30px" }}
                          >
                            <Typography
                              sx={{
                                fontSize: { xs: "14px", md: "16px" },
                              }}
                            >
                              Contactanos
                            </Typography>
                          </UseButton>
                        </Box>
                      </a>
                    </Link>
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
