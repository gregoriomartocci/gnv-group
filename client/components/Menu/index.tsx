import { Box, IconButton } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Fragment } from "react";
import {
  AccountIcon,
  Logo,
  MenuContainer,
  MenuContent,
  MenuItem,
  MenuItems,
} from "./Styles";

const Menu = () => {
  return (
    <Fragment>
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
          </Box>
        </Box>
      </Box>
    </Fragment>
  );
};

export default Menu;
