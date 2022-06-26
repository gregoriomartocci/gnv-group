import React from "react";
import { Box, Typography } from "@mui/material";

interface IHeaderTitle {
  title: string;
  description?: string;
}

const HeaderTitle = ({ title, description }: IHeaderTitle) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: "5% 20%",
        fontFamily: "'Poppins', sans-serif",
        textAlign: "center",
      }}
    >
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
      {description && (
        <Typography
          sx={{
            fontSize: "20px",
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
