import React, { useState } from "react";
import { Box } from "@mui/material";
import Main from "../../components/Main";
import Ventures from "./components/Ventures";
import Menu from "../../components/Menu";
import HeaderTitle from "../../components/Header-Title";
import Footer from "../../components/Footer";
import { motion, useAnimation } from "framer-motion";
import SearchBar from "../../components/Search-Bar";
import { useDispatch, useSelector } from "react-redux";
import {
  setFilter,
  setProject,
  setProjects,
} from "../../redux/slices/projects";
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
    refetchOnWindowFocus: false,
    onSuccess: (data) => {
      dispatch(setProjects(data));
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
        mode="static"
        img="https://res.cloudinary.com/gregomartocci/image/upload/v1664797467/s887xt4eocicdqnfr9m7.jpg"
        height="100vh"
        headerTitle="Emprendimientos"
        buttonLink="/home/#contact"
        textFontSize={{ xs: "25px", md: "32px" }}
      />

      {/* HEADER TITLE */}

      <motion.div
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: true, amount: 0.5 }}
        variants={FadeFromBottom}
      ></motion.div>

      <Box
        sx={{ padding: { xs: "35px 15% 20px 15%", md: "100px 20% 20px 20%" } }}
      >
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
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: { xs: "space-between", sm: "flex-start" },
          padding: { xs: "10px 10% 25px 10%", md: "" },
          width: "100%",
        }}
      >
        <Box sx={{ margin: { xs: "7.5px 0", sm: "" } }}>
          <Dropdown
            items={status}
            placeholder="Estado"
            width={{ xs: "100%", sm: "250px" }}
            action={filterVenturesStatus}
          />
        </Box>
        <Box sx={{ margin: { xs: "7.5px 0", sm: "0 20px 0 0" } }}>
          <Dropdown
            items={type}
            placeholder="Tipo"
            width={{ xs: "100%", sm: "250px" }}
            action={filterVenturesTypes}
          />
        </Box>
      </Box>

      {/* FILTER VENTURES */}

      <Box sx={{ padding: "10px 10% 0 10%" }}>
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
