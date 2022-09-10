import React, { Fragment } from "react";
import { Box, SxProps, Theme } from "@mui/material";
import { IProject } from "../../redux/slices/projects";
import { IArticle } from "../../redux/slices/articles";
import { motion, AnimatePresence } from "framer-motion";

export interface ICards {
  items: IProject[] | IArticle[] | IDemo[];
  component: any;
  columns: number;
  rows?: number;
  gap: string;
  gridTemplateColumns: any;
  gridTemplateRows: any;
}

const Cards = ({
  items,
  component,
  columns,
  rows,
  gap,
  gridTemplateColumns,
  gridTemplateRows,
}: ICards) => {
  const transition = { duration: 0.5, ease: "easeInOut" };

  const cardVariants = {
    initial: { y: 25, opacity: 0 },
    enter: { y: 0, opacity: 1, transition },
    exit: { y: -25, opacity: 0, transition },
  };

  return (
    <motion.div
      style={{
        display: "grid",
        gridTemplateColumns,
        gridTemplateRows,
        flexWrap: "wrap",
        gap,
      }}
    >
      <AnimatePresence>
        {items?.map((item, index: number) => (
          <motion.div
            key={index}
            initial="initial"
            animate="enter"
            exit="exit"
            variants={cardVariants}
          >
            {component(item)}
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
};

export default Cards;
