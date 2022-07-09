import React, { Fragment } from "react";
import { Box } from "@mui/material";
import  Card from "../Card";
import { ProjectsContainer } from "./Styles";
import { IProject } from "../../pages/profile/news";

export interface IProjects {
  projects: IProject[];
}

const Cards = ({ projects }: IProjects) => {
  return (
    <Box sx={ProjectsContainer}>
      {projects?.map((project: IProject, index: number) => (
        <Card key={project.name + index} {...project} />
      ))}
    </Box>
  );
};

export default Cards;
