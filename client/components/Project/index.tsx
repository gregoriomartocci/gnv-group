import React from "react";
import { Box } from "@mui/material";
import { StaticImageData } from "next/image";
import { ProjectBody, ProjectContainer, ProjectHeader } from "./Styles";
import LocationOnIcon from "@mui/icons-material/LocationOn";
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
      <Box sx={ProjectHeader}>
        <span style={{ color: "#445CB8", fontWeight: 600, fontSize: "20px" }}>
          {price}
        </span>
        <span style={{ color: "#1C2B40", fontWeight: 600, fontSize: "16px" }}>
          {title}
        </span>
      </Box>
      <span
        style={{
          display: "flex",
          width: "100%",
          height: "1px",
          padding: "0 10px",
          backgroundColor: "#eeeeee",
        }}
      ></span>
      <Box sx={ProjectBody}>
        <Box style={{ display: "flex", alignItems: "center" }}>
          <LocationOnIcon
            style={{
              color: "#3F5EE1",
              alignItems: "center",
              fontSize: "14px",
              margin: "0 5px",
            }}
          />
          <span style={{ color: "#B1B8C1", fontWeight: 600, fontSize: "12px" }}>
            {details?.location}
          </span>
        </Box>
        <Box style={{ display: "flex", alignItems: "center" }}>
          <LocationOnIcon
            style={{
              color: "#3F5EE1",
              alignItems: "center",
              fontSize: "14px",
              margin: "0 5px",
            }}
          />
          <span style={{ color: "#B1B8C1", fontWeight: 600, fontSize: "12px" }}>
            {details?.surface} m²
          </span>
        </Box>
        <Box style={{ display: "flex", alignItems: "center" }}>
          <LocationOnIcon
            style={{
              color: "#3F5EE1",
              alignItems: "center",
              fontSize: "14px",
              margin: "0 5px",
            }}
          />
          <span style={{ color: "#B1B8C1", fontWeight: 600, fontSize: "12px" }}>
            {details?.bathrooms} bathrooms
          </span>
        </Box>
        <Box style={{ display: "flex", alignItems: "center" }}>
          <LocationOnIcon
            style={{
              color: "#3F5EE1",
              alignItems: "center",
              fontSize: "14px",
              margin: "0 5px",
            }}
          />
          <span style={{ color: "#B1B8C1", fontWeight: 600, fontSize: "12px" }}>
            {details?.bedrooms} bedrooms
          </span>
        </Box>
      </Box>
    </Box>
  );
};

export default Project;
