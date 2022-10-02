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
import { setFilter, setProject } from "../../redux/slices/projects";
import Dropdown from "./components/Dropdown";
import OutsideAlerter from "../../hooks/ClickListener";
import { useQuery } from "react-query";
import { ReadProjects } from "../../api/ventures";

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
  const state = useSelector((state: any) => state?.projects);

  const { projectsFiltered, projects } = state;

  const [status, setStatus] = useState([
    "Todos",
    "Ejecutado",
    "En desarrollo",
    "Finalizado",
  ]);

  const [type, setType] = useState([
    "Todos",
    "Usos mixtos",
    "Residencial",
    "Corporativo",
    "Hoteleria",
    "Retail",
    "Urbanización",
    "Gastronomía y Lifestyle",
  ]);

  const [input, setInput] = useState({
    status: "",
    search: "",
  });

  const {
    isFetching: loading,
    isError,
    error,
    data: allProjects,
  } = useQuery("projects", ReadProjects, {
    onSuccess: (data) => {
      dispatch(setProject(data));
      dispatch(setFilter(data));
    },
  });

  const filterVenturesStatus = (name: String) => {
    if (name === "Todos") return dispatch(setFilter(projects));

    const filtered = projects.filter(
      (p: any) => String(p.status).toLowerCase() === String(name).toLowerCase()
    );
    return dispatch(setFilter(filtered));
  };

  const filterVenturesTypes = (name: String) => {
    if (name === "Todos") return dispatch(setFilter(projects));
    const filtered = projects.filter(
      (p: any) => String(p.type).toLowerCase() === String(name).toLowerCase()
    );
    return dispatch(setFilter(filtered));
  };

  const onChangeHandler = (value: string) => {
    if (value) {
      const filtered = projects?.filter((p: any) =>
        String(p.name.toLowerCase()).includes(value.toLowerCase())
      );
      return dispatch(setFilter(filtered));
    }
    return dispatch(setFilter(projects));
  };

  return (
    <Box>
      <Menu onScroll color="#fff" />

      {/* MAIN SECTION */}

      <Main
        slides={SliderData}
        mode="static"
        img="https://res.cloudinary.com/gregomartocci/image/upload/v1660741258/pacagjb8rm2kk6mex1em.png"
        imageOnly
      />

      {/* HEADER TITLE */}

      <motion.div
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: true, amount: 0.5 }}
        variants={FadeFromBottom}
      >
        <HeaderTitle
          p={{ xs: "25% 10% 10% 10%", md: "10% 20% 5% 20%" }}
          titleFontSize={{ xs: "25px", md: "40px" }}
          fontWeight={600}
          descriptionFontSize={{ xs: "18px", md: "25px" }}
          title="Emprendimientos"
          description="Tres generaciones dedicadas al desarrollo de proyectos emblemáticos, que redefinen los entornos urbanos y desafían la arquitectura y el diseño, con altos estándares de sustentabilidad y confort."
        />
      </motion.div>

      <Box sx={{ padding: "25px 12.5% 35px 12.5%" }}>
        <SearchBar
          onChange={onChangeHandler}
          value={input}
          setValue={setInput}
        />
      </Box>

      {/* FILTER VENTURES */}

      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          width: "100%",
          padding: { xs: "10px 10% 25px 10%", sm: "45px 10% 70px 10%" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: { xs: "space-between", sm: "flex-start" },
            width: "100%",
          }}
        >
          <Box sx={{ margin: { xs: "7.5px 0", sm: "0 20px 0 0" } }}>
            <Dropdown
              items={status}
              placeholder="estado"
              width={{ xs: "100%", sm: "250px" }}
              action={filterVenturesStatus}
            />
          </Box>
          <Box sx={{ margin: { xs: "7.5px 0", sm: "0 20px 0 0" } }}>
            <Dropdown
              items={type}
              placeholder="tipo"
              width={{ xs: "100%", sm: "250px" }}
              action={filterVenturesTypes}
            />
          </Box>
        </Box>
      </Box>

      {/* FILTER VENTURES */}

      <Box sx={{ padding: "10px 7.5% 0 7.55%" }}>
        <Ventures
          items={projectsFiltered ?? []}
          loading={loading}
          error={error}
        />
      </Box>
      <Footer />
    </Box>
  );
};

export default VenturesLayout;
