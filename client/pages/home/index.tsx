import { Fragment, useEffect, useRef, useState } from "react";
import React from "react";
import Main from "../../components/Main";
import Menu, { IState } from "../../components/Menu";
import Box from "@mui/material/Box";
import { SliderData } from "../../data/SliderData";
import Section from "../../components/Section";
import Footer from "../../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import HeaderTitle from "../../components/Header-Title";
import Card from "./Components/Card";
import Cards from "../../components/Cards";
import Quote from "../../components/Quote";
import { setState, setTemplates } from "../../redux/slices/templates";
import api from "../../hooks/Api";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Counters from "../../components/Counters";
import UseCarousel from "./Components/Carousel";
import Logo from "../../components/Logo";
import { useJsApiLoader, GoogleMap } from "@react-google-maps/api";
import dynamic from "next/dynamic";
import InputGroup from "../../components/Input";
import Form from "./Components/Form";
import UseButton from "../../components/Button";
import UseTabs from "../../components/Tabs";
import useWindowDimensions from "../../hooks/ScreenSize";

export type TDemo = {
  img: string;
  title: string;
  link: string;
};

const Home = () => {
  const state = useSelector((state: IState) => state?.templates);
  const [value, setValue] = useState({});
  const dispatch = useDispatch();
  const [countersVisible, setCountersVisible] = useState(false);
  const [tab, setTab] = useState<number>(0);
  const tabsOptions = ["GNV en Argentina", "GNV en Uruguay"];

  const google_api = typeof window && process.env.NEXT_MAPS;
  const google_center = { lat: 48.8584, lng: 2.2945 };

  const CountersRef = useRef(null);
  const containerRef = useRef(null);

  const { height, width } = useWindowDimensions();
  const sm = width && width < 900;

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: google_api as string,
  });

  console.log(countersVisible, "OKkkk???");

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setCountersVisible(entry.isIntersecting);
    });
    observer.observe(CountersRef?.current);
  }, []);

  const array_operations = (action, array, item) => {
    let update;

    if (!array || !action || !item) return;

    action === "create"
      ? (update = [...array, item])
      : action === "templates"
      ? (update = [...item])
      : action === "update"
      ? (update = array?.map((p) =>
          p?._id?.toString() === item?._id?.toString() ? item : p
        ))
      : action === "delete"
      ? (update = array.filter(
          (p) => p?._id.toString() !== item?._id.toString()
        ))
      : update;

    return update;
  };

  const stateHandler = ({ method, payload, state, keep }) => {
    const update_state = {
      ...state,
      [method]: keep ? { ...state[method], ...payload } : payload,
    };
    dispatch(setState(update_state));
  };

  // REQUEST
  const request = async (action, method, input, id, path, message) => {
    // if (!action || !method || !input || !id || !path || !message) return;

    stateHandler({
      method: action,
      payload: { status: "", message: "", loading: true },
      state,
      keep: true,
    });
    try {
      const data = await api({
        method,
        path: `/${path}/${id}`,
        payload: input,
      });

      stateHandler({
        method: action,
        payload: { loading: false },
        state,
        keep: true,
      });

      const { error } = data;
      console.log(error, "<== mensaje error");

      if (error) {
        stateHandler({
          method: action,
          payload: { status: "failed", message: error },
          state,
          keep: true,
        });
      } else {
        const updated_array = array_operations(action, state, data);

        let payload;

        action === "delete"
          ? (payload = {
              status: "success",
              message,
              modal: false,
            })
          : (payload = {
              status: "success",
              message,
              modal: false,
            });

        stateHandler({
          method: action,
          payload,
          state,
          keep: true,
        });

        dispatch(setTemplates(updated_array));
      }
    } catch (err) {
      stateHandler({
        method: action,
        payload: {
          status: "failed",
          message: "Algo salió mal, intente nuevamente!",
          loading: false,
        },
        state,
        keep: true,
      });
    }
  };

  useEffect(() => {
    request("templates", "get", {}, "", "templates", "");
  }, []);

  const data = [
    { number: 771190, description: "m² desarrollados" },
    { number: 107000, unity: "m²", description: "de inversión" },
    { number: 21, unity: "ha", description: "urbanizados" },
    {
      number: 40000,
      unity: "m²",
      description: "corporativos World Trade Center",
    },
    { number: 17, description: "centros comerciales desarrollados" },
  ];

  const items = [
    {
      img: "https://res.cloudinary.com/gregomartocci/image/upload/v1657430588/owperet7603w21sgbf7w.jpg",
      title: "WTC Buenos Aires I, II, III IV",
      link: "https://wtcbuenosaires.com.ar/",
    },
    {
      img: "https://res.cloudinary.com/gregomartocci/image/upload/v1661433982/e0sxsbscnn7wsjy7ixup.jpg",
      title: "Ostent Tower",
      link: "https://ostentower.com/",
    },
    {
      img: "https://res.cloudinary.com/gregomartocci/image/upload/v1657426798/jefizhrvbp3zxcpgbbay.jpg",
      title: "Harbour Tower",
      link: "https://www.harbourtower.com.ar/",
    },
    {
      img: "https://res.cloudinary.com/gregomartocci/image/upload/v1657430355/g7yz4ndlvgjjqvtidfa6.jpg",
      title: "The Shops",
      link: "/venture",
    },
  ];

  const FadeFromBottom = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: { duration: 1.5 },
    },
  };

  const slides = [
    {
      src: "https://res.cloudinary.com/gregomartocci/video/upload/v1661381763/qt7lymuixtepvnoufb9j.mp4",
      phrase:
        "Buscamos redefinir la visión de la construcción y otorgarle personalidad a los desarrollos. Creamos espacios versátiles con detalles y diseño en todos sus ángulos",
    },
    {
      src: "https://res.cloudinary.com/gregomartocci/image/upload/v1661395987/qfqy8bva2otewp8wxkwu.jpg",
      phrase:
        "Generar emociones y cumplir con los estándares sofisticados de nuestros clientes.  Combinamos locaciones extraordinarias con construcción high-end",
    },
    {
      src: "https://res.cloudinary.com/gregomartocci/image/upload/v1657426798/jefizhrvbp3zxcpgbbay.jpg",
      phrase:
        "Cada proyecto nuestro tiene la cualidad de ser único, singular e irrepetible.  Pretendemos lograr esculturas a gran escala que marquen hitos de diseño urbano",
    },
  ];

  return (
    <Box sx={{ overflow: "hidden" }}>
      <Menu onScroll color="#fff" />
      <Main
        slides={slides}
        mode="static"
        img="https://res.cloudinary.com/gregomartocci/video/upload/v1661059464/xftkbgfkccyncmuq6rrv.mp4"
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100vw",
          minHeight: "100vh",
          padding: "7.5%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            padding: "5% 0",
          }}
        >
          <motion.div
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: false, amount: 0 }}
            variants={FadeFromBottom}
          >
            <HeaderTitle
              P={{ md: "0 10%" }}
              titleFontSize={{ xs: "25px", md: "28px" }}
              fontWeight={500}
              title="Abarcamos todas las aristas del mercado inmobiliario.  Desarrollamos, construimos y comercializamos a través de cuatro segmentos: urbanización, edificios residenciales,  torres corporativas y locales comerciales. "
            />
          </motion.div>
        </Box>
        <Box
          sx={{
            display: "flex",
            width: { xs: "200px", md: "200px", lg: "100%" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "none", md: "center" },
              width: "100%",
              height: "100%",
              padding: "0 10%",
            }}
            ref={CountersRef}
          >
            <motion.div
              dragConstraints={CountersRef}
              initial={"offscreen"}
              whileInView={"onscreen"}
              viewport={{ once: false, amount: 0 }}
              drag={sm ? "x" : false}
              animate={!sm ? { x: 0 } : false}
            >
              <Counters
                data={data}
                counterSize={35}
                countersRef={countersVisible}
              />
            </motion.div>
          </Box>
        </Box>
      </Box>
      <Box sx={{ position: "relative", minHeight: "100vh", width: "100vw" }}>
        <Cards
          gap={""}
          gridTemplateColumns={{
            xs: `1fr`,
            sm: "1fr",
            md: `repeat(2, auto)`,
            lg: `repeat(2, auto)`,
            xl: `repeat(2, auto)`,
          }}
          gridTemplateRows={{
            xs: `1fr`,
            sm: "1fr",
            md: `auto`,
            lg: "auto",
            xl: "auto",
          }}
          items={items}
          component={(item: TDemo) => <Card {...item} />}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          minHeight: "100vh",
          width: "100%",
          padding: "5%",
        }}
      >
        <Section
          quote={`"Hagamos lo que hagamos, esta es nuestra filosofía: construir pensando en el futuro, sin olvidarnos de nuestra rica historia"`}
          image={
            "https://res.cloudinary.com/gregomartocci/image/upload/v1658965044/vlsdhy1hikzlz1g39zoz.jpg"
          }
          title="Alejandro Ginevra, Presidente de GNV Group."
          reverse
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          position: "relative",
          width: "100vw",
          minHeight: "100vh",
        }}
      >
        <UseCarousel items={slides} slideTime={5000} />
      </Box>

      {/* Contact */}

      <Box
        id="contact"
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          minHeight: "100vh",
          width: "100%",
          padding: "10%",
        }}
      >
        <HeaderTitle
          p="20px 0"
          titleFontSize="38px"
          fontWeight={600}
          title="Contacto"
          description="Envianos tu consulta"
          descriptionFontSize="20px"
        />

        <Box sx={{ width: "100%", padding: "0 10%" }}>
          <Form value={value} setValue={setValue} />
          <Box sx={{ width: "100%", margin: "20px 0 0 0 " }}>
            <UseButton type="Primary" width="100%">
              ENVIAR
            </UseButton>
          </Box>
        </Box>
      </Box>

      {/* Maps */}

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          height: "100%",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            height: "100%",
            width: "100%",
            padding: "180px 10% 130px 10%",
          }}
        >
          <UseTabs
            value={tab}
            setValue={setTab}
            options={tabsOptions}
            p="35px"
            width="100%"
            fontSize="34px"
            fontWeight={600}
            color="#212121"
          />

          {/* <HeaderTitle
            p="5%"
            titleFontSize="34px"
            descriptionFontSize="20px"
            title="GNV en Argentina"
          />
          <HeaderTitle
            p="5%"
            titleFontSize="34px"
            descriptionFontSize="20px"
            title="GNV en Uruguay"
          /> */}
        </Box>

        {/* GOOGLE MAPS */}

        <Box
          sx={{
            display: "flex",
            width: "100%",
            height: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
              height: "100%",
            }}
          >
            {/* GOOGLE MAPS */}
            <Box
              sx={{
                display: "flex",
                width: "100%",
                height: "600px",
              }}
            >
              {isLoaded && (
                <GoogleMap
                  center={google_center}
                  zoom={15}
                  mapContainerStyle={{ width: "100%", height: "100%" }}
                ></GoogleMap>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Home;
