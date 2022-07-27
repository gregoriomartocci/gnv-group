import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { TDemo } from "../..";
import { CardContainer } from "../../../../components/Card/Styles";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const Card = ({ img, title }: TDemo) => {
  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        backgroundColor: "#fff",
        cursor: "pointer",
        fontFamily: "'Poppins', sans-serif",
        fontSize: "20px",
        maxHeight: "100%",
        maxWidth: "100%",
        overflow: "hidden",

        img: {
          position: "relative",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transition: "transform 2.5s",

          "&:hover": {
            transform: "scale(1.05)",
            overflow: "hidden",
          },
        },
      }}
    >
      <img src={img} alt={title}></img>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
          width: "100%",
          position: "absolute",
          bottom: 0,
          color: "#fff",
          margin: "25px 0",
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        <Typography
          sx={{
            fontSize: "25px",
            fontWeight: 600,
            fontFamily: "'Poppins', sans-serif",
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
          Ver Proyecto
          <KeyboardArrowRightIcon />
        </Box>
      </Box>
    </Box>
  );
};

export default Card;
