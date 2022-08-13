import React from "react";
import { Box, Typography } from "@mui/material";
import { CardContainer, ImageContainer } from "./Styles";

type TMemberProps = {
  img: string;
  name: string;
  role: string;
};

const Member = ({ img, name, role }: TMemberProps) => {
  return (
    <Box sx={CardContainer}>
      <Box sx={ImageContainer}>
        <img src={img} alt={name}></img>
      </Box>
      <Typography
        sx={{
          fontFamily: "'Poppins', sans-serif",
          fontSize: "28px",
          margin: "10px 0 0 0",
        }}
      >
        {name}
      </Typography>
      <Typography
        sx={{
          fontFamily: "'Poppins', sans-serif",
          fontSize: "18px",
          margin: "10px",
        }}
      >
        {role}
      </Typography>
    </Box>
  );
};

export default Member;
