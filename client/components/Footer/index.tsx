import React from "react";
import { Box } from "@mui/material";

import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

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
        <Box>Campaña</Box>
        <Box>Emprendimientos</Box>
        <Box>Prensa</Box>
        <Box>Contacto</Box>

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
      <Box sx={{ padding: "0 10% 5% 10%" }}>
        Av. Italia y Parada 4 - Edificio Office Punta - Of. 206 - Punta del
        Este, Maldonado, Uruguay, CP 20100. | T.+598 4249.4800 C. +598 94 785
        878 |
      </Box>
    </Box>
  );
};

export default Footer;
