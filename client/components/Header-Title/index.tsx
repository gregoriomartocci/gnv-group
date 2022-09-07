import React from "react";
import { Box, Typography } from "@mui/material";
import { width } from "@mui/system";

interface IHeaderTitle {
  title?: string;
  description?: string;
  titleFontSize?: string;
  descriptionFontSize?: string;
  fontWeight?: number;
  p?: string;
  color?: string;
  width?: string;
}

const HeaderTitle = ({
  title,
  description,
  titleFontSize,
  descriptionFontSize,
  fontWeight,
  color,
  width,
  p,
}: IHeaderTitle) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",

        padding: `${p}`,
        fontFamily: "'Poppins', sans-serif",
        textAlign: "center",
      }}
    >
      {title ? (
        <Typography
          sx={{
            fontSize: titleFontSize,
            margin: "20px 0",
            fontWeight: `${fontWeight ? fontWeight : 500}`,
            width: `${width ? width : "100%"}`,
            fontFamily: "'Poppins', sans-serif",
            color: `${color ? color : "#424242"}`,
          }}
        >
          {title}
        </Typography>
      ) : null}
      {description && (
        <Typography
          sx={{
            fontSize: descriptionFontSize,
            margin: "15px 0",
            fontWeight: 500,
            color: `${color ? color : "#424242"}`,
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          {description}
        </Typography>
      )}
    </Box>
  );
};
export default HeaderTitle;
