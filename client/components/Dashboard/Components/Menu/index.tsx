import React, { Fragment, useState } from "react";
import { Avatar, Box, IconButton } from "@mui/material";
import { MenuContainer } from "./Styles";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useSelector } from "react-redux";
import { IState } from "../../../Menu";
import Dropdown from "../../../Dropdown";
import Account from "../../../Account";

const Menu = () => {
  const { data } = useSelector((state: IState) => state?.auth);
  const { email } = useSelector((state) => state?.auth);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const openBasicMenu = Boolean(anchorEl);

  const handleClickBasicMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseBasicMenu = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={MenuContainer}>
      <Box>
        <IconButton aria-label="delete">
          <MenuIcon />
        </IconButton>
      </Box>
      <Box style={{ display: "flex", alignItems: "center" }}>
        <Avatar style={{ margin: "0 10px" }} alt={data?.user?.name} />

        <IconButton aria-label="delete" onClick={handleClickBasicMenu}>
          <KeyboardArrowDownIcon />
        </IconButton>

        <Dropdown
          open={data?.user !== "" && openBasicMenu}
          handleClose={handleCloseBasicMenu}
          anchorEl={anchorEl}
        >
          <Account handleClose={handleCloseBasicMenu} />
        </Dropdown>
      </Box>
    </Box>
  );
};

export default Menu;
