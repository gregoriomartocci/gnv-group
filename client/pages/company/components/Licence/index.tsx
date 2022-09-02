import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { TDemo } from "../..";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Svg from "./components/SVG";

const Licence = ({ img, description }: TDemo) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        cursor: "pointer",
        fontFamily: "'Poppins', sans-serif",
        width: "100%",
        height: "100%",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "100%",
          height: "100%",
          userSelect: "none",
          flexDirection: "column",
          alignItems: "flex-start",
          padding: "25px 50px",
          color: "#212121",
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        <Box
          style={{
            display: "flex",
            alignItems: "flex-start",
            fontSize: "18px",
            margin: "5px 0",
            padding: "0 0 25px 0",
          }}
        >
          {img &&
            img?.map((element) => {
              return (
                <Box sx={{ margin: "0 0 0 -15px" }}>
                  <Svg width="300px">{element}</Svg>
                </Box>
              );
            })}
        </Box>

        <Box
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: "18px",
            margin: "5px 0",
          }}
        >
          <Typography
            sx={{
              fontSize: "18px",
              fontWeight: 400,
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            {description}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Licence;
