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

const duration = 1.75;

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
        <Box sx={{ width: "100%" }}>
          <motion.div
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: false, amount: 0.25 }}
            variants={reverse ? FadeFromRight : FadeFromLeft}
          >
            <Box sx={ColumnLeft}>
              {title ? (
                <Box
                  sx={{
                    width: "100%",
                    padding: {
                      xs: "25px 0 0 0",
                      sm: "25px 0 0 0",
                      md: "25px 0 0 0",
                      lg: "",
                      xl: "",
                    },
                  }}
                >
                  {title}
                </Box>
              ) : (
                ""
              )}

              {quote ? (
                <Box
                  sx={{
                    width: "100%",
                  }}
                >
                  <Typography
                    sx={{
                      fontStyle: "italic",
                      fontWeight: 600,
                      color: "#616161",
                      fontSize: {
                        xs: "32px",
                        sm: "32px",
                        md: "30px",
                        lg: "30px",
                        xl: "30px",
                      },
                      height: "100%",
                    }}
                  >
                    {quote}
                  </Typography>
                </Box>
              ) : (
                ""
              )}

              {paragraph ? (
                <Box sx={{ width: "100%", padding: "10px 0 " }}>
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
                </Box>
              ) : (
                ""
              )}
            </Box>
          </motion.div>
        </Box>
        <Box sx={{ width: "100%" }}>
          <motion.div
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: false, amount: 0 }}
            variants={reverse ? FadeFromLeft : FadeFromRight}
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
