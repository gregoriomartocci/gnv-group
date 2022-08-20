import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { CounterBlock } from "./Styles";
import dynamic from "next/dynamic";

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
        display: "grid",
        gridTemplateColumns: "repeat(5,1fr)",
        padding: "0 10%",
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
                }}
              >
                <DynamicCounter
                  from={0}
                  to={element?.number}
                  duration={2}
                  counterRef={countersRef}
                />
              </Typography>
              <Typography
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: `${counterSize}px`,
                  margin: "0 0 0 15px 0",
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
