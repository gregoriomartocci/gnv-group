import React from "react";
import Box from "@mui/material/Box";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Link from "next/link";

type IWhatsApp = {
  number: number;
};

const WhatsApp = ({ number }: IWhatsApp) => {
  return (
    <Link href={`https://wa.me/${number}`}>
      <a target="_blank">
        <Box
          sx={{
            position: "fixed",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            padding: "10px",
            bottom: "20px",
            right: "20px",
            backgroundColor: "#25d366",
            color: "#FFF",
            borderRadius: "50%",
            zIndex: 5000,
          }}
        >
          <WhatsAppIcon sx={{ fontSize: "30px" }} />
        </Box>
      </a>
    </Link>
  );
};

export default WhatsApp;
