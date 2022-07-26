import React from "react";
import { Box, Typography } from "@mui/material";
import { CounterBlock } from "./Styles";

export type ICounterElement = {
  number: number;
  unity?: string;
  description: string;
};

export type ICounter = {
  data: ICounterElement[];
  counterSize?: number;
};

const Counter = ({ data, counterSize }: ICounter) => {
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
                ? { borderRight: "1px solid#bdbdbd" }
                : {}
            }
            key={index}
          >
            <Typography
              sx={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: `${counterSize}px`,
              }}
            >
              {element.number} {element?.unity}
            </Typography>
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

export default Counter;
