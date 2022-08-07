import React, { Fragment } from "react";
import { Box, SxProps, Theme } from "@mui/material";
import { IProject } from "../../redux/slices/projects";
import { IArticle } from "../../redux/slices/articles";
import { AnimatePresence, motion } from "framer-motion";

export interface IProjects {
  items: IProject[] | IArticle[] | IDemo[];
  component: any;
  gap: number;
  columns: number;
}

const Cards = ({ items, component}: IProjects) => {
  
  return (
    <motion.div layout>
      <AnimatePresence>
        {items?.map((item, index: number) => (
          <Box key={index}>{component(item)}</Box>
        ))}
      </AnimatePresence>
    </motion.div>
  );
};

export default Cards;
