import React, { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Swipeable from "react-swipeable";
import { Box, Typography } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { SxProps, Theme } from "@mui/material";
import useWindowDimensions from "../../../../../../hooks/ScreenSize";

type ICarousel = {
  items: any[];
  year: string;
};

function Carousel({ items, year }: ICarousel) {
  const [position, positionSet] = useState(0);
  const { height, width } = useWindowDimensions();

  const xs = width ? width < 600 : false;
  const sm = width ? width < 700 : false;
  const md = width ? width > 1024 : false;

  const onlyOneItem = items?.length === 1;

  const CardContainer = {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    width: xs ? "225px" : sm ? "250px" : "375px",
    backgroundColor: "#fff",
    borderRadius: "15px",
    cursor: "pointer",
    fontFamily: "'Poppins', sans-serif",
    fontSize: "20px",
    boxShadow: "rgba(0, 0, 0, 0.15) 0px 3px 8px",
    padding: "10px",
    margin: sm ? "-75px" : "-95px",
  };

  const slides = [0, 2, 3, 4];
  const transition = { duration: 0.25, ease: "easeInOut" };

  const onRight = () => {
    const total = items?.length - 1;
    if (position < total && position + 1 !== undefined) {
      positionSet(position + 1);
    }
  };

  const onLeft = () => {
    if (position > 0 && position - 1 !== undefined) {
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

  const difference = (num1: number, num2: number): number => {
    const result = Math.abs(num1 - num2);
    console.log(result);
    return result;
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          padding: { xs: "50px 0 0 0", md: "" },
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "28px", md: "35px" },
            color: "#bdbdbd",
            fontWeight: 700,
          }}
        >
          {year}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          position: "relative",
          justifyContent: "space-between",
          alignItems: "center",
          height: "100%",
          width: { xs: "", md: "900px" },
          minHeight: { xs: "550px", md: "700px" },
          minWidth: { xs: "100%", md: "800px" },
          cursor: "pointer",
          backgroundColor: "#ffffff",
        }}
      >
        {!onlyOneItem ? (
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
              zIndex: 1000,
              width: "50px",
              height: "50px",
              margin: {
                xs: "0 10px",
                sm: "0 15px",
                md: "0 50px",
              },
              transform: "rotate(180deg)",
            }}
            onClick={onLeft}
            component="span"
          >
            <ArrowForwardIosIcon sx={{ fontSize: "18px", color: "#212121" }} />
          </Box>
        ) : null}

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
            {items?.map(({ title, description, img, date }, index) => {
              return difference(position, index) > 1 ? null : (
                <motion.div
                  layout
                  style={CardContainer}
                  key={index}
                  initial={{
                    scale: 1 - 0.25 * difference(position, index),
                  }}
                  animate={{
                    scale: 1 - 0.45 * difference(position, index),
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
                  {img && img !== "" ? (
                    <img
                      style={{
                        objectFit: "cover",
                        width: "100%",
                        height: "100%",
                        minHeight: md ? "350px" : "250px",
                        borderRadius: "10px",
                        maxHeight: xs ? "300px" : "400px",
                        objectPosition:"center 0%"
                      }}
                      src={img}
                      alt="title"
                    />
                  ) : null}
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "0 15px",
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
                          fontSize: { xs: "20px", md: "24px" },
                          fontWeight: 600,
                        }}
                      >
                        {title}
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
                          fontSize: { xs: "16px", md: "18px" },
                        }}
                      >
                        {description}
                      </Typography>
                    </Box>
                  </Box>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {!onlyOneItem ? (
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
              zIndex: 1000,
              width: "50px",
              height: "50px",
              margin: {
                xs: "0 10px",
                sm: "0 15px",
                md: "0 50px",
              },
            }}
            component="span"
            onClick={onRight}
          >
            <ArrowForwardIosIcon sx={{ fontSize: "18px", color: "#212121" }} />
          </Box>
        ) : null}
      </Box>
    </Box>
  );
}

export default Carousel;
