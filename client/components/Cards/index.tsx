import React, { Fragment } from "react";
import { Box } from "@mui/material";
import Card from "../Card";
import { ProjectsContainer } from "./Styles";
import { IProject } from "../../redux/slices/projects";
import { IArticle } from "../../redux/slices/articles";

export interface IProjects {
  items: IProject[] | IArticle[] | IDemo[];
  component: any;
}

const Cards = ({ items, component }: IProjects) => {
  return (
    <Box sx={ProjectsContainer}>
      {items?.map((item, index: number) => (
        <Card key={index}>{component(item)}</Card>
      ))}
    </Box>
  );
};

export default Cards;
