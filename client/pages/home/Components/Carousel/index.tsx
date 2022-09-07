import { Fragment, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import { Box, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import useWindowDimensions from "../../../../hooks/ScreenSize";
import { SxProps, Theme } from "@mui/material";

const HeaderTitle: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  fontFamily: "'Poppins', sans-serif",
  fontSize: "38px",
  fontWeight: 400,
  textAlign: "center",
  color: "#fff",
};

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

  // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
  // then wrap that within 0-2 to find our image ID in the array below. By passing an
  // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
  // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
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
            position: "relative",
            width: "100%",
            height: "100%",
            zIndex: 1,
          }}
        >
          {getFormat(items[imageIndex]?.src) === "MP4" ? (
            <AnimatePresence initial={false} custom={direction}>
              <motion.video
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  cursor: "pointer",
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
            </AnimatePresence>
          ) : (
            <AnimatePresence initial={false} custom={direction}>
              <motion.img
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  cursor: "pointer",
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
            </AnimatePresence>
          )}

          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              zIndex: 1,
              padding: "0% 10%",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                left: "50px",
                zIndex: 1,
                cursor: "pointer",
              }}
              component="span"
              onClick={() => paginate(-1)}
            >
              <ArrowBackIosIcon sx={{ color: "#fff", fontSize: "30px" }} />
            </Box>
            <Box sx={{ marginBottom: "10px" }}>
              <Typography sx={HeaderTitle}>
                {items[imageIndex]?.phrase}
              </Typography>
            </Box>
            <Box
              sx={{
                position: "absolute",
                right: "50px",
                zIndex: 1,
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
