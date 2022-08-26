import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { TDemo } from "../..";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const Card = ({ img, title }: TDemo) => {
  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        cursor: "pointer",
        fontFamily: "'Poppins', sans-serif",
        top: 0,
        left: 0,
        width: "50vw",
        height: "70vh",
        overflow: "hidden",


        img: {
          display: "flex",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transition: "all 1s ease",

          "&:hover": {
            transform: "scale(1.030)",
          },
        },
      }}
    >

      <img src={img} alt={title} />

      <Box
        sx={{
          display: "flex",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          userSelect: "none",
          flexDirection: "column",
          justifyContent: "flex-end",
          // background: "rgba(0,0,0,0.3)",
          alignItems: "center",
          padding: "20px",
          color: "#fff",
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        
      {/* <img src={img} alt={title} /> */}
        <Typography
          sx={{
            fontSize: "28px",
            fontWeight: 500,
            fontFamily: "'Poppins', sans-serif !important",
          }}
        >
          {title}
        </Typography>
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
            ver emprendimiento
          </Typography>
          <Box sx={{ height: "100%" }}>
            <KeyboardArrowRightIcon sx={{ height: "100%" }} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Card;
