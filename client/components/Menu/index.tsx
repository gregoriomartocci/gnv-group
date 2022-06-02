import { Box, IconButton } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import { Fragment, useState } from "react";
import {
  AccountIcon,
  CloseIcon,
  Logo,
  MenuContainer,
  MenuContent,
  MenuItem,
  MenuItems,
} from "./Styles";
import Dropdown from "../Dropdown";

const Menu = () => {
  const [Open, setOpen] = useState(false);

  const Toggle = () => {
    setOpen(!Open);
  };

  return (
    <Fragment>
      <Dropdown Open={Open} Toggle={Toggle} />
      <Box sx={MenuContainer}>
        <Box sx={MenuContent}>
          <Box sx={Logo}>Consultatio</Box>
          <Box sx={MenuItems}>
            <Box sx={MenuItem}>Proyectos</Box>
            <Box sx={MenuItem}>Novedades</Box>
            <Box sx={MenuItem}>Inversores</Box>
            <Box sx={MenuItem}>
              <IconButton sx={AccountIcon}>
                <AccountCircleIcon />
              </IconButton>
            </Box>
            <IconButton sx={CloseIcon} onClick={Toggle} aria-label="delete">
              <MenuIcon fontSize="inherit" />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Fragment>
  );
};

export default Menu;
