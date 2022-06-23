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
import UseModal from "../Modal";
import Auth from "../Auth";
import AuthImage from "../../assets/images/Image-1.jpg";
import ResponsiveMenu from "../ResponsiveMenu";
import Dropdown from "../Dropdown";
import { useSelector } from "react-redux";
import { IAuth } from "../../redux/slices/auth";
import Account from "../Account";
export interface IState {
  articles: {};
  projects: { projects: any; project: any };
  users: {};
  auth: IAuth;
}

const Menu = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [selectAuth, setSelectAuth] = useState("sign-up");
  const { data } = useSelector((state: IState) => state?.auth);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const openBasicMenu = Boolean(anchorEl);

  const handleClickBasicMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseBasicMenu = () => {
    setAnchorEl(null);
  };

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
        <Auth auth={selectAuth} img={AuthImage} />
      </UseModal>
      <ResponsiveMenu Open={openDropdown} Toggle={toggleDropdown} />
      <Box sx={MenuContainer}>
        <Box sx={MenuContent}>
          <Box sx={Logo}>GNV Group</Box>
          <Box sx={MenuItems}>
            <Box sx={MenuItem}>Proyectos</Box>
            <Box sx={MenuItem}>Novedades</Box>
            <Box sx={MenuItem}>Inversores</Box>
            <Box sx={MenuItem}>
              <IconButton
                sx={AccountIcon}
                id="basic-button"
                aria-controls={openBasicMenu ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={openBasicMenu ? "true" : undefined}
                onClick={data?.user !== "" ? handleClickBasicMenu : handleOpen}
              >
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
      <Dropdown
        open={data?.user !== "" && openBasicMenu}
        handleClose={handleCloseBasicMenu}
        anchorEl={anchorEl}
      >
        <Account handleClose={handleCloseBasicMenu} />
      </Dropdown>
    </Fragment>
  );
};

export default Menu;
