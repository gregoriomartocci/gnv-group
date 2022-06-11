import React from "react";
import { Box, MenuItem } from "@mui/material";
import {
  AccountMenuItemContainer,
  AccountMenuItemIcon,
  AccountMenuItemText,
} from "./Styles";

export interface IAccountMenuItem {
  icon: any;
  text: string;
}

const AccountMenuItem = ({ icon, text }: IAccountMenuItem) => {
  return (
    <MenuItem>
      <Box sx={AccountMenuItemContainer}>
        <Box sx={AccountMenuItemIcon}>{icon}</Box>
        <Box sx={AccountMenuItemText}>{text}</Box>
      </Box>
    </MenuItem>
  );
};

export default AccountMenuItem;
