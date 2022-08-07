import React, { Fragment } from "react";
import { Box, SxProps, Theme } from "@mui/material";
import { IProject } from "../../redux/slices/projects";
import { IArticle } from "../../redux/slices/articles";
import { motion, AnimatePresence } from "framer-motion";

export interface IProjects {
  items: IProject[] | IArticle[] | IDemo[];
  component: any;
}

const transition = { duration: 0.5, ease: "easeInOut" };

const postVariants = {
  initial: { y: 100, opacity: 0 },
  enter: { y: 0, opacity: 1, transition },
  exit: { y: -100, opacity: 0, transition },
};

const Cards = ({ items, component }: IProjects) => {
  return (
    <motion.div layout style={{ display: "flex", flexWrap: "wrap" }}>
      <AnimatePresence>
        {items?.map((item, index: number) => {
          return <Box key={index}>{component(item)}</Box>;
        })}
      </AnimatePresence>
    </motion.div>
  );
};

export default Cards;
