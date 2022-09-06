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
import Dropdown from "./components/Dropdown";
import OutsideAlerter from "../../hooks/ClickListener";

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
  const [active, setActive] = useState(false);

  const [status, setStatus] = useState([
    "todos",
    "en desarrollo",
    "finalizado",
  ]);



  const [type, setType] = useState(["todos", "en construccion", "proyecto en desarrollo" , "residencial" , "corporativo" , "hoteleria" , "urbanizacion" ]);

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
      const filtered = projects?.filter((p: IProject) =>
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
          p="7.5% 7.5% 5% 7.5%"
          titleFontSize="40px"
          descriptionFontSize="22px"
          title="Emprendimientos"
          description="Tres generaciones dedicadas al desarrollo de proyectos emblemáticos, que redefinen los entornos urbanos y desafían la arquitectura y el diseño, con altos estándares de sustentabilidad y confort."
        />
      </motion.div>

      <Box sx={{ padding: "25px 15% 35px 15%" }}>
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
          padding: "45px 10%",
        }}
      >
        {/* <SelectorB
          selectOptions={statusOptions}
          input={input}
          setInput={setInput}
          filterVentures={filterVentures}
          width="250px"
        /> */}
        <Box sx={{ display: "flex" }}>
          <Box sx={{ margin: "0 20px 0 0" }}>
            <Dropdown
              items={status}
              placeholder="estado"
              width="250px"
              action={filterVentures}
            />
          </Box>
          <Box>
            <Dropdown
              items={type}
              placeholder="tipo"
              width="250px"
              action={filterVentures}
            />
          </Box>
        </Box>
      </Box>

      <Box sx={{ padding: "10px 10% 0 10%" }}>
        <Ventures />
      </Box>
      <Footer />
    </Box>
  );
};

export default VenturesLayout;
