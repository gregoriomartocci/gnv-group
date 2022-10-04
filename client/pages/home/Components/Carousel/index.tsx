import { Fragment, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import { Box, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import useWindowDimensions from "../../../../hooks/ScreenSize";
import { SxProps, Theme } from "@mui/material";

const swipeConfidenceThreshold = 10000;

const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

type TUseCarousel = {
  items: any[];
  slideTime?: number;
};

const UseCarousel = ({ items, slideTime }: TUseCarousel) => {
  const [[page, direction], setPage] = useState([0, 0]);
  const { height, width } = useWindowDimensions();

  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? width : width ? -width : 0,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => {
      return {
        zIndex: 1,
        x: direction < 0 ? width : width ? -width : 0,
      };
    },
  };

  const imageIndex = wrap(0, items?.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const getFormat = (file: string) => {
    const result = file?.split(".").pop()?.toUpperCase();
    return result;
  };

  return (
    <Fragment>
      {items?.length ? (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            width: "100vw",
            height: "100vh",
            zIndex: 1,
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "#212121",
              zIndex: 15,
              pointerEvents: "none",
              opacity: "0.60",
            }}
          ></Box>
          {getFormat(items[imageIndex]?.src) === "MP4" ? (
            <AnimatePresence initial={false} custom={direction}>
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
              >
                <motion.video
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                  autoPlay
                  loop
                  muted
                  key={page}
                  src={items[imageIndex]?.src}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={1}
                  onDragEnd={(e, { offset, velocity }) => {
                    const swipe = swipePower(offset.x, velocity.x);
                    if (swipe < -swipeConfidenceThreshold) {
                      paginate(1);
                    } else if (swipe > swipeConfidenceThreshold) {
                      paginate(-1);
                    }
                  }}
                />
              </Box>
            </AnimatePresence>
          ) : (
            <AnimatePresence initial={false} custom={direction}>
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
              >
                <motion.img
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                  key={page}
                  src={items[imageIndex].src}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={1}
                  onDragEnd={(e, { offset, velocity }) => {
                    const swipe = swipePower(offset.x, velocity.x);
                    if (swipe < -swipeConfidenceThreshold) {
                      paginate(1);
                    } else if (swipe > swipeConfidenceThreshold) {
                      paginate(-1);
                    }
                  }}
                />
              </Box>
            </AnimatePresence>
          )}
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              zIndex: 20,
              padding: "0% 10%",
              minHeight: "100vh",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                left: { xs: "25px", md: "50px" },
                cursor: "pointer",
              }}
              component="span"
              onClick={() => paginate(-1)}
            >
              <ArrowBackIosIcon sx={{ color: "#fff", fontSize: "30px" }} />
            </Box>
            <Box sx={{ marginBottom: "10px", padding: "0 45px" }}>
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: { xs: "28px", md: "38px" },
                  fontWeight: 500,
                  textAlign: "center",
                  color: "#fff",
                }}
              >
                {items[imageIndex]?.phrase}
              </Typography>
            </Box>
            <Box
              sx={{
                position: "absolute",
                right: { xs: "25px", md: "50px" },
                cursor: "pointer",
              }}
              component="span"
              onClick={() => paginate(1)}
            >
              <ArrowForwardIosIcon sx={{ color: "#fff", fontSize: "30px" }} />
            </Box>
          </Box>
        </Box>
      ) : null}
    </Fragment>
  );
};

export default UseCarousel;
