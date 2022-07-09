import React from "react";
import { Box } from "@mui/material";
import { StaticImageData } from "next/image";
import { ProjectBody, ProjectContainer, ProjectHeader } from "./Styles";
import { IProject } from "../../pages/profile/news";

const Card = ({ name, description, images, price, status, type }: IProject) => {
  return (
    <Box sx={ProjectContainer}>
      <img src={images[0]?.src} alt={name} />
      <Box sx={ProjectHeader}>
        <span
          style={{
            color: "#212121",
            fontWeight: 600,
            fontSize: "25px",
            margin: "15px 0",
          }}
        >
          {name}
        </span>
      </Box>

      <Box sx={ProjectBody}>
        <Box style={{ display: "flex", alignItems: "center" }}>
          <span style={{ color: "#212121", fontWeight: 600, fontSize: "12px" }}>
            {status}
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
          {description}
        </Box>

        <Box
          style={{
            color: "#424242",
            fontWeight: 600,
            fontSize: "12px",
            margin: "10px 0",
          }}
        >
          Ver Proyecto
        </Box>
      </Box>
    </Box>
  );
};

export default Card;
