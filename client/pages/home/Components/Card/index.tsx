import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { TDemo } from "../..";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Link from "next/link";
import { Navigate } from "react-router-dom";

const Card = (
  { img, title, link, objectPosition, sm }: TDemo,
  id: string,
  navigate: (id: string) => void
) => {
  const [hover, setHover] = useState<boolean>(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <Link href={link ? link : ""}>
      <a>
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
            height: { xs: "80vh", md: "100vh" },
            overflow: "hidden",

            img: {
              display: "flex",
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition,
              transition: "all 1.25s ease",

              "&:hover ": {
                transition: "all 1.25s ease",
                transform: "scale(1.05)",
              },
            },
          }}
        >
          <img src={img ? img : ""} alt={title ? title : ""} />

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "absolute",
              left: 0,
              width: "100%",
              userSelect: "none",
              flexDirection: "column",
              pointerEvents: "auto",
              height: "200px",
              padding: "65px",
              color: "#fff",
              fontFamily: "'Poppins', sans-serif",
              background: "rgba(255,255,255,0)",
              backdropFilter: "blur(5px)",
              boxShadow: "0 8px 32px rgba(31,38,135, 0.37)",
              bottom: `${sm ? 0 : hover ? 0 : "-200px"}`,
              transition: "all 1.25s ease",
              transform: "scale(1.05)",
              textAlign: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "30px", md: "32px" },
                fontWeight: 600,
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
              <Box>
                <Typography
                  sx={{
                    fontSize: "16px",
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
          </Box>
        </Box>
      </a>
    </Link>
  );
};

export default Card;
