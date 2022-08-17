import React, { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Swipeable from "react-swipeable";
import { Box, Typography } from "@mui/material";
import { CardContainer } from "./Styles";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function Carousel() {
  const [position, positionSet] = useState(0);

  const slides = [0, 2, 3, 4];
  const transition = { duration: 0.25, ease: "easeInOut" };

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

  const venturesVariants = {
    initial: { y: 100, opacity: 0 },
    enter: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.75, ease: "easeInOut" },
    },
    exit: {
      y: -100,
      opacity: 0,
      transition: { duration: 0.75, ease: "easeInOut" },
    },
  };

  // const handleSwipe = ({ dir }) => {
  //   if (dir === "Right") {
  //     if (position < slides.length - 1) {
  //       positionSet(position + 1);
  //     }
  //   }
  //   if (dir === "Left") {
  //     if (position > 0) {
  //       positionSet(position - 1);
  //     }
  //   }
  // };

  const difference = (num1: number, num2: number): number => {
    const result = Math.abs(num1 - num2);
    console.log(result);
    return result;
  };

  return (
    <Box
      sx={{
        display: "flex",
        position: "relative",
        justifyContent: "space-between",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        cursor: "pointer",
        backgroundColor: "#ffffff",
        transform: "rotate(90deg)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "12.5px",
          border: "1px solid #e0e0e0",
          backgroundColor: "#ffffff",
          cursor: "pointer",
          borderRadius: "10px",
          textAlign: "center",
          zIndex: 10,
          margin: "0 25px",
          transform: "rotate(180deg)",
        }}
        onClick={onLeft}
        component="span"
      >
        <ArrowForwardIosIcon sx={{ fontSize: "18px", color: "#212121" }} />
      </Box>

      <AnimatePresence>
        <motion.div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
          }}
          initial="initial"
          animate="enter"
          exit="exit"
          layout
          variants={venturesVariants}
        >
          {slides?.map((url, index) => {
            return difference(position, index) > 1 ? null : (
              <motion.div
                layout
                style={CardContainer}
                key={index}
                initial={{
                  scale: 1 - 0.25 * difference(position, index),
                }}
                animate={{
                  scale: 1 - 0.25 * difference(position, index),
                  zIndex:
                    index === position
                      ? 100
                      : 1 - 0.4 * difference(position, index),
                  opacity:
                    index === position
                      ? 1
                      : 1 - 0.4 * difference(position, index),
                  transition,
                }}
                onClick={() => positionSet(index)}
              >
                <img
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    borderRadius: "10px",
                  }}
                  src="https://res.cloudinary.com/gregomartocci/image/upload/v1657429977/kaiotnao9msk80taw1lw.jpg"
                  alt="title"
                />

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      textAlign: "center",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "20px 0 0 0",
                      fontSize: "12px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: "24px",
                        fontWeight: 600
                      }}
                    >
                      Ostent Tower
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      textAlign: "center",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "20px 10px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: "14px",
                      }}
                    >
                      Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
                      ipsum Lorem ipsum
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      textAlign: "center",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "10px 0",
                      borderTop: "1px solid #eeeeee",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: "12px",
                        fontWeight: "500",
                      }}
                    >
                      Ver más
                    </Typography>
                  </Box>
                </Box>
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
          padding: "12.5px",
          textAlign: "center",
          border: "1px solid #e0e0e0",
          backgroundColor: "#ffffff",
          cursor: "pointer",
          borderRadius: "10px",
          margin: "0 25px",
          zIndex: 10,
        }}
        component="span"
        onClick={onRight}
      >
        <ArrowForwardIosIcon sx={{ fontSize: "18px", color: "#212121" }} />
      </Box>
    </Box>
  );
}

export default Carousel;