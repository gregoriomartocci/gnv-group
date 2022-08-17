import React from "react";
import { Box, Typography } from "@mui/material";
import { CardContainer, ImageContainer } from "./Styles";

type TMemberProps = {
  urls: string;
};

const GalleryItem = ({ urls }: TMemberProps) => {
  return (
    <Box sx={CardContainer}>
      <Box sx={ImageContainer}>
        <img src={urls?.regular} alt={name}></img>
      </Box>
      <Typography
        sx={{
          fontFamily: "'Poppins', sans-serif",
          margin: "10px 0 0 0",
          fontSize: "22px",
          fontWeight: "700",
          color: "#424242",
        }}
      >
        {/* {name} */}
      </Typography>
      <Typography
        sx={{
          fontFamily: "'Poppins', sans-serif",
          fontSize: "18px",
          margin: "10px 0 0 0",
          fontWeight: "600",
          color: "#bdbdbd",
        }}
      >
        {/* {role} */}
      </Typography>
    </Box>
  );
};

export default GalleryItem;
