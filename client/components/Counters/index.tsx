import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { CounterBlock } from "./Styles";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import useWindowDimensions from "../../hooks/ScreenSize";

const DynamicCounter = dynamic(() => import("./Dynamic-Counter"), {
  ssr: false,
});

export type ICounterElement = {
  number: number;
  unity?: string;
  description: string;
};

export type ICounter = {
  data: ICounterElement[];
  counterSize?: number;
  countersRef: boolean;
};

const Counters = ({ data, counterSize, countersRef }: ICounter) => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        justifyContent: "center",
        alignItems: "flex-start",
      }}
    >
      {data?.map((element, index) => {
        return (
          <Box
            sx={CounterBlock}
            style={
              index !== data?.length - 1
                ? { borderRight: "2.5px solid#eeeeee" }
                : {}
            }
            key={index}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: counterSize,
                  width: "max-content",
                }}
              >
                <DynamicCounter
                  from={0}
                  to={element?.number}
                  duration={2}
                  counterFontSize={counterSize}
                  counterRef={countersRef}
                />
              </Typography>
              <Typography
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: counterSize,
                  margin: "0 0 0 5px",
                }}
              >
                {element?.unity}
              </Typography>
            </Box>
            <Typography
              sx={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: "18px",
                minWidth: "200px",
              }}
            >
              {element.description}
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
};

export default Counters;
