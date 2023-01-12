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
    return result;
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        overflowX: "hidden",
        height: { xs: "300px", md: "600px" },
        padding: { xs: "0", sm: "0 5%" },
        margin: { xs: "7.5% 25px", md: "50px 0" },

        position: "relative",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "12.5px",
          cursor: "pointer",
          borderRadius: "10px",
          textAlign: "center",
          zIndex: 1000,
          border: { xs: "", md: "1px solid #e0e0e0" },
          backgroundColor: { xs: "", md: "#fff" },
          margin: { xs: "", md: "0 25px" },
          transform: "rotate(180deg)",
          color: { xs: "#fff", md: "#000" },
          fontSize: { xs: "12px", md: "13px" },
        }}
        onClick={onLeft}
        component="span"
      >
        <ArrowForwardIosIcon />
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
              <Box
                sx={{
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onClick={() => setPosition(key)}
                key={key}
              >
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
                      height: "100%",
                      width: "70%",
                      objectFit: "cover",
                      objectPosition: "top left",
                      margin: "0 -700px",
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
          cursor: "pointer",
          borderRadius: "10px",
          textAlign: "center",
          zIndex: 1000,
          border: { xs: "", md: "1px solid #e0e0e0" },
          backgroundColor: { xs: "", md: "#fff" },
          margin: { xs: "", md: "0 25px" },
          color: { xs: "#fff", md: "#000" },
          fontSize: { xs: "12px", md: "18px" },
        }}
        onClick={onRight}
        component="span"
      >
        <ArrowForwardIosIcon />
      </Box>
    </Box>
  );
};

export default Slider;
