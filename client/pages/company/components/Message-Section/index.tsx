import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { imageContainer } from "./Styles";

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
        display: "flex",
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
          width: "70%",
          flexDirection: "column",
          padding: "40px",
          boxShadow: "rgba(0, 0, 0, 0.1) 0px 8px 18px",
          borderRadius: "15px",
          background: "#fff",
          zIndex: "600",
        }}
      >
        <Typography
          sx={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: "25px",
            fontWeight: "600",
            margin: "0 0 25px  0",
          }}
        >
          {title}
        </Typography>

        <Typography sx={{ fontFamily: "'Poppins', sans-serif" }}>
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
