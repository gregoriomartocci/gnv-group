import React from "react";
import { Box, Typography } from "@mui/material";
import { SxProps, Theme } from "@mui/material";

const ImageContainer: SxProps<Theme> = {
  display: "flex",
  position: "relative",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  borderRadius: "50",
  fontSize: "20px",
  height: "600px",
  width: "100%",

  img: {
    position: "absolute",
    top: "0",
    left: "0",
    height: "100%",
    width: "100%",
    objectFit: "cover",
  },
};

const CardContainer: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  alignItems: "left",
  textAlign: "left",
  fontSize: "20px",
  margin: "25px 35px ",
  height: "100%",
  borderRadius: "10px",
  boxShadow: "rgba(0, 0, 0, 0.15) 0px 8px 16px",
  cursor: "pointer",
  "&:hover": {},
};

const CardBody: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  alignItems: "left",
  textAlign: "left",
  fontSize: "18px",
  fontWeight: "400",
  padding: "25px 35px",
  height: "100%",
};

type TMemberProps = {
  urls: string;
};

const GalleryItem = ({ urls }: TMemberProps) => {

  console.log(urls, "que pasa");
  
  return (
    <Box sx={CardContainer}>
      <Box sx={ImageContainer}>
        <img src={urls?.regular} alt={"ok"}></img>
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
