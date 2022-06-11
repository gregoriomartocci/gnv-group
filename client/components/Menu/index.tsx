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
import UseModal from "../Modal";
import Auth from "../Auth";
import AuthImage from "../../assets/images/Image-1.jpg";

const Menu = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [auth, setAuth] = useState("sign-up");

  const handleOpen = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const toggleDropdown = () => {
    setOpenDropdown(!openDropdown);
  };

  return (
    <Fragment>
      <UseModal open={openModal} handleClose={handleCloseModal}>
        <Auth auth={auth} img={AuthImage} />
      </UseModal>
      <Dropdown Open={openDropdown} Toggle={toggleDropdown} />
      <Box sx={MenuContainer}>
        <Box sx={MenuContent}>
          <Box sx={Logo}>GNV Group</Box>
          <Box sx={MenuItems}>
            <Box sx={MenuItem}>Proyectos</Box>
            <Box sx={MenuItem}>Novedades</Box>
            <Box sx={MenuItem}>Inversores</Box>
            <Box sx={MenuItem}>
              <IconButton sx={AccountIcon} onClick={handleOpen}>
                <AccountCircleIcon />
              </IconButton>
            </Box>
            <IconButton
              sx={CloseIcon}
              onClick={toggleDropdown}
              aria-label="delete"
            >
              <MenuIcon fontSize="inherit" />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Fragment>
  );
};

export default Menu;
