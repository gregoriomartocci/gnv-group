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
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", lg: "row" },
            alignItems: "center",
            backgroundColor: "#fff",
            cursor: "pointer",
            fontFamily: "'Poppins', sans-serif",
            fontSize: "20px",
            boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
            maxHeight: { xs: "100%", lg: "600px" },
            height: { xs: "100%", lg: "375px" },
            margin: { xs: "50px 10%", md: "50px 15%" },
            borderRadius: { xs: "0 0 10px 10px", md: "0 12px 12px 0" },

            img: {
              height: "100%",
              width: "100%",
              borderRadius: { xs: "10px 10px 0 0", md: "12px 0 0 12px" },
              maxWidth: "100%",
              minHeight: "100%",
              maxHeight: { xs: "160px", sm: "" },
              objectFit: "cover",
              objectPosition: "center center",
            },
          }}
        >
          <Box sx={{ width: "100%", height: "100%" }}>
            <img src={images[0]?.src} alt={title} />
          </Box>

          <Box
            sx={{
              display: "flex",
              height: "80%",
              width: "100%",
              flexDirection: "column",
              justifyContent: "center",
              fontFamily: "'Poppins', sans-serif",
              padding: { xs: "10px 25px", md: "75px" },
              maxWidth: { xs: "100%", lg: "50%" },
            }}
          >
            <Typography
              sx={{
                color: "#000",
                fontWeight: 600,
                fontSize: { xs: "16px", md: "24px" },
                margin: { xs: "5px 0 0 0", md: "" },
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
                  fontSize: { xs: "12px", md: "14px" },
                  lineHeight: { xs: "18px", md: "22px" },
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
                style={{ color: "#424242", fontWeight: 600, fontSize: "14px" }}
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
