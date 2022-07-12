import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import Main from "../../components/Main";
import { projectsData, SliderData } from "../../data/SliderData";
import Ventures from "./components/Ventures";
import Menu, { IState } from "../../components/Menu";
import HeaderTitle from "../../components/Header-Title";
import Footer from "../../components/Footer";
import Carousel from "../../components/Carousel";
import Cards from "../../components/Cards";
import UseButton from "../../components/Button";
import Article, { ICard } from "../../components/Article";
import { SwiperSlide } from "swiper/react";
import Card from "../../components/Card";
import { useDispatch, useSelector } from "react-redux";
import { errorType } from "../profile/articles";
import api from "../../hooks/Api";
import { setArticles } from "../../redux/slices/articles";
import { CardBody, CardHeader } from "./Styles";

const ArticleCard = ({ images, title, source, date, status }: any) => {

  // const santize = (string: string) => {
  //   const reactElement = parse(string);
  //   return reactElement;
  // };

  return (
    <Box>
      <img src={images[0]?.src ?? ""} alt={title} />

      <Box sx={CardHeader}>
        <span
          style={{
            color: "#212121",
            fontWeight: 600,
            fontSize: "25px",
            margin: "15px 0",
          }}
        >
          {title}
        </span>
      </Box>

      <Box sx={CardBody}>
        <Box style={{ display: "flex", alignItems: "center" }}>
          <span
            style={{
              color: "#212121",
              fontWeight: 600,
              fontSize: "12px",
            }}
          >
            {status}
          </span>
        </Box>

        <Box
          style={{
            color: "#424242",
            fontWeight: 600,
            fontSize: "12px",
            margin: "10px 0",
          }}
        >
          {/* {santize(description ?? "")} */}
        </Box>

        <Box
          style={{
            color: "#424242",
            fontWeight: 600,
            fontSize: "12px",
            margin: "10px 0",
          }}
        >
          Ver Noticia
        </Box>
      </Box>
    </Box>
  );
};

const News = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<errorType>({ articles: "", message: "" });
  const state = useSelector((state: IState) => state?.articles);
  const { articles } = state;

  useEffect(() => {
    getArticles();
  }, []);

  const getArticles = async () => {
    setError({ articles: "", message: "" });
    setLoading(true);
    try {
      const data = await api({
        method: "get",
        path: "/articles",
      });
      console.log("Dateushh", data);
      setLoading(false);
      if (data?.error) {
        setError({ articles: "failed", message: data?.error });
      } else {
        setError({ ...error, articles: "success" });
        dispatch(setArticles(data));
      }
    } catch (err) {
      setError({ articles: "failed", message: "Something went wrong" });
      setLoading(false);
    }
  };

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
        <Cards
          items={articles}
          component={(item: IArticle) => <ArticleCard {...item} />}
        ></Cards>
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
