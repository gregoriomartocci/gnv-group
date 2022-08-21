import React from "react";
import { Box, Typography } from "@mui/material";

interface IHeaderTitle {
  title?: string;
  description?: string;
  fontSize?: string;
  px?: string;
  py?: string;
}

const HeaderTitle = ({
  title,
  description,
  py,
  px,
  fontSize,
}: IHeaderTitle) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: `${py} ${px}`,
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
