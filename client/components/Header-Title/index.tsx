import React from "react";
import { Box, Typography } from "@mui/material";

interface IHeaderTitle {
  title: string;
  description: string;
}

const HeaderTitle = ({ title, description }: IHeaderTitle) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
        padding: "10% 20% 0 20%",
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
      <Typography
        sx={{
          fontSize: "20px",
          margin: "15px 0",
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        {description}
      </Typography>
    </Box>
  );
};
export default HeaderTitle;
