import React from "react";
import { Box } from "@mui/material";
import { MenuItem, MenuItems, SidebarContainer } from "./Styles";
import ApartmentIcon from "@mui/icons-material/Apartment";
import GroupIcon from "@mui/icons-material/Group";
import Link from "next/link";
import ArticleIcon from "@mui/icons-material/Article";
import Logo from "../../../Logo";

const Sidebar = () => {
  return (
    <Box sx={SidebarContainer}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "80px",
          width: "100%",
        }}
      >
        <Link href={"/"}>
          <a>
            {/* <Box sx={Logo}>GNV</Box> */}

            <Logo theme={"light"} width="125px" />
          </a>
        </Link>
      </Box>
      <Box sx={{ padding: "15px", height: "calc(100% - 80px)" }}>
        <Box sx={MenuItems}>
          <span> ADMINISTRAR CONTENIDO</span>

          <Link href={"/profile/projects"}>
            <a>
              <Box sx={MenuItem}>
                <ApartmentIcon
                  sx={{ margin: "0px 10px 0px 0px", fontSize: "20px" }}
                />
                <span>Emprendimientos</span>
              </Box>
            </a>
          </Link>

          <Link href={"/profile/articles"}>
            <a>
              <Box sx={MenuItem}>
                <ArticleIcon
                  sx={{ margin: "0px 10px 0px 0px", fontSize: "20px" }}
                />
                <span>Noticias</span>
              </Box>
            </a>
          </Link>

          {/* <Link href={"/profile/users"}>
            <a>
              <Box sx={MenuItem}>
                <GroupIcon
                  sx={{ margin: "0px 10px 0px 0px", fontSize: "20px" }}
                />
                <span>Usuarios</span>
              </Box>
            </a>
          </Link> */}
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
