import React from "react";
import { Box, Typography } from "@mui/material";

interface IHeaderTitle {
  title?: string;
  description?: string;
  fontSize?: string;
  height?: number;
  width?: number;
}

const HeaderTitle = ({ title, description, height, width, fontSize }: IHeaderTitle) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: `${height}% ${width}%`,
        fontFamily: "'Poppins', sans-serif",
        textAlign: "center",
      }}
    >
      {title ? (
        <Typography
          sx={{
            fontSize: "35px",
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
            fontSize,
            margin: "15px 0",
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
