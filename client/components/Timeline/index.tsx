import React, { Fragment, useState } from "react";
import { Box, Typography } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

import { data } from "./Data";
import { CardContainer } from "./Styles";

const Timeline = () => {
  const [selected, setSelected] = useState<number>(0);

  const handleClick = (index: number) => {
    setSelected(index);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        transform: "rotate(-90deg)",
      }}
    >
      {data?.map(({ year, highlights }, index) => {
        return (
          <Fragment>
            {selected === index ? (
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 150px)",
                  transform: "rotate(90deg)",
                }}
              >
                {highlights?.map(({ title, date, description }) => {
                  return (
                    <Box sx={CardContainer}>
                      <img
                        src="https://res.cloudinary.com/gregomartocci/image/upload/v1657429977/kaiotnao9msk80taw1lw.jpg"
                        alt={title}
                      ></img>
                      <Typography>{title}</Typography>
                      <Typography>{description}</Typography>
                      <Typography>{date}</Typography>
                    </Box>
                  );
                })}
              </Box>
            ) : (
              <Box
                sx={{
                  display: "flex",
                  padding: "30px 25px",
                  justifyContent: "space-between",
                  alignItems: "center",
                  cursor: "pointer",
                  borderTop: "1px solid #eeeeee",
                  borderBottom: "1px solid #eeeeee",
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
                    fontSize: "18px",
                    color: "#bdbdbd",
                  }}
                >
                  {year}
                </Typography>

                <Box />
              </Box>
            )}
          </Fragment>
        );
      })}
    </Box>
  );
};

export default Timeline;
