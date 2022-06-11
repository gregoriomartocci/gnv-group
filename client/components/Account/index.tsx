import React from "react";
import { Box } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LogoutIcon from "@mui/icons-material/Logout";
import HelpIcon from "@mui/icons-material/Help";
import {
  AccountBottom,
  AccountContainer,
  AccountMid,
  AccountTop,
} from "./Styles";
import AccountMenuItem from "./Components/AccountMenuItems";

const menuItems = {
  mid: [
    {
      icon: <AccountCircleIcon />,
      text: "Profile",
    },

    {
      icon: <SettingsIcon />,
      text: "Settings",
    },

    {
      icon: <DashboardIcon />,
      text: "Profile",
    },

    {
      icon: <HelpIcon />,
      text: "Help & Support",
    },
  ],
  logout: {
    icon: <LogoutIcon />,
    text: "Logout",
  },
};

const Account = () => {
  return (
    <Box sx={AccountContainer}>
      <Box sx={AccountTop}>
        <Box></Box>
        <Box></Box>
      </Box>
      <Box sx={AccountMid}>
        {menuItems?.mid?.map(({ icon, text }, index) => (
          <AccountMenuItem key={index} icon={icon} text={text} />
        ))}
      </Box>
      <Box sx={AccountBottom}>
        <Box></Box>
        <Box></Box>
      </Box>
    </Box>
  );
};

export default Account;
