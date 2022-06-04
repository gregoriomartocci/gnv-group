import React, { Fragment } from "react";
import { Avatar, Box, IconButton } from "@mui/material";
import { MenuContainer } from "./Styles";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Menu = () => {
  return (
    <Box sx={MenuContainer}>
      <Box>
        <IconButton aria-label="delete">
          <MenuIcon />
        </IconButton>
      </Box>
      <Box style={{ display: "flex", alignItems: "center" }}>
        <Avatar
          style={{ margin: "0 10px" }}
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
        />

        <IconButton aria-label="delete">
          <KeyboardArrowDownIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Menu;
