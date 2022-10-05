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
}

const HeaderTitle = ({
  title,
  description,
  titleFontSize,
  descriptionFontSize,
  descriptionTextAlign,
  fontWeight,
  color,
  width,
  titlePadding,
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
            maxWidth: "600px",
            fontFamily: "'Poppins', sans-serif",
            color: `${color ? color : "#424242"}`,
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
