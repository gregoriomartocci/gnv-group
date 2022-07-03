import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Box, Popover } from "@mui/material";
import { DropdownContainer } from "./Styles";

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
      <Popover
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        disableScrollLock
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {children}
      </Popover>
    </Box>
  );
}
