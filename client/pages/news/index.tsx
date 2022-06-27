import React from "react";
import { Box } from "@mui/material";
import Main from "../../components/Main";
import { projectsData, SliderData } from "../../data/SliderData";
import Ventures from "./components/Ventures";
import Menu from "../../components/Menu";
import HeaderTitle from "../../components/Header-Title";
import Footer from "../../components/Footer";
import Carousel from "../../components/Carousel";
import Cards from "../../components/Cards";
import UseButton from "../../components/Button";
import Article, { ICard } from "../../components/Article";
import { SwiperSlide } from "swiper/react";
import Card from "../../components/Card";

const News = () => {
  return (
    <Box>
      <Menu onScroll={false} />
      <Box sx={{ margin: "40px 0" }}>
        <HeaderTitle title="Noticias destacadas" />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          aligntContent: "center",
          padding: "0 10%",
          maxHeight: "400px",
        }}
      >
        <Carousel>
          {SliderData?.map((project: any, index: number) => (
            <SwiperSlide>
              <Box>
                <Article key={project.title + index} {...project} />
              </Box>
            </SwiperSlide>
          ))}
        </Carousel>
      </Box>
      <HeaderTitle title="Todas las noticias" />
      <Box sx={{ padding: "0 5%" }}>
        <Cards projects={projectsData}></Cards>
      </Box>
      <Box
        sx={{
          display: "flex",
          padding: "5% 0",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <UseButton type="Primary">Ver Mas</UseButton>
      </Box>
      <Footer></Footer>
    </Box>
  );
};

export default News;
