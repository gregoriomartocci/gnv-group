import React, { useEffect } from "react";
import { Box, Skeleton, Typography } from "@mui/material";
import Menu, { IState } from "../../components/Menu";
import Footer from "../../components/Footer";
import Slider from "./components/Slider";
import HeaderTitle from "../../components/Header-Title";
import { useDispatch, useSelector } from "react-redux";
import { useMutation, useQueryClient } from "react-query";
import { ReadProject } from "../../api/ventures";
import { setProject } from "../../redux/slices/projects";
import { useRouter } from "next/router";
import { sanitize } from "../company";

const Venture = () => {
  const router = useRouter();
  const ventureId = router?.query?.venture;
  const state = useSelector((state: IState) => state?.projects);
  const { project } = state;
  const dispatch = useDispatch();

  const queryClient = useQueryClient();

  const { mutateAsync: getProjectMutation, isLoading: getProjectLoading } =
    useMutation(ReadProject, {
      onSuccess: (data) => {
        queryClient.invalidateQueries("projects");
        console.log(data, "el emprendimiento");
        dispatch(setProject(data));
      },
      onError: (data) => {
        console.log(data);
      },
    });

  useEffect(() => {
    getProjectMutation(ventureId);
  }, [ventureId]);

  return (
    <Box>
      {ventureId ? (
        <Box
          sx={{
            width: "100vw",
            height: "100vh",
          }}
        >
          <Menu onScroll />
          <Box sx={{ padding: "150px 0 0 0 ", width: "100%" }}>
            <HeaderTitle
              titleFontSize="50px"
              fontWeight={700}
              title={project?.name ?? ""}
              description={
                (project?.description && sanitize(project?.description)) ?? ""
              }
              descriptionFontSize="25px"
            />
          </Box>
          <Slider items={project ? project?.images : []} />
          {/* <Box sx={{ display: "flex", padding: "0 10%" }}>
            <Typography sx={{ fontSize: "26px" }}>
              {(project?.description && sanitize(project?.description)) ?? ""}
            </Typography>
          </Box> */}
          <Footer />
        </Box>
      ) : null}
    </Box>
  );
};

export default Venture;
