import { Box } from "@mui/system";
import React, { useState } from "react";
import { motion } from "framer-motion";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Slider = ({ items }: any) => {
  const [position, setPosition] = useState(0);

  const onRight = () => {
    const total = items?.length - 1;
    if (position < total && position + 1 !== undefined) {
      setPosition(position + 1);
    }
  };

  const onLeft = () => {
    if (position > 0 && position - 1 !== undefined) {
      setPosition(position - 1);
    }
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
        justifyContent: "space-between",
        alignItems: "center",
        overflowX: "hidden",
        height: "100%",
        padding: "5%",
        position: "relative",
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
          zIndex: 1000,
          margin: "0 25px",
          transform: "rotate(180deg)",
        }}
        onClick={onLeft}
        component="span"
      >
        <ArrowForwardIosIcon sx={{ fontSize: "18px", color: "#212121" }} />
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          position: "relative",
          width: "100%",
          height: "100%",
          top: 0,
        }}
      >
        {items &&
          items?.map(({ src, name }: any, key: number) => {
            return (
              <Box onClick={() => setPosition(key)}>
                <motion.div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    overflow: "hidden",
                    cursor: "pointer",
                  }}
                  key={key}
                  initial={{ scale: 0 }}
                  animate={{
                    rotate: 0,
                    left: `${(key - position) * 50}vw`,
                    scale: key === position ? 1 : 0.8,
                    zIndex:
                      key === position
                        ? 100
                        : 1 - 0.4 * difference(position, key),
                    opacity:
                      key === position
                        ? 1
                        : 1 - 0.4 * difference(position, key),
                  }}
                  transition={{
                    stiffness: 260,
                    damping: 20,
                  }}
                >
                  <img
                    style={{
                      display: "flex",
                      width: "100%",
                      height: "100vh",
                      objectFit: "cover",
                      objectPosition: "25% 0%",
                    }}
                    src={src}
                    alt={name}
                  />
                </motion.div>
              </Box>
            );
          })}
      </Box>

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
          margin: "0 25px",
        }}
        onClick={onRight}
        component="span"
      >
        <ArrowForwardIosIcon sx={{ fontSize: "18px", color: "#212121" }} />
      </Box>
    </Box>
  );
};

export default Slider;
