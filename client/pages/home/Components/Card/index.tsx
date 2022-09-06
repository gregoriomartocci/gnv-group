import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { TDemo } from "../..";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Link from "next/link";

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
          objectPosition: "75% 0%",
          transition: "all 1.25s ease",

          "&:hover": {
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
          position: "relative",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          userSelect: "none",
          flexDirection: "column",
          justifyContent: "flex-end",
          background: "rgba(0,0,0,0.15)",
          alignItems: "center",
          pointerEvents: "none",
          padding: "65px",
          color: "#fff",
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: "80%",
            userSelect: "none",
            flexDirection: "column",
            justifyContent: "flex-start",
            pointerEvents: "auto",
            padding: "65px",
            color: "#fff",
            fontFamily: "'Poppins', sans-serif",
            transform: "translateY(25%);",
            transition: "1.50s ease all",

            "&:hover": {
              transform: "translateY(0%);",
              transition: "0.75s ease all",
            },

          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              height: "25%",
              userSelect: "none",
              flexDirection: "column",
              justifyContent: "flex-start",
              pointerEvents: "auto",
              padding: "65px",
              color: "#fff",
              fontFamily: "'Poppins', sans-serif",
              background: "rgba(255,255,255,0)",
              backdropFilter: "blur(7px)",
              boxShadow: "0 8px 32px rgba(31,38,135, 0.37)",
              
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
            <Link href={"/venture"}>
              <a>
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

        {/* <img src={img} alt={title} /> */}
      </Box>
    </Box>
  );
};

export default Card;
