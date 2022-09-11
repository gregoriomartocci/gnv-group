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
import { errorType } from "../../../profile/projects";
import { IArticle } from "../../../../redux/slices/articles";

import Venture from "../Venture";
import UseMasonry from "../../../../components/Masonry";

const Ventures = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<errorType>({
    projects: "",
    message: "",
  });

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
    <UseMasonry
      items={projects_filter}
      breakpoints={breakpoints}
      component={(item: IProject | IArticle) => <Venture {...item} />}
    />

    // <Cards
    //   items={projects_filter}
    //   component={(item: IProject | IArticle) => <Venture {...item} />}
    //   columns={3}
    //   gap="50px"
    // />
  );
};

export default Ventures;
