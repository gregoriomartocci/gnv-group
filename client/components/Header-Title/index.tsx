import React from "react";
import { Box, Typography } from "@mui/material";

interface IHeaderTitle {
  title?: string;
  description?: string;
  titleFontSize?: string;
  descriptionFontSize?: string;
  fontWeight?: number;
  p?: string;
}

const HeaderTitle = ({
  title,
  description,
  titleFontSize,
  descriptionFontSize,
  fontWeight,
  p,
}: IHeaderTitle) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        fontWeight: `${fontWeight ? fontWeight : 400}`,
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
            fontWeight: 600,
            fontFamily: "'Poppins', sans-serif",
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
            color: "#424242",
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
