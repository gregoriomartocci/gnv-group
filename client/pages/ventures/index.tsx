import React, { useState } from "react";
import { Box } from "@mui/material";
import Main from "../../components/Main";
import { SliderData } from "../../data/SliderData";
import Ventures from "./components/Ventures";
import Menu from "../../components/Menu";
import HeaderTitle from "../../components/Header-Title";
import Footer from "../../components/Footer";
import { motion, useAnimation } from "framer-motion";
import SelectorB from "../../components/Selectors-B";
import SearchBar from "../../components/Search-Bar";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/slices/projects";

const FadeFromBottom = {
  offscreen: { y: 50, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { duration: 2 },
  },
};

const VenturesLayout = () => {
  const dispatch = useDispatch();
  const state = useSelector((state: IState) => state?.projects);
  const { projects_filter, projects } = state;

  const [statusOptions, setStatusOptions] = useState([
    "todos",
    "en desarrollo",
    "finalizado",
  ]);

  const [typeOptions, setTypeOptions] = useState(["comercial", "residencial"]);

  const [input, setInput] = useState({
    status: "",
    search: "",
  });

  const filterVentures = (name: String) => {
    if (name === "todos") return dispatch(setFilter(projects));
    const filtered = projects.filter(
      (p: IProject) =>
        String(p.status).toLowerCase() === String(name).toLowerCase()
    );
    return dispatch(setFilter(filtered));
  };

  const onChangeHandler = (value: string) => {
    if (value) {
      const filtered = projects.filter((p: IProject) =>
        String(p.name.toLowerCase()).includes(value.toLowerCase())
      );
      return dispatch(setFilter(filtered));
    }
    return dispatch(setFilter(projects));
  };

  return (
    <Box>
      <Menu onScroll color="#fff" />
      <Main
        slides={SliderData}
        mode="static"
        img="https://res.cloudinary.com/gregomartocci/image/upload/v1660741258/pacagjb8rm2kk6mex1em.png"
        imageOnly
      />

      <motion.div
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: false, amount: 0.5 }}
        variants={FadeFromBottom}
      >
        <HeaderTitle
          px="12.5%"
          py="7.5%"
          fontSize="22px"
          title="Emprendimientos"
          description="Tres generaciones dedicadas al desarrollo de proyectos emblemáticos, que redefinen los entornos urbanos y desafían la arquitectura y el diseño, con altos estándares de sustentabilidad y confort."
        />
      </motion.div>

      <Box sx={{ padding: "1% 15%" }}>
        <SearchBar
          onChange={onChangeHandler}
          value={input}
          setValue={setInput}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          width: "100%",
          padding: "1% 7.55%",
        }}
      >
        <SelectorB
          selectOptions={statusOptions}
          input={input}
          setInput={setInput}
          filterVentures={filterVentures}
          width="250px"
        />
        <Box sx={{ margin: "0 0 0 45px" }}>
          <SelectorB
            selectOptions={typeOptions}
            input={input}
            setInput={setInput}
            filterVentures={filterVentures}
            width="250px"
          />
        </Box>
      </Box>

      <Box sx={{ padding: "0 7.5%" }}>
        <Ventures />
      </Box>
      <Footer />
    </Box>
  );
};

export default VenturesLayout;
