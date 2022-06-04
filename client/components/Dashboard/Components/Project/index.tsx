import React from "react";
import { Box } from "@mui/material";
import { StaticImageData } from "next/image";
import { ProjectContainer } from "./Styles";

export interface IProject {
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

const Project = ({
  title,
  price,
  details,
  image,
  label,
  path,
  alt,
}: IProject) => {
  return (
    <Box sx={ProjectContainer}>
      <img src={image.src} alt={alt} />
      <Box>{title}</Box>

      <Box></Box>
    </Box>
  );
};

export default Project;
