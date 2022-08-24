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
  title?: any;
  paragraph: string;
  image: string;
  quote?: string;
  reverse?: boolean;
}

const duration = 2.5;

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

const Section = ({
  title,
  quote,
  paragraph,
  image,
  reverse,
}: ISectionProps) => {
  return (
    <Box sx={SectionStyle}>
      <Box sx={reverse ? Reverse : Container}>
        <Box>
          <motion.div
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: false, amount: 0.25 }}
            variants={FadeFromLeft}
          >
            <Box sx={ColumnLeft}>
              <Box sx={{ width: "100%", padding: "10px 0 " }}>
                {title ? title : ""}
              </Box>
              <Box sx={{ width: "100%", padding: "0 0 0 15px " }}>
                {quote ? (
                  <Typography
                    sx={{
                      fontFamily: "'Urbanist', sans-serif !important",
                      fontStyle: "regular",
                      fontWeight: 500,
                      textAlign: "left",
                      color: "#616161",
                      fontSize: "30px",
                      height: "100%",
                    }}
                  >
                    {quote}
                  </Typography>
                ) : (
                  ""
                )}
              </Box>
              <Box sx={{ width: "100%", padding: "10px 0 " }}>
                {paragraph ? (
                  <Typography
                    sx={{
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 500,
                      color: "4F4F4F",
                      fontSize: "18px",
                      height: "100%",
                    }}
                  >
                    {paragraph}
                  </Typography>
                ) : (
                  ""
                )}
              </Box>
            </Box>
          </motion.div>
        </Box>
        <Box>
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
    </Box>
  );
};

export default Section;
