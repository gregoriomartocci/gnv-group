import React from "react";
import { Box, Typography } from "@mui/material";
import { SxProps, Theme } from "@mui/material";

const ImageContainer: SxProps<Theme> = {
  display: "flex",
  position: "relative",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",

  fontSize: "20px",
  height: { xs: "280px", md: "450px" },
  width: { xs: "100%", md: "100%" },

  img: {
    position: "absolute",
    objectPosition: "center top",
    borderRadius: "10px 10px 0 0",
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
  images: any;
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
  images,
  technique,
  measures,
  date,
  published,
}: TGalleryItems) => {
  return (
    <Box sx={CardContainer}>
      <Box sx={ImageContainer}>
        <img src={images?.length ? images[0]?.src : ""} alt={title}></img>
      </Box>
      <Box sx={CardBody}>
        {artist && (
          <Box sx={{ display: "flex" }}>
            <Typography
              sx={{
                margin: "0",
                fontSize: { xs: "15px", md: "17px" },
                fontWeight: 600,
                color: "#000",
              }}
            >
              {artist}
            </Typography>
          </Box>
        )}

        {/* {gallery && (
          <Typography
            sx={{
              fontFamily: "'Poppins', sans-serif",
              margin: "6px 0 0 0",
              fontSize: "18px",
              fontWeight: "700",

              color: "#000",
            }}
          >
            Galería:{" "}
            <span style={{ margin: "0 0 0 2px", fontWeight: "600 !important" }}>
              {gallery}
            </span>
          </Typography>
        )}
        {artist && (
          <Typography
            sx={{
              fontFamily: "'Poppins', sans-serif",
              margin: "6px 0 0 0",
              fontSize: "18px",
              fontWeight: "700",
              color: "#000",
            }}
          >
            Artista:
            <span style={{ margin: "0 0 0 2px", fontWeight: "600 !important" }}>
              {artist}
            </span>
          </Typography>
        )}
        {technique && (
          <Box sx={{ display: "flex" }}>
            <Typography
              sx={{
                fontFamily: "'Poppins', sans-serif",
                margin: "6px 0 0 0",
                fontSize: "18px",
                fontWeight: "700",
                color: "#000",
              }}
            >
              Técnica:
              <span
                style={{ margin: "0 0 0 2px", fontWeight: "600 !important" }}
              >
                {technique}
              </span>
            </Typography>
          </Box>
        )}
        {measures && (
          <Box sx={{ display: "flex" }}>
            <Typography
              sx={{
                fontFamily: "'Poppins', sans-serif",
                margin: "6px 0 0 0",
                fontSize: "18px",
                fontWeight: "700",
                color: "#000",
              }}
            >
              Medidas:{" "}
              <span
                style={{ margin: "0 0 0 2px", fontWeight: "600 !important" }}
              >
                {measures}
              </span>
            </Typography>
          </Box>
        )}
        {date && (
          <Box sx={{ display: "flex" }}>
            <Typography
              sx={{
                fontFamily: "'Poppins', sans-serif",
                margin: "6px 0 0 0",
                fontSize: "18px",
                fontWeight: "700",
                color: "#000",
              }}
            >
              Año:
              <span
                style={{ margin: "0 0 0 2px", fontWeight: "600 !important" }}
              >
                {date}
              </span>
            </Typography>
          </Box>
        )} */}
      </Box>
    </Box>
  );
};

export default GalleryItem;
