import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

import { ColumRight, Container, Reverse, SectionStyle } from "./Styles";
import { sanitize } from "../Article";

export interface ISectionProps {
  title?: any;
  paragraph?: string;
  image?: string;
  quote?: string;
  author?: string;
  reverse?: boolean;
  paddingColumnLeft?: string;
  bodyTextPadding?: string;
  imageMaxWidth?: string;
  imageMaxHeight?: string;
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
  paddingColumnLeft,
  bodyTextPadding,
  imageMaxWidth,
  imageMaxHeight,
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
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                textAlign: "left",
                width: "100%",
                direction: "unset",
                padding: paddingColumnLeft,
                height: "100%",
              }}
            >
              {title ? (
                <Box
                  sx={{
                    width: "100%",
                    padding: {
                      xs: "15px 0 0 0",
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
                    color: "#000",
                    padding: {
                      xs: "25px 20px",
                      md: "25px 0px 0px 120px",
                    },
                  }}
                >
                  <Typography
                    sx={{
                      color: "#212121",
                      textAlign: "left",
                      width: "100%",
                      fontSize: {
                        xs: "14px",
                        sm: "17px",
                        md: "22px",
                      },
                      height: "100%",
                      lineHeight: {
                        xs: "25px",
                        md: "40px",
                      },
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
                <Box sx={{ width: "100%" }}>
                  <Typography
                    sx={{
                      padding: bodyTextPadding,
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 400,
                      maxWidth: "650px",
                      color: "4F4F4F",
                      fontSize: { xs: "14px", md: "17px" },
                      textAlign: "left",
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
        <Box sx={{ width: "100%", maxWidth: imageMaxWidth }}>
          <motion.div
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: false, amount: 0 }}
            variants={reverse ? FadeFromLeft : FadeFromRight}
          >
            <Box
              sx={{
                display: "flex",
                width: "100%",
                height: "100%",
                justifyContent: !reverse && "flex-end",

                img: {
                  width: "100%",
                  objectFit: "cover",
                },
              }}
            >
              <img
                style={{ maxHeight: imageMaxHeight }}
                src={image}
                alt="home"
              />
            </Box>
          </motion.div>
        </Box>
      </Box>
    </Box>
  );
};

export default Section;
