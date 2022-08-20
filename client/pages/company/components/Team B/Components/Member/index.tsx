import React from "react";
import { Box, Typography } from "@mui/material";
import { BodyContainer, CardContainer, ImageContainer } from "./Styles";

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

      <Box sx={BodyContainer}>
        <Typography
          sx={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: "20px",
            margin: "5px 0 0 0",
            fontWeight: "700",
            color: "#424242",
          }}
        >
          {name}
        </Typography>
        <Typography
          sx={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: "16px",
            margin: "2.5px 0 0 0",
            fontWeight: "600",
            color: "#bdbdbd",
          }}
        >
          {role}
        </Typography>
      </Box>
    </Box>
  );
};

export default Member;
