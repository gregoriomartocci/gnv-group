import React, { Fragment } from "react";
import { Box } from "@mui/material";
import Project, { IProject } from "../Project";
import { ProjectsContainer } from "./Styles";

export interface IProjects {
  projects: IProject[];
}

const Projects = ({ projects }: IProjects) => {
  console.log(projects, "PROJECTS");
  return (
    <Box sx={ProjectsContainer}>
      {projects?.map((project: IProject, index: number) => (
        <Project key={project.title + index} {...project} />
      ))}
    </Box>
  );
};

export default Projects;
