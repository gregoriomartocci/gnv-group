import { Box, IconButton } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import { Fragment, useState } from "react";
import {
  AccountIcon,
  CloseIcon,
  HamburguerMenu,
  LogoStyle,
  MenuContainer,
  MenuContainerDark,
  MenuContainerOnScroll,
  MenuContainerRelative,
  MenuContent,
  MenuItem,
  MenuItems,
} from "./Styles";
import UseModal from "../Modal";
import Auth from "../Auth";
import ResponsiveMenu from "../Responsive-Menu";
import Dropdown from "../Dropdown";
import { useSelector } from "react-redux";
import { IAuth } from "../../redux/slices/auth";
import Account from "../Account";
import Link from "next/link";
import { IProject } from "../../pages/profile/news";
import { TResult } from "../../redux/slices/projects";
import { IArticle } from "../../redux/slices/articles";

import logo from "../../assets/logo/logo.svg";
import Logo from "../Logo";

export interface IState {
  articles: {
    articles: IArticle[];
    project: IProject;
    actions: boolean;
    create: TResult;
    delete: TResult;
    update: TResult;
  };
  timeline: {
    projects: IProject[];
    projects_filter: IProject[];
    project: IProject;
    actions: boolean;
    create: TResult;
    delete: TResult;
    update: TResult;
  };
  users: {};
  auth: IAuth;
}

export interface IMenu {
  onScroll?: boolean;
  theme?: string;
  relative?: boolean;
  color?: string;
  backgroundColor?: string;
}

const Menu = ({ onScroll, color, backgroundColor, relative }: IMenu) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [selectAuth, setSelectAuth] = useState("sign-up");
  const { data } = useSelector((state: IState) => state?.auth);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const openBasicMenu = Boolean(anchorEl);
  const [navbar, setNavbar] = useState(false);

  const handleCloseBasicMenu = () => {
    setAnchorEl(null);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const toggleDropdown = () => {
    setOpenDropdown(!openDropdown);
  };

  const changeBackground = () => {
    if (window.scrollY >= 40) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  if (typeof window !== "undefined") {
    // Client-side-only code
    window.addEventListener("scroll", changeBackground);
  }

  return (
    <Fragment>
      <ResponsiveMenu Open={openDropdown} Toggle={toggleDropdown} />
      <Box
        sx={
          onScroll
            ? navbar
              ? MenuContainerOnScroll
              : { ...MenuContainer, color, backgroundColor }
            : { ...MenuContainer, color, backgroundColor }
        }
      >
        <Box sx={relative ? MenuContainerRelative : MenuContent}>
          <Box>
            <Link href={"/"}>
              <a>
                <Box sx={LogoStyle}>
                  <Logo
                    color={onScroll ? !navbar && color : color}
                    width="130px"
                  />
                </Box>
              </a>
            </Link>
          </Box>
          <Box sx={MenuItems}>
            <Link href={"/company"}>
              <a>
                <Box sx={MenuItem}>Compañía</Box>
              </a>
            </Link>
            <Link href={"/ventures"}>
              <a>
                <Box sx={MenuItem}>Emprendimientos</Box>
              </a>
            </Link>
            <Link href={"/news"}>
              <a>
                <Box sx={MenuItem}>Prensa</Box>
              </a>
            </Link>
            <Link href={"/home/#contact"}>
              <a>
                <Box sx={MenuItem}>Contacto</Box>
              </a>
            </Link>
          </Box>
          <Box>
            <IconButton
              sx={HamburguerMenu}
              onClick={toggleDropdown}
              aria-label="delete"
            >
              <MenuIcon
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: `${navbar ? "#212121" : color} `,
                }}
                fontSize="inherit"
              />
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
