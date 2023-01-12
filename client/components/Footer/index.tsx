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
        padding: "20px",
        margin: "50px 0 0 0",
        backgroundColor: "#fafafa",
      }}
    >
      <Box
        sx={{
          display: { xs: "column", sm: "flex", md: "flex" },
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          padding: "30px 10% 10px 10%",
          fontWeight: 500,
        }}
      >
        {/* FOOTER NAV MENU */}

        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: {
              xs: "column",
              md: "space-around",
            },
            flexDirection: {
              xs: "column",
              md: "row",
            },
          }}
        >
          <Link href={"/company"}>
            <a>
              <Typography
                sx={{
                  margin: "5px 20px 0  0",
                  fontSize: { xs: "14px", md: "16px" },
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
                  margin: "5px 20px 0  0",
                  fontSize: { xs: "14px", md: "16px" },
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
                  margin: "5px 20px 0  0",
                  fontSize: { xs: "14px", md: "16px" },
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
                  margin: "5px 20px 0  0",
                  fontSize: { xs: "14px", md: "16px" },
                  fontWeight: "600",
                }}
              >
                Contacto
              </Typography>
            </a>
          </Link>
        </Box>

        {/* SOCIAL MEDIA */}

        {/* <Box sx={{ display: "flex", padding: { xs: "25px 0 10px 0" } }}>
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
        </Box> */}
      </Box>

      {/* DIVIDER */}
      <Box
        sx={{
          display: {
            xs: "column",
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
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "2.5% 10%",
          lineHeight: "22px",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "13px", md: "15px" },
            marginTop: { xs: "10px", md: "5px" },
          }}
        >
          Camila O´Gorman 412 - World Trade Center II - Of. 200 - Puerto Madero,
          CABA, Argentina, CP 1107. | T.+5411 5354 8030
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "13px", md: "15px" },
            marginTop: { xs: "10px", md: "5px" },
          }}
        >
          Av. Italia y Parada 4 - Edificio Office Punta - Of. 206 - Punta del
          Este, Maldonado, Uruguay, CP 20100. | T.+598 4249.4800 878
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
