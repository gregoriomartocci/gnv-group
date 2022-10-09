import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { TDemo } from "../..";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Svg from "./components/SVG";
import { Height } from "@mui/icons-material";

const Licence = ({ img, description, width, height }: TDemo) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        cursor: "pointer",
        fontFamily: "'Poppins', sans-serif",
        width: { xs: "100%", lg: "50%" },
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
          alignItems: "center",
          padding: "35px 7.5%",
          color: "#212121",
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "18px",
            width: "100%",
            flexDirection: { xs: "column", sm: "row" },
            margin: "5px 0",
            padding: "0 0 25 px 0",
          }}
        >
          {img &&
            img?.map((element) => {
              return (
                <Box
                  sx={{
                    dislpay: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "0 0 25px -15px",
                  }}
                >
                  <Svg width={width} height={height}>
                    {element}
                  </Svg>
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
              textAlign: "center",
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
