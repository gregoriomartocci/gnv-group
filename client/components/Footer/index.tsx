import React from "react";
import { Box, Typography } from "@mui/material";

import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          padding: "5% 10%",
          fontWeight: 500,
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "100%",
            padding: {
              xs: "",
              sm: "",
              md: "0 20% 0 0 ",
              lg: "0 20% 0 0 ",
              xl: "0 20% 0 0 ",
            },
            justifyContent: {
              xs: "column",
              sm: "column",
              md: "space-around",
              lg: "space-around",
              xl: "space-between",
            },
            flexDirection: {
              xs: "column",
              sm: "column",
              md: "row",
              lg: "row",
              xl: "row",
            },
          }}
        >
          <Link href={"/company"}>
            <a>
              <Typography
                sx={{
                  margin: "0 15px 0  0",
                  fontSize: "20px",
                  fontWeight: "600",
                }}
              >
                Compañia
              </Typography>
            </a>
          </Link>

          <Link href={"/ventures"}>
            <a>
              <Typography
                sx={{
                  margin: "0 15px 0  0",
                  fontSize: "20px",
                  fontWeight: "600",
                }}
              >
                Emprendimientos
              </Typography>
            </a>
          </Link>

          <Link href={"/news"}>
            <a>
              <Typography
                sx={{
                  margin: "0 15px 0  0",
                  fontSize: "20px",
                  fontWeight: "600",
                }}
              >
                Prensa
              </Typography>
            </a>
          </Link>

          <Link href={"/home#contact"}>
            <a>
              <Typography
                sx={{
                  margin: "0 15px 0  0",
                  fontSize: "20px",
                  fontWeight: "600",
                }}
              >
                Contacto
              </Typography>
            </a>
          </Link>
        </Box>

        {/* SOCIAL MEDIA */}

        <Box sx={{ display: "flex" }}>
          <Box
            sx={{
              display: "flex",
              margin: "0 10px",
              justifyContent: "center",
              alignItems: "center",
              padding: "15px",
              backgroundColor: "#474747",
              borderRadius: "50px",
            }}
          >
            <FaFacebookF style={{ color: "#fff" }} />
          </Box>
          <Box
            sx={{
              display: "flex",
              margin: "0 10px",
              justifyContent: "center",
              alignItems: "center",
              padding: "15px",
              backgroundColor: "#474747",
              borderRadius: "50px",
            }}
          >
            <FaTwitter style={{ color: "#fff" }} />
          </Box>
          <Box
            sx={{
              display: "flex",
              margin: "0 10px",
              justifyContent: "center",
              alignItems: "center",
              padding: "15px",
              backgroundColor: "#474747",
              borderRadius: "50px",
            }}
          >
            <FaLinkedinIn style={{ color: "#fff" }} />
          </Box>
        </Box>
      </Box>

      {/* DIVIDER */}
      <Box
        sx={{
          display: {
            xs: "column",
            sm: "column",
            md: "none",
          },
          padding: "2.5% 10%",
        }}
      >
        <Box
          sx={{
            width: "100%",
            border: "1px solid #e0e0e0",
          }}
        ></Box>
      </Box>

      {/* ADDRESS */}
      <Box sx={{ padding: "2.5% 10%" }}>
        Av. Italia y Parada 4 - Edificio Office Punta - Of. 206 - Punta del
        Este, Maldonado, Uruguay, CP 20100. | T.+598 4249.4800 C. +598 94 785
        878 |
      </Box>
    </Box>
  );
};

export default Footer;
