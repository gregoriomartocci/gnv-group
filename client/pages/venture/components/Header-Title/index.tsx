import { Box, Typography } from "@mui/material";
import React from "react";

const HeaderTitle = ({ title, description }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        padding: "0px 10%",
        width: "100%",
      }}
    >
      <Box sx={{ width: "100%", padding: "50px" }}>
        <Typography sx={{ fontSize: "45px", fontWeight: 700 }}>
          {title}
        </Typography>
      </Box>
      <Box sx={{ width: "100%", padding: "25px 0 0 0" }}>
        <Typography sx={{ fontSize: "24px", fontWeight: 400 }}>{description}</Typography>
      </Box>
    </Box>
  );
};

export default HeaderTitle;
