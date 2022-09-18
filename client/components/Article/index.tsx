import React from "react";
import { Box } from "@mui/material";
import { StaticImageData } from "next/image";
import { ProjectBody, ProjectContainer } from "./Styles";
import { IArticle } from "../../redux/slices/articles";
import Link from "next/link";
import parse from "html-react-parser";
import { TArticle } from "../../pages/news";

export const sanitize = (string: string) => {
  const reactElement = parse(string);
  return reactElement;
};

export const sliceText = (text: any, limit: number) => {
  const string =
    text?.length && text?.length > limit
      ? text.toString().substring(0, limit) + "..."
      : text;
  return string;
};

const Article = ({
  title,
  source,
  date,
  images,
  description,
  published,
  link,
}: TArticle) => {
  return (
    <Link href={link}>
      <a target="_blank">
        <Box sx={ProjectContainer}>
          <Box sx={{ width: "100%", height: "100%" }}>
            <img src={images[0]} alt={title} />
          </Box>

          <Box sx={ProjectBody}>
            <span
              style={{
                color: "#212121",
                fontWeight: 600,
                fontSize: "30px",
                margin: "10px 0",
              }}
            >
              {title}
            </span>

            <Box
              style={{
                display: "flex",
                alignItems: "center",
                margin: "10px 0",
              }}
            >
              <span
                style={{ color: "#616161", fontWeight: 600, fontSize: "18px" }}
              >
                {sanitize(sliceText(description, 250))}
              </span>
            </Box>

            <Box
              style={{
                display: "flex",
                alignItems: "center",
                margin: "10px 0",
              }}
            >
              <span
                style={{ color: "#424242", fontWeight: 600, fontSize: "16px" }}
              >
                {date}
              </span>
            </Box>
          </Box>
        </Box>
      </a>
    </Link>
  );
};

export default Article;
