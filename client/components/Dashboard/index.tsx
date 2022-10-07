import React from "react";
import { Box } from "@mui/material";
import Sidebar from "./Components/Sidebar";
import Menu from "./Components/Menu";
import Main from "./Components/Main";

interface IDahboard {
  children: any;
}

const Dashboard = ({ children }: IDahboard) => {
  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        overflowY: "hidden",
        fontFamily: "Montserrat sans-serif",
      }}
    >
      <Sidebar />
      <Box sx={{ height: "100%", width: "100%" }}>
        <Menu />
        <Main>{children}</Main>
      </Box>
    </Box>
  );
};

export default Dashboard;
