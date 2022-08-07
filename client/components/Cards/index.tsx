import React, { Fragment } from "react";
import { Box, SxProps, Theme } from "@mui/material";
import { IProject } from "../../redux/slices/projects";
import { IArticle } from "../../redux/slices/articles";
import { motion, AnimatePresence } from "framer-motion";

export interface IProjects {
  items: IProject[] | IArticle[] | IDemo[];
  component: any;
}

const Cards = ({ items, component }: IProjects) => {
  return (
    <AnimatePresence>
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        {items?.map((item, index: number) => {
          return <Box key={index}>{component(item)}</Box>;
        })}
      </Box>
    </AnimatePresence>
  );
};

export default Cards;
