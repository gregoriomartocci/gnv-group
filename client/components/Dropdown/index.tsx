import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Box } from "@mui/material";
import { DropdownContainer, Ok } from "./Styles";

export interface IBasicMenu {
  children: any;
  open: any;
  handleClose: any;
  anchorEl: any;
}

export default function Dropdown({
  children,
  open,
  anchorEl,
  handleClose,
}: IBasicMenu) {
  return (
    <Box sx={DropdownContainer}>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {children}
      </Menu>
    </Box>
  );
}
