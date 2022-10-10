import React from "react";
import { Box, Typography } from "@mui/material";
import { StaticImageData } from "next/image";
import { ProjectContainer } from "./Styles";
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

          <Box
            sx={{
              display: "flex",
              height: "80%",
              width: "100%",
              flexDirection: "column",
              justifyContent: "center",
              fontFamily: "'Poppins', sans-serif",
              padding: { xs: "25px", md: "75px" },
              maxWidth: { xs: "100%", lg: "50%" },
            }}
          >
            <Typography
              sx={{
                color: "#000",
                fontWeight: 600,
                fontSize: { xs: "24px", md: "30px" },
                margin: "10px 0",
              }}
            >
              {title}
            </Typography>
            <Box
              style={{
                display: "flex",
                alignItems: "center",
                margin: "10px 0",
              }}
            >
              <Typography
                sx={{
                  color: "#4f4f4f",
                  fontWeight: 600,
                  fontSize: { xs: "16", md: "18px" },
                  lineHeight: "22px",
                }}
              >
                {sanitize(sliceText(description, 150))}
              </Typography>
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
