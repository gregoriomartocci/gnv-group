import React, { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import Menu, { IState } from "../../components/Menu";

import Footer from "../../components/Footer";
import Slider from "./components/Slider";
import HeaderTitle from "../../components/Header-Title";
import { useDispatch, useSelector } from "react-redux";
import { useMutation, useQueryClient } from "react-query";
import { ReadProject } from "../../api/ventures";
import { setProject } from "../../redux/slices/projects";

const Venture = () => {
  const state = useSelector((state: IState) => state?.projects);
  const { project } = state;
  const dispatch = useDispatch();

  const queryClient = useQueryClient();

  const { mutateAsync: getProjectMutation, isLoading: deleteLoading } =
    useMutation(ReadProject, {
      onSuccess: (data) => {
        queryClient.invalidateQueries("projects");
        console.log(data);
        dispatch(setProject(data));
      },
      onError: (data) => {
        console.log(data);
      },
    });

  useEffect(() => {
    getProjectMutation();
  }, []);

  return (
    <Box>
      {project ? (
        <Box
          sx={{
            width: "100vw",
            height: "100vh",
          }}
        >
          <Menu onScroll />
          <Box sx={{ padding: "150px 10%", width: "100%" }}>
            <HeaderTitle titleFontSize="38px" title={project?.name ?? ""} />
          </Box>
          <Slider items={project ? project?.images : []} />
          <Box sx={{ display: "flex", padding: "0 10%" }}>
            <Typography>{project?.description ?? ""}</Typography>
          </Box>
          <Footer />
        </Box>
      ) : null}
    </Box>
  );
};

export default Venture;
