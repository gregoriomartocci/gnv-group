import { Box, CircularProgress } from "@mui/material";
import React from "react";
import { Bars } from "react-loader-spinner";
import Logo from "../Logo";

const LoadingScreen = ({ loading }) => {
  return (
    <Box
      sx={{
        display: "flex",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 10000,
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
        backgroundColor: "#fff",
        opacity: loading ? 1 : 0,
        transition: "opacity 0.5s",
        overflowY: "hidden",
        pointerEvents: "none",
      }}
    >
      <Box sx={{ padding: "20px" }}>
        <Bars height="40" width="40" color="#21212" visible={true} />
      </Box>
    </Box>
  );
};

export default LoadingScreen;
