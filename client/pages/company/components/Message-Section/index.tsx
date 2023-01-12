import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { SxProps, Theme } from "@mui/material";

export const imageContainer: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  position: { lg: "relative" },
  width: { xs: "auto", md: "100%" },
  right: { xs: 0, sm: 0, md: "50px" },
  top: 0,
  backgroundColor: "#fff",
  borderRadius: "20px",
  cursor: "pointer",
  fontFamily: "'Poppins', sans-serif",
  fontSize: "20px",
  boxShadow: "rgba(0, 0, 0, 0.20) 0px 14px 18px",
  margin: { xs: "25px 0", lg: "15px" },

  img: {
    objectFit: "cover",
    width: "100%",
    height: "100%",
    borderRadius: "15px",
  },
};

type TMessageSection = {
  title: string;
  description?: any;
  img: string;
  render: boolean;
};

const MessageSection = ({
  title,
  description,
  img,
  render,
}: TMessageSection) => {
  return (
    <Box
      sx={{
        display: { xs: "column", lg: "flex" },
        position: "relative",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          position: "relative",
          left: "",
          right: "0px",
          width: "100%",
          flexDirection: "column",
          padding: "40px",
          boxShadow: "rgba(0, 0, 0, 0.1) 0px 8px 18px",
          borderRadius: "15px",
          background: "#fff",
          zIndex: "600",
          maxWidth: { lg: "50%" },
        }}
      >
        <Typography
          sx={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: { xs: "18px", md: "20px" },
            fontWeight: "600",
            lineHeight: { xs: "30px", md: "" },
            margin: { xs: "0 0 15px  0", md: "" },
          }}
        >
          {title}
        </Typography>

        <Typography
          sx={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: { xs: "16px", md: "18px" },
          }}
        >
          {render && description ? description : ""}
        </Typography>
      </Box>

      <Box sx={imageContainer}>
        <img src={img} alt={title} />
      </Box>
    </Box>
  );
};

export default MessageSection;
