import React, { Fragment, ReactNode, useState } from "react";
import { Box, IconButton } from "@mui/material";
import {
  Button,
  CloseResponsiveMenu,
  DropdownContainer,
  DropdownLink,
  DropdownMenu,
} from "./Styles";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

export const menuData = [
  { title: "Compañia", link: "/company" },
  { title: "Emprendimientos", link: "/ventures" },
  { title: "Prensa", link: "/news" },
  { title: "Contacto", link: "/home/#contact" },
];

export interface ImenuData {
  title: string;
  link: string;
}

export interface IDropdownProps {
  Open: boolean;
  Toggle: any;
}

const ResponsiveMenu = ({ Open, Toggle }: IDropdownProps) => {
  return (
    <Fragment>
      {Open && (
        <Box sx={DropdownContainer}>
          <IconButton
            sx={CloseResponsiveMenu}
            onClick={Toggle}
            aria-label="delete"
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
          <Box sx={DropdownMenu}>
            {menuData?.map((item: ImenuData, index: number): any => {
              return (
                <Box sx={DropdownLink}>
                  {/* <Link to={item?.link} key={index}> */}
                  {item?.title}
                  {/* </Link> */}
                </Box>
              );
            })}
          </Box>
        </Box>
      )}
    </Fragment>
  );
};

export default ResponsiveMenu;
