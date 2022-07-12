import React, { Fragment } from "react";
import { Box } from "@mui/material";
import  Card from "../Card";
import { ProjectsContainer } from "./Styles";

export interface IProjects {
  projects: IProject[] | IArticle[];
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
