import React, { Fragment, ReactNode, useState } from "react";
import { Box, IconButton } from "@mui/material";
import {
  CloseResponsiveMenu,
  DropdownContainer,
  DropdownLink,
  DropdownMenu,
} from "./Styles";
import CloseIcon from "@mui/icons-material/Close";

import Link from "next/link";
import useWindowDimensions from "../../hooks/ScreenSize";
import Logo from "../Logo";

export const menuData = [
  { title: "Home", link: "/" },
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
  const { height, width } = useWindowDimensions();

  const sm = width ? width < 900 : false;
  // const sm = false;

  return (
    <Fragment>
      {sm ? (
        <Box
          sx={{
            display: "flex",
            position: "fixed",
            alignItems: "center",
            zIndex: 5000,
            height: "100vh",
            width: "100vw",
            pointerEvents: Open ? "auto" : "none",
            backgroundColor: `${Open ? "rgba(0, 0, 0, 0.3)" : ""}`,
            transition: "0.35s",
            overflow: `${Open ? "hidden" : "none"}`,
          }}
        >
          <Box
            sx={DropdownContainer}
            style={{
              transform: `${Open ? "" : "translateX(100%)"}`,
              transition: "all 0.35s ease",
            }}
          >
            <Box sx={{ width: "100%" }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  padding: "0 40px",
                }}
              >
                <IconButton
                  sx={CloseResponsiveMenu}
                  onClick={Toggle}
                  aria-label="delete"
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              </Box>
              <Box sx={DropdownMenu}>
                {menuData?.map((item: ImenuData, index: number): any => {
                  return (
                    <Link href={item?.link} key={index}>
                      <a style={{ width: "100%" }}>
                        <Box sx={DropdownLink}>{item?.title}</Box>
                      </a>
                    </Link>
                  );
                })}
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                padding: "15px 50px",
                width: "100%",
              }}
            >
              <Logo color="#212121" width="130px" />
            </Box>
          </Box>
        </Box>
      ) : null}

      {/* )} */}
    </Fragment>
  );
};

export default ResponsiveMenu;
