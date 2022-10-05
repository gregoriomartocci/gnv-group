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
import { sanitize } from "../Article";

export interface ISectionProps {
  title?: any;
  paragraph?: string;
  image: string;
  quote?: string;
  author?: string;
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
  author,
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
                      md: "0",
                    },
                  }}
                >
                  <Typography sx={{ fontSize: "15px" }}>{title}</Typography>
                </Box>
              ) : (
                ""
              )}

              {quote ? (
                <Box
                  sx={{
                    width: "100%",
                    padding: "0 0 0 8%",
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 500,
                      // fontStyle: "oblique",
                      color: "#212121",
                      textAlign: "left",
                      fontSize: {
                        xs: "32px",
                        md: "30px",
                      },
                      height: "100%",
                      lineHeight: "45px",
                    }}
                  >
                    {quote}
                  </Typography>
                </Box>
              ) : (
                ""
              )}

              {author ? (
                <Box
                  sx={{
                    width: "100%",
                  }}
                >
                  <Typography
                    sx={{
                      fontStyle: "regular",
                      fontWeight: 700,
                      color: "#757575",
                      margin: "20px 0 0 0",
                      fontSize: {
                        xs: "32px",
                        md: "20px",
                      },
                      height: "100%",
                    }}
                  >
                    {sanitize(author) ?? ""}
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
                      fontWeight: 400,
                      color: "4F4F4F",
                      fontSize: "24px",
                      textAlign: "left",
                      textAlignLast: "left",
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
