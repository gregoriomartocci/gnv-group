import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import Cards from "../../../../components/Cards";
import { useDispatch, useSelector } from "react-redux";
import { IState } from "../../../../components/Menu";
import api from "../../../../hooks/Api";
import {
  IProject,
  setFilter,
  setProjects,
} from "../../../../redux/slices/projects";
import { errorType } from "../../../profile/ventures";
import { IArticle } from "../../../../redux/slices/articles";

import Venture from "../Venture";
import UseMasonry from "../../../../components/Masonry";
import ventures_mock from "../../../../data/ventures_mock";

const Ventures = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState<boolean>(false);
  const state = useSelector((state: IState) => state?.projects);
  const { projects_filter, projects } = state;
  const [error, setError] = useState<errorType>({
    projects: "",
    message: "",
  });

  const [ventures, setVentures] = useState(ventures_mock);

  useEffect(() => {
    // getProjects();
    dispatch(setProjects(ventures_mock));
    dispatch(setFilter(ventures_mock));
  }, []);


  const filterVentures = () => {
    const filtered = projects_filter.filter((p) => p.status === "");
    dispatch(setFilter(filtered));
  };
  

  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1,
  };

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

  return (
    <UseMasonry
      items={projects_filter && projects_filter.length ? projects_filter : []}
      breakpoints={breakpoints}
      component={(item: IProject) => <Venture {...item} />}
    />
  );
};

export default Ventures;
