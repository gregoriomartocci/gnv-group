import React, { Fragment, useState } from "react";
import { Box, Typography } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

import data from "./Data";
import { CardContainer } from "./Styles";
import { HighQuality } from "@mui/icons-material";
import Carousel from "./Components/Carousel";

const Timeline = () => {
  const [selected, setSelected] = useState<number>(0);
  const [ventures, setVentures] = useState(data);

  const handleClick = (index: number) => {
    setSelected(index);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "80vh",
        height: "100vh",
        transform: "rotate(-90deg)",
      }}
    >
      {ventures?.map(({ year, highlights }, index) => {
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
              <Carousel items={highlights ?? []} />
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
                    fontWeight: 500,
                    fontSize: "28px",
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
