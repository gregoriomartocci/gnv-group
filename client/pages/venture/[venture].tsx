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
import { Loader } from "../../hooks/Loader";

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
        dispatch(setProject(data));
      },
      onError: (data) => {},
    });

  useEffect(() => {
    getProjectMutation(ventureId);
  }, [ventureId]);

  return (
    <Box>
      <Loader delay={3000} />
      {ventureId ? (
        <Box
          sx={{
            width: "100vw",
            height: "100vh",
            maxHeight: "700px",
          }}
        >
          <Menu onScroll color="#212121" />
          <Box
            sx={{
              padding: { xs: "90px 0 0 0 ", md: "100px 0 0 0" },
              width: "100%",
            }}
          >
            <HeaderTitle
              titleFontSize={{ xs: "24px", md: "26px" }}
              fontWeight={600}
              title={project?.name ?? ""}
              p="0 10%"
              titleLineHeight="50px"
            />
          </Box>
          <Slider items={project ? project?.images : []} />

          <Box sx={{ display: "flex", padding: "0 10%" }}>
            <Typography
              sx={{
                fontSize: { xs: "16px", md: "18px" },
                textAlign: "left",
              }}
            >
              {(project?.description && sanitize(project?.description)) ?? ""}
            </Typography>
          </Box>
          <Footer />
        </Box>
      ) : null}
    </Box>
  );
};

export default Venture;
