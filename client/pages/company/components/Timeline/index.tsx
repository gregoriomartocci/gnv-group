import React, { Fragment, useState } from "react";
import { Box, Typography } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

import { data } from "./Data";
import { CardContainer } from "./Styles";
import { HighQuality } from "@mui/icons-material";
import Carousel from "../Carousel";

const Timeline = () => {
  const [selected, setSelected] = useState<number>(0);

  const handleClick = (index: number) => {
    setSelected(index);
  };

  return (
    <Box
      sx={{
        transform: "rotate(-90deg)",
      }}
    >
      {data?.map(({ year, highlights }, index) => {
        return (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "100%",
            }}
          >
            {selected === index ? (
              <Box
                sx={{
                  position: "relative",
                  transform: "rotate(90deg)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  height: "100%",
                  padding: "18% 0",
                }}
              >
                <Carousel />
              </Box>
            ) : (
              <Box
                sx={{
                  display: "flex",
                  padding: "30px 25px",
                  width: "100%",
                  justifyContent: "space-between",
                  alignItems: "center",
                  cursor: "pointer",
                  borderTop: "1px solid #eeeeee",
                  borderBottom: "1px solid #eeeeee",
                  zIndex: 100,
                }}
                component="span"
                onClick={() => handleClick(index)}
              >
                <Box sx={{ color: "#BCBCBC" }}>
                  <FiberManualRecordIcon
                    sx={{ fontSize: "16px", color: "#e0e0e0" }}
                  />
                </Box>

                <Typography
                  sx={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 600,
                    fontSize: "20px",
                    color: "#bdbdbd",
                  }}
                >
                  {year}
                </Typography>

                <Box />
              </Box>
            )}
          </Box>
        );
      })}
    </Box>
  );
};

export default Timeline;
