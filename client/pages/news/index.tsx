import React, { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import Menu, { IState } from "../../components/Menu";
import HeaderTitle from "../../components/Header-Title";
import Footer from "../../components/Footer";
import Carousel from "../../components/Carousel";
import Cards from "../../components/Cards";
import UseButton from "../../components/Button";
import Article from "../../components/Article";
import { SwiperSlide } from "swiper/react";
import { useDispatch, useSelector } from "react-redux";
import { errorType } from "../profile/news";
import api from "../../hooks/Api";
import { IArticle, setArticles } from "../../redux/slices/articles";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import parse from "html-react-parser";
import Link from "next/link";
import { SxProps, Theme } from "@mui/material";
import UseMasonry from "../../components/Masonry";
import news_mock from "../../data/news_mock";

const CardContainer: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#fff",
  cursor: "pointer",
  fontFamily: "'Poppins', sans-serif",
  fontSize: "20px",
  height: "100%",
  width: "100%",

  img: {
    objectFit: "cover",
    width: "100%",
    height: { xs: "250px", md: "300px" },
  },
};

export type TArticle = {
  id?: number;
  title: string;
  source: string;
  date: string;
  images: string[];
  description: string;
  published?: boolean;
  link: string;
};

export const santize = (string: string) => {
  const reactElement = parse(string);
  return reactElement;
};

export const sliceText = (text: any, limit: number) => {
  const string =
    text?.length && text?.length > limit
      ? text.toString().substring(0, limit) + "..."
      : text;
  return string;
};

const breakpoints = {
  default: 3,
  1100: 2,
  700: 1,
};

const ArticleCard = (article: TArticle) => {
  return (
    <Box>
      {article ? (
        <Box>
          <Link href={article?.link ? article?.link : ""}>
            <a target="_blank">
              <Box sx={CardContainer}>
                <img
                  src={article?.images ? article?.images[0] : ""}
                  alt={article?.title}
                />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    fontFamily: "'Poppins', sans-serif",
                    margin: { xs: "10px 0 0 0", md: "18px 0 0 0" },
                  }}
                >
                  <Typography
                    sx={{
                      color: "#212121",
                      fontWeight: 600,
                      fontSize: { xs: "16px", md: " 18px" },
                    }}
                  >
                    {article?.title}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  <Box
                    sx={{
                      color: "#4f4f4f",
                      fontWeight: 500,
                      fontSize: { xs: "12px", md: "14px" },
                      lineHeight: { xs: "18px", md: "20px" },
                      margin: { xs: "8px 0 0 0", md: "10px 0 0 0" },
                    }}
                  >
                    {santize(sliceText(article?.description, 150) ?? "")}
                  </Box>

                  <Box
                    style={{
                      display: "flex",
                      alignItems: "center",
                      color: "#424242",
                      fontWeight: 600,
                      fontSize: "14px",
                      margin: "7.5px 0 0 0",
                    }}
                  >
                    Ver Noticia
                    <KeyboardArrowRightIcon />
                  </Box>
                </Box>
              </Box>
            </a>
          </Link>
        </Box>
      ) : null}
    </Box>
  );
};

const News = () => {
  const dispatch = useDispatch();
  const state = useSelector((state: IState) => state?.articles);

  return (
    <Box>
      <Menu onScroll color="#212121" />
      <Box>
        <HeaderTitle
          titleFontSize={{ xs: "20px", md: "24px" }}
          fontWeight={600}
          p={{ xs: "110px 0 00", md: "120px 0 10px 0" }}
          title="Noticias destacadas"
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          aligntContent: "center",
          height: "100%",
          width: "100%",
        }}
      >
        <Carousel slidesPerView={1} delay={5000}>
          {news_mock && news_mock?.length
            ? news_mock?.map((article: TArticle, index: number) => (
                <SwiperSlide>
                  <Article {...article} />
                </SwiperSlide>
              ))
            : []}
        </Carousel>
      </Box>

      <HeaderTitle
       titleFontSize={{ xs: "20px", md: "24px" }}
        fontWeight={600}
        p={{ xs: "0 0 60px 0", md: "45px 0 80px 0px" }}
        title="Todas la noticias"
      />

      <Box sx={{ padding: "0 10%" }}>
        <Grid container rowSpacing={5} columnSpacing={5}>
          {news_mock
            ? news_mock?.map((item, i) => (
                <Grid item xs={12} md={6} xl={4}>
                  <ArticleCard {...item} />
                </Grid>
              ))
            : []}
        </Grid>
      </Box>

      {/* <Box
        sx={{
          display: "flex",
          padding: "50px 0 0 0",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <UseButton type="Primary">Ver Mas</UseButton>
      </Box> */}
      <Footer />
    </Box>
  );
};

export default News;
