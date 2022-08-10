import React, { useState } from "react";
import { motion } from "framer-motion";
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

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "15px",
          border: "1px solid #e0e0e0",
        }}
        component="span"
        onClick={onLeft}
      >
        <ArrowBackIosIcon />
      </Box>

      <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
        {slides?.map((url, index) => (
          <Box component="span" onClick={() => positionSet(index)}>
            <motion.div
              style={CardContainer}
              key={index}
              initial={{ scale: 0 }}
              animate={{
                rotate: 0,
                left: `${(index - position) * 70 - 30}px`,
                scale: index === position ? 1 : 0.8,
                zIndex: 5 - index ,
              }}
              transition={{
                stiffness: 260,
                damping: 20,
              }}
            >
              <img
                src="https://res.cloudinary.com/gregomartocci/image/upload/v1657429977/kaiotnao9msk80taw1lw.jpg"
                alt="title"
              ></img>
              <Typography>{index}</Typography>
            </motion.div>
          </Box>
        ))}
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "15px",
          border: "1px solid #e0e0e0",
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
