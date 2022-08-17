import { Fragment, useEffect, useRef, useState } from "react";
import React from "react";
import Main from "../../components/Main";
import Menu, { IState } from "../../components/Menu";
import Box from "@mui/material/Box";
import { SliderData } from "../../data/SliderData";
import Section, { InfoDataOne, InfoDataTwo } from "../../components/Section";
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

export type TDemo = {
  img: string;
  title: string;
};

const Home = () => {
  const state = useSelector((state: IState) => state?.templates);
  const dispatch = useDispatch();
  const [countersVisible, setCountersVisible] = useState(false);
  const CountersRef = useRef();

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
    },
    {
      img: "https://res.cloudinary.com/gregomartocci/image/upload/v1657430588/owperet7603w21sgbf7w.jpg",
      title: "Ostent Tower",
    },
    {
      img: "https://res.cloudinary.com/gregomartocci/image/upload/v1657430588/owperet7603w21sgbf7w.jpg",
      title: "Harbour Tower",
    },
    {
      img: "https://res.cloudinary.com/gregomartocci/image/upload/v1657430588/owperet7603w21sgbf7w.jpg",
      title: "The Shops",
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

  return (
    <Box sx={{ overflow: "hidden" }}>
      <Menu onScroll />
      <Main
        mode="slider"
        slides={state?.templates[0]?.carousel}
        img={
          "https://res.cloudinary.com/gregomartocci/image/upload/v1657430151/bl6a6maqd6wmqsepcr5t.jpg"
        }
      />

      <Box sx={{ width: "100%", height: "100%", padding: "7.5% 0" }}>
        <motion.div
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{ once: false, amount: 0.5 }}
          variants={FadeFromBottom}
        >
          <HeaderTitle
            px="10%"
            py="10%"
            fontSize="28px"
            description="Abarcamos todas las aristas del mercado inmobiliario.  Desarrollamos, construimos y comercializamos a través de cuatro segmentos: urbanización, edificios residenciales,  torres corporativas y locales comerciales. "
          />
        </motion.div>
      </Box>

      <Box sx={{ width: "100%", padding: "5% 0 20% 0" }} ref={CountersRef}>
        <motion.div
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{ once: false, amount: 0.5 }}
          variants={FadeFromBottom}
        >
          <Counters
            data={data}
            counterSize={35}
            countersRef={countersVisible}
          />
          .
        </motion.div>
      </Box>

      <Box>
        <Cards
          gap={0}
          columns={2}
          items={items}
          component={(item: TDemo) => <Card {...item} />}
        ></Cards>
      </Box>

      <Box>
        <Quote
          img="https://res.cloudinary.com/gregomartocci/image/upload/v1658965044/vlsdhy1hikzlz1g39zoz.jpg"
          text="¨Hagamos lo que hagamos, esta es nuestra filosofía: construir pensando en el futuro, sin olvidarnos de nuestra rica historia.¨"
          author={{
            name: "Alejandro Ginevra",
            position: "Presidente de GNV Group",
          }}
        />
      </Box>

      <Box>
        <Section
          heading="Generar emociones y cumplir con los estándares sofisticados de nuestros clientes.  Combinamos locaciones extraordinarias con construcción high-end."
          image="https://res.cloudinary.com/gregomartocci/image/upload/v1657430355/g7yz4ndlvgjjqvtidfa6.jpg"
        />
      </Box>

      <Footer />
    </Box>
  );
};

export default Home;
