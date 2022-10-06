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
  height: { xs: "350px", md: "600px" },
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

type TGalleryItems = {
  id: number;
  gallery: string;
  artist: string;
  title: string;
  image: string;
  technique: string;
  measures: string;
  date: string;
  published: boolean;
};

const GalleryItem = ({
  id,
  gallery,
  artist,
  title,
  image,
  technique,
  measures,
  date,
  published,
}: TGalleryItems) => {
  return (
    <Box sx={CardContainer}>
      <Box sx={ImageContainer}>
        <img src={image} alt={title}></img>
      </Box>
      <Box sx={CardBody}>
        {gallery && (
          <Typography
            sx={{
              fontFamily: "'Poppins', sans-serif",
              margin: "10px 0 0 0",
              fontSize: "18px",
              fontWeight: "600",
              color: "#424242",
            }}
          >
            Galería: {gallery}
          </Typography>
        )}
        {artist && (
          <Typography
            sx={{
              fontFamily: "'Poppins', sans-serif",
              margin: "10px 0 0 0",
              fontSize: "18px",
              fontWeight: "600",
              color: "#424242",
            }}
          >
            Artista: {artist}
          </Typography>
        )}
        {title && (
          <Typography
            sx={{
              fontFamily: "'Poppins', sans-serif",
              margin: "10px 0 0 0",
              fontSize: "18px",
              fontWeight: "600",
              color: "#424242",
            }}
          >
            Título: {title}
          </Typography>
        )}
        {technique && (
          <Typography
            sx={{
              fontFamily: "'Poppins', sans-serif",
              margin: "10px 0 0 0",
              fontSize: "18px",
              fontWeight: "600",
              color: "#424242",
            }}
          >
            Técnica: {technique}
          </Typography>
        )}
        {measures && (
          <Typography
            sx={{
              fontFamily: "'Poppins', sans-serif",
              margin: "10px 0 0 0",
              fontSize: "18px",
              fontWeight: "600",
              color: "#424242",
            }}
          >
            Medidas: {measures}
          </Typography>
        )}
        {date && (
          <Typography
            sx={{
              fontFamily: "'Poppins', sans-serif",
              margin: "10px 0 0 0",
              fontSize: "18px",
              fontWeight: "600",
              color: "#424242",
            }}
          >
            Año: {date}
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default GalleryItem;
