import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { TDemo } from "../..";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Link from "next/link";

const Card = ({ img, title, link }: TDemo) => {
  const [hover, setHover] = useState<boolean>(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <Box
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      sx={{
        position: "relative",
        display: "flex",
        cursor: "pointer",
        fontFamily: "'Poppins', sans-serif",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        overflow: "hidden",

        img: {
          display: "flex",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: { xs: " 75% 0%" },
          transition: "all 1.25s ease",

          "&:hover ": {
            transition: "all 1.25s ease",
            transform: "scale(1.05)",
          },
        },
      }}
    >
      <img src={img} alt={title} />

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          position: "absolute",
          left: 0,
          width: "100%",
          userSelect: "none",
          flexDirection: "column",
          justifyContent: "flex-start",
          pointerEvents: "auto",
          height: "25%",
          padding: "65px",
          color: "#fff",
          fontFamily: "'Poppins', sans-serif",
          background: "rgba(255,255,255,0)",
          backdropFilter: "blur(7px)",
          boxShadow: "0 8px 32px rgba(31,38,135, 0.37)",
          bottom: `${hover ? 0 : "-25%"}`,
          transition: "all 1.25s ease",
          transform: "scale(1.05)",
        }}
      >
        <Typography
          sx={{
            fontSize: "32px",
            fontWeight: 600,
            fontFamily: "'Poppins', sans-serif !important",
          }}
        >
          {title}
        </Typography>
        <Link href={link}>
          <a target="_blank">
            <Box
              style={{
                display: "flex",
                alignItems: "center",
                fontSize: "18px",
                margin: "5px 0",
              }}
            >
              <Box>
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontWeight: 500,
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  ver emprendimiento
                </Typography>
              </Box>
              <Box sx={{ height: "100%" }}>
                <KeyboardArrowRightIcon sx={{ height: "100%" }} />
              </Box>
            </Box>
          </a>
        </Link>
      </Box>
    </Box>
  );
};

export default Card;
