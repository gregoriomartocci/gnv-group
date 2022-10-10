import React from "react";
import { Box, Typography } from "@mui/material";
import { width } from "@mui/system";
import { sanitize } from "../Article";

interface IHeaderTitle {
  title?: string;
  description?: string;
  titleFontSize?: string;
  descriptionFontSize?: string;
  fontWeight?: number;
  p?: string;
  color?: string;
  width?: string;
  titlePadding?: string;
  descriptionTextAlign?: string;
  titleLineHeight?: string;
  titleWidth?: any;
}

const HeaderTitle = ({
  title,
  description,
  titleFontSize,
  descriptionFontSize,
  descriptionTextAlign,
  titleWidth,
  fontWeight,
  color,
  width,
  titlePadding,
  titleLineHeight,
  p,
}: IHeaderTitle) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: p,
        margin: { xs: "10px 0px", md: "5px 0" },
        fontFamily: "'Poppins', sans-serif",
        textAlign: "center",
        width,
      }}
    >
      {title ? (
        <Typography
          sx={{
            fontSize: titleFontSize,
            margin: "0",
            padding: titlePadding,
            fontWeight,
            width: titleWidth ? titleWidth : "auto",
            fontFamily: "'Poppins', sans-serif",
            color: `${color ? color : "#424242"}`,
            lineHeight: titleLineHeight,
          }}
        >
          {sanitize(title)}
        </Typography>
      ) : null}
      {description && (
        <Typography
          sx={{
            fontSize: descriptionFontSize,
            margin: "0",
            fontWeight: 500,
            color: `${color ? color : "#424242"}`,
            fontFamily: "'Poppins', sans-serif",
            textAlign: descriptionTextAlign,
            marginTop: "20px",
          }}
        >
          {description}
        </Typography>
      )}
    </Box>
  );
};
export default HeaderTitle;
