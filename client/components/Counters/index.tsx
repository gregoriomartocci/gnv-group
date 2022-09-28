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
        alignItems: "center",
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
                  fontSize: `${counterSize}px`,
                  width: "max-content",
                }}
              >
                <DynamicCounter
                  from={0}
                  to={element?.number}
                  duration={4}
                  counterRef={countersRef}
                />
              </Typography>
              <Typography
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: `${counterSize}px`,
                  margin: "0 0 0 5px",
                }}
              >
                {element?.unity}
              </Typography>
            </Box>
            <Typography
              sx={{ fontFamily: "'Poppins', sans-serif", fontSize: "18px" }}
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
