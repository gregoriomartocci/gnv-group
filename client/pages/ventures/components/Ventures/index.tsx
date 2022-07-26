import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { projectsData } from "../../../../data/SliderData";
import SelectorB from "../../../../components/SelectorB";
import Cards from "../../../../components/Cards";
import { useDispatch, useSelector } from "react-redux";
import { IState } from "../../../../components/Menu";
import parse from "html-react-parser";
import api from "../../../../hooks/Api";
import {
  IProject,
  setFilter,
  setProjects,
} from "../../../../redux/slices/projects";
import { errorType } from "../../../profile/projects";
import { IArticle } from "../../../../redux/slices/articles";
import { CardBody, CardContainer, CardHeader } from "../../../../components/Card/Styles";

const VentureCard = ({ images, name, status, description }: any) => {
  const santize = (string: string) => {
    const reactElement = parse(string);
    return reactElement;
  };

  return (
    <Box sx={CardContainer}>
      <img src={images[0]?.src ?? ""} alt={name} />
      <Box sx={CardHeader}>
        <span
          style={{
            color: "#212121",
            fontWeight: 600,
            fontSize: "25px",
            margin: "15px 0",
          }}
        >
          {name}
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
          {santize(description ?? "")}
        </Box>

        <Box
          style={{
            display: "flex",
            alignItems: "center",
            color: "#424242",
            fontWeight: 600,
            fontSize: "12px",
            margin: "10px 0",
          }}
        >
          Ver Proyecto
          <KeyboardArrowRightIcon />
        </Box>
      </Box>
    </Box>
  );
};

const Ventures = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<errorType>({
    projects: "",
    message: "",
  });

  const getProjects = async () => {
    setError({ projects: "", message: "" });
    setLoading(true);
    try {
      const data = await api({
        method: "get",
        path: "/projects",
      });
      console.log("Dateushh", data);
      setLoading(false);
      if (data?.error) {
        setError({ projects: "failed", message: data?.error });
      } else {
        setError({ ...error, projects: "success" });
        dispatch(setProjects(data));
        dispatch(setFilter(data));
      }
    } catch (err) {
      setError({ projects: "failed", message: "Something went wrong" });
      setLoading(false);
    }
  };

  useEffect(() => {
    getProjects();
  }, []);

  const state = useSelector((state: IState) => state?.projects);
  const { projects_filter, projects } = state;

  const filterVentures = () => {
    const filtered = projects_filter.filter((p) => p.status === "");
    dispatch(setFilter(filtered));
  };

  return (
    <Box
      sx={{
        padding: "5% 10%",
      }}
    >
      <SelectorB />
      <Cards
        items={projects_filter}
        gap={3}
        columns={4}
        component={(item: IProject | IArticle) => <VentureCard {...item} />}
      ></Cards>
    </Box>
  );
};

export default Ventures;
