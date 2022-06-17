import React from "react";
import { Box } from "@mui/material";
import { MenuItem, MenuItems, SidebarContainer } from "./Styles";
import ApartmentIcon from "@mui/icons-material/Apartment";
import GroupIcon from "@mui/icons-material/Group";
import Link from "next/link";

const Sidebar = () => {
  return (
    <Box sx={SidebarContainer}>
      <Box sx={{ height: "80px", width: "100%" }}></Box>
      <Box sx={{ padding: "15px", height: "calc(100% - 80px)" }}>
        <Box sx={MenuItems}>
          <span> ADMINISTRAR CONTENIDO</span>

          <Link href={"/profile/projects"}>
            <a>
              <Box sx={MenuItem}>
                <ApartmentIcon
                  sx={{ margin: "0px 10px 0px 0px", fontSize: "20px" }}
                />
                <span>Proyectos</span>
              </Box>
            </a>
          </Link>

          <Link href={"/profile/users"}>
            <a>
              <Box sx={MenuItem}>
                <GroupIcon
                  sx={{ margin: "0px 10px 0px 0px", fontSize: "20px" }}
                />
                <span>Usuarios</span>
              </Box>
            </a>
          </Link>

          <Box sx={MenuItem}></Box>
          <Box sx={MenuItem}></Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
