import { Box, CircularProgress } from "@mui/material";
import React from "react";
import Logo from "../Logo";

const LoadingScreen = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
      }}
    >
      <Box>
        <Logo color="#212121" width="130px" />
      </Box>
      <Box sx={{ padding: "20px" }}>
        <CircularProgress style={{ color: "#fff" }} />
      </Box>
    </Box>
  );
};

export default LoadingScreen;
