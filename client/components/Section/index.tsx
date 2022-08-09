import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

import {
  ColumnLeft,
  ColumRight,
  Container,
  Reverse,
  SectionStyle,
} from "./Styles";

export interface ISectionProps {
  heading: string;
  image: string;
  reverse?: boolean;
}

const duration = 2

const FadeFromRight = {
  offscreen: { x: 50, opacity: 0, transition: { duration } },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: { duration },
  },
};

const FadeFromLeft = {
  offscreen: { x: -50, opacity: 0, transition: { duration } },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: { duration },
  },
};

const Section = ({ heading, image, reverse }: ISectionProps) => {
  return (
    <Box sx={SectionStyle}>
      <Box sx={reverse ? Reverse : Container}>
        <motion.div
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{ once: false, amount: 0.25 }}
          variants={FadeFromLeft}
        >
          <Box sx={ColumnLeft}>
            <Typography
              sx={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 400,
                fontSize: "30px",
              }}
            >
              {heading}
            </Typography>
          </Box>
        </motion.div>

        <motion.div
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{ once: false, amount: 0 }}
          variants={FadeFromRight}
        >
          <Box sx={ColumRight}>
            <img src={image} alt="home" />
          </Box>
        </motion.div>
      </Box>
    </Box>
  );
};

export default Section;
