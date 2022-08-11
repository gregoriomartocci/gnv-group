import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Swipeable from "react-swipeable";
import { Box, Typography } from "@mui/material";
import { CardContainer } from "./Styles";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function Carousel() {
  const [position, positionSet] = useState(0);

  const slides = [0, 2, 3, 4];

  const onRight = () => {
    if (position < slides?.length - 1) {
      positionSet(position + 1);
    }
  };

  const onLeft = () => {
    if (position > 0) {
      positionSet(position - 1);
    }
  };

  const handleSwipe = ({ dir }) => {
    if (dir === "Right") {
      if (position < slides.length - 1) {
        positionSet(position + 1);
      }
    }
    if (dir === "Left") {
      if (position > 0) {
        positionSet(position - 1);
      }
    }
  };

  const difference = (num1: number, num2: number): number => {
    const result = Math.abs(num1 - num2);
    console.log(result);
    return result;
  };

  const transition = { duration: 0, ease: "easeInOut" };

  const venturesVariants = {
    initial: { y: 25, opacity: 0 },
    enter: { y: 0, opacity: 1, transition },
    exit: { y: -25, opacity: 0, transition },
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        cursor: "pointer",
        backgroundColor: "#ffffff",
        borderRadius: "10px",
        padding: "15px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "15px",
          border: "1px solid #e0e0e0",
          backgroundColor: "#ffffff",
          cursor: "pointer",
          borderRadius: "10px",
          zIndex: 10,
        }}
        onClick={onLeft}
        component="span"
      >
        <ArrowBackIosIcon />
      </Box>

      <AnimatePresence>
        <motion.div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            padding: "0 30px",
            width: "100%",
            height: "100%",
          }}
          initial="initial"
          animate="enter"
          exit="exit"
          variants={venturesVariants}
        >
          {slides?.map((url, index) => {
            return difference(position, index) > 1 ? null : (
              <motion.div
                layout
                style={CardContainer}
                key={index}
                initial={{ opacity: difference(position, index) > 1 ? 0 : 1 }}
                animate={{
                  rotate: 0,
                  left: `${(index - position) * 1.5}%`,
                  scale:
                    index === position
                      ? 1.3
                      : `0.${9 - difference(position, index)} `,
                  zIndex: 5 - difference(position, index),
                  opacity: difference(position, index) > 1 ? 0 : 1,
                }}
                exit="exit"
                variants={venturesVariants}
                onClick={() => positionSet(index)}
              >
                <img
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    borderRadius: "15px",
                  }}
                  src="https://res.cloudinary.com/gregomartocci/image/upload/v1657429977/kaiotnao9msk80taw1lw.jpg"
                  alt="title"
                />

                <Typography></Typography>
                <Typography>Lorem Ipsum</Typography>
                <Typography>Ver más</Typography>
              </motion.div>
            );
          })}
        </motion.div>
      </AnimatePresence>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "15px",
          border: "1px solid #e0e0e0",
          backgroundColor: "#ffffff",
          cursor: "pointer",
          borderRadius: "10px",
          zIndex: 10,
        }}
        component="span"
        onClick={onRight}
      >
        <ArrowForwardIosIcon />
      </Box>
    </Box>
  );
}

export default Carousel;
