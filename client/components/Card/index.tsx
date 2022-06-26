import React from "react";
import { Box } from "@mui/material";
import { StaticImageData } from "next/image";
import { ProjectBody, ProjectContainer, ProjectHeader } from "./Styles";

export interface ICard {
  id: number;
  title: string;
  price: string;
  details: {
    location: string;
    bathrooms: number;
    bedrooms: number;
    surface: number;
  };
  image: StaticImageData;
  label: string;
  path: string;
  alt: string;
}

const Card = ({
  title,
  price,
  details,
  image,
  label,
  path,
  alt,
}: ICard) => {
  return (
    <Box sx={ProjectContainer}>
      <img src={image.src} alt={alt} />
      <Box sx={ProjectHeader}>
        <span
          style={{
            color: "#212121",
            fontWeight: 600,
            fontSize: "25px",
            margin: "10px 0",
          }}
        >
          {title}
        </span>
      </Box>

      <Box sx={ProjectBody}>
        <Box style={{ display: "flex", alignItems: "center" }}>
          <span style={{ color: "#212121", fontWeight: 600, fontSize: "12px" }}>
            En construcción
          </span>
        </Box>

        <Box
          style={{
            color: "#424242",
            fontWeight: 600,
            fontSize: "12px",
            margin: "10px 0",
          }}
        >
          Lideraron, a partir del desarrollo integral de Madero Harbour, la
          nueva urbanización de Puerto Madero.
        </Box>
        <Box
          style={{ display: "flex", alignItems: "center", margin: "10px 0" }}
        >
          <span style={{ color: "#424242", fontWeight: 600, fontSize: "12px" }}>
            20 de abril - 2022
          </span>
        </Box>
      </Box>
    </Box>
  );
};

export default Card;
