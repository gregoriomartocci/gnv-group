import React, { Fragment } from "react";
import { Box, SxProps, Theme } from "@mui/material";
import Card from "../Card";
import { IProject } from "../../redux/slices/projects";
import { IArticle } from "../../redux/slices/articles";

export interface IProjects {
  items: IProject[] | IArticle[] | IDemo[];
  component: any;
  gap: number;
  columns: number;
}

const Cards = ({ items, component, gap, columns }: IProjects) => {
  const ProjectsContainer: SxProps<Theme> = {
    display: "grid",
    gridTemplateColumns: `repeat(${columns}, auto)`,
    gap,
    backgroundColor: "#fff",
    fontFamily: "Poppins",
    overflow: "hidden",
  };

  return (
    <Box sx={ProjectsContainer}>
      {items?.map((item, index: number) => (
        <Card key={index}>{component(item)}</Card>
      ))}
    </Box>
  );
};

export default Cards;
