import React from "react";
import { Box } from "@mui/material";
import { StaticImageData } from "next/image";
import { ProjectBody, ProjectContainer } from "./Styles";
import { IArticle } from "../../redux/slices/articles";

const Article = ({
  title,
  source,
  date,
  images,
  published,
  link,
}: IArticle) => {
  return (
    <Box sx={ProjectContainer}>
      <Box sx={{ height: "100%" }}>
        <img src={images[0]?.src ?? ""} alt={title} />
      </Box>

      <Box sx={ProjectBody}>
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

        <Box
          style={{
            color: "#424242",
            fontWeight: 600,
            fontSize: "12px",
            margin: "10px 0",
          }}
        ></Box>

        <Box
          style={{ display: "flex", alignItems: "center", margin: "10px 0" }}
        >
          <span style={{ color: "#424242", fontWeight: 600, fontSize: "12px" }}>
            {date}
          </span>
        </Box>
      </Box>
    </Box>
  );
};

export default Article;
