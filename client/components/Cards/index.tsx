import React, { Fragment } from "react";
import { Box } from "@mui/material";
import  Card, { ICard } from "../Card";
import { ProjectsContainer } from "./Styles";

export interface ICards {
  projects: ICard[];
}

const Cards = ({ projects }: ICards) => {
  return (
    <Box sx={ProjectsContainer}>
      {projects?.map((project: ICard, index: number) => (
        <Card key={project.title + index} {...project} />
      ))}
    </Box>
  );
};

export default Cards;
