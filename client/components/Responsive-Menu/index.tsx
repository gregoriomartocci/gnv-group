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

import Link from "next/link";
import useWindowDimensions from "../../hooks/ScreenSize";
import Logo from "../Logo";

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
  const { height, width } = useWindowDimensions();

  const sm = width ? width < 768 : false;

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
            transition: "1s",
            overflow: `${Open ? "hidden" : "none"}`,
          }}
        >
          <Box
            sx={DropdownContainer}
            style={{
              transform: `${Open ? "" : "translateX(100%)"}`,
              transition: "all 1s ease",
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
                    <Box sx={DropdownLink}>
                      <Link href={item?.link}>
                        <a>{item?.title}</a>
                      </Link>
                    </Box>
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
              <Logo color="#212121" width="125px" />
            </Box>
          </Box>
        </Box>
      ) : null}

      {/* )} */}
    </Fragment>
  );
};

export default ResponsiveMenu;
