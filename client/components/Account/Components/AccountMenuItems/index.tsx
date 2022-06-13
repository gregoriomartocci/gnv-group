import React from "react";
import { Box, MenuItem } from "@mui/material";
import {
  AccountMenuItemContainer,
  AccountMenuItemIcon,
  AccountMenuItemText,
} from "./Styles";
import Link from "next/link";

export interface IAccountMenuItem {
  icon: any;
  text: string;
  route: string;
  action?: any;
}

const AccountMenuItem = ({ icon, text, route, action }: IAccountMenuItem) => {
  return (
    <Link href={route ? route : ""}>
      <a>
        <MenuItem sx={{ width: "100%" }} onClick={action}>
          <Box sx={AccountMenuItemContainer}>
            <Box sx={AccountMenuItemIcon}>{icon}</Box>
            <Box sx={AccountMenuItemText}>{text}</Box>
          </Box>
        </MenuItem>
      </a>
    </Link>
  );
};

export default AccountMenuItem;
