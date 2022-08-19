import React from "react";
import { Box, Typography } from "@mui/material";
import { CardBody, CardContainer, ImageContainer } from "./Styles";

type TMemberProps = {
  urls: string;
};

const GalleryItem = ({ urls }: TMemberProps) => {
  return (
    <Box sx={CardContainer}>
      <Box sx={ImageContainer}>
        <img src={urls?.regular} alt={name}></img>
      </Box>
      <Box sx={CardBody}>
        <Typography
          sx={{
            fontFamily: "'Poppins', sans-serif",
            margin: "10px 0 0 0",
            fontSize: "18px",
            fontWeight: "600",
            color: "#424242",
          }}
        >
          B Bros Artista: Juan Becú Galería Nora Fisch | Buenos Aires Técnica:
          Óleo sobre tela Medidas: 265 x 195 cm Año: 2013
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
    </Box>
  );
};

export default GalleryItem;
