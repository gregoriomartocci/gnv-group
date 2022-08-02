import React from "react";
import { Box } from "@mui/material";
import { DashboardContainer } from "./Styles";
import Sidebar from "./Components/Sidebar";
import Menu from "./Components/Menu";
import Main from "./Components/Main";

interface IDahboard {
  children: any;
}

const Dashboard = ({ children }: IDahboard) => {
  return (
    <Box sx={DashboardContainer}>
      <Sidebar />
      <Box sx={{ height: "100%", width: "100%" }}>
        <Menu />
        <Main>{children}</Main>
      </Box>
    </Box>
  );
};

export default Dashboard;
