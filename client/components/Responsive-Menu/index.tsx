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
import Link from "next/link";

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
      {/* {Open && ( */}
      <Box
        sx={{
          display: "flex",
          position: "fixed",
          alignItems: "center",
          zIndex: 5000,
          height: "100vh",
          width: "100vw",
          pointerEvents: "none",
          backgroundColor: `${Open ? "rgba(0, 0, 0, 0.3)" : ""}`,
          transition: "all 1.5s ease",
          overflow: `${Open ? "hidden" : "none"}`,
        }}
      >
        <Box
          sx={DropdownContainer}
          style={{
            transform: `${Open ? "" : "translateX(100%)"}`,
            // transition: "all 2s ease",
          }}
        >
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
                  <Link href={item?.link}>
                    <a>{item?.title}</a>
                  </Link>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>
      {/* )} */}
    </Fragment>
  );
};

export default ResponsiveMenu;
