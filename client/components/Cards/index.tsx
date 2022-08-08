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
  
  const transition = { duration: 1, ease: "easeInOut" };

  const venturesVariants = {
    initial: { y: 50, opacity: 0 },
    enter: { y: 0, opacity: 1, transition },
    exit: { y: -50, opacity: 0, transition },
  };

  return (
    <motion.div layout style={{ display: "flex", flexWrap: "wrap" }} >
      <AnimatePresence>
        {items?.map((item, index: number) => {
          return (
            <motion.div
              layout
              key={index}
              initial="initial"
              animate="enter"
              exit="exit"
              variants={venturesVariants}
            >
              {component(item)}
            </motion.div>
          );
        })}
      </AnimatePresence>
    </motion.div>
  );
};

export default Cards;
