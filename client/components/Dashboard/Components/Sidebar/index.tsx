import React from "react";
import { Box } from "@mui/material";
import { MenuItem, MenuItems, SidebarContainer } from "./Styles";
import ApartmentIcon from "@mui/icons-material/Apartment";
import GroupIcon from "@mui/icons-material/Group";
import Link from "next/link";
import ArticleIcon from "@mui/icons-material/Article";
import AutoAwesomeMosaicIcon from "@mui/icons-material/AutoAwesomeMosaic";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import PaletteIcon from "@mui/icons-material/Palette";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import Logo from "../../../Logo";
import { useRouter } from "next/router";

const Sidebar = () => {
  const router = useRouter();
  const { pathname } = router;
  
  console.log(pathname, "Juan Roman Riquelme");
  
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

            <Logo color="#fff" width="130px" />
          </a>
        </Link>
      </Box>
      <Box sx={{ padding: "15px", height: "calc(100% - 80px)" }}>
        <Box sx={MenuItems}>
          {/* <Link href={"/profile/layout"}>
            <a>
              <Box sx={MenuItem}>
                <AutoAwesomeMosaicIcon
                  sx={{ margin: "0px 10px 0px 0px", fontSize: "20px" }}
                />
                <span>Personalizar</span>
              </Box>
            </a>
          </Link> */}

          <Link href={"/profile/ventures"}>
            <a>
              <Box sx={MenuItem}>
                <ApartmentIcon
                  sx={{ margin: "0px 10px 0px 0px", fontSize: "20px" }}
                />
                <span>Emprendimientos</span>
              </Box>
            </a>
          </Link>

          <Link href={"/profile/timeline"}>
            <a>
              <Box sx={MenuItem}>
                <AccessTimeOutlinedIcon
                  sx={{ margin: "0px 10px 0px 0px", fontSize: "20px" }}
                />
                <span>Linea del tiempo</span>
              </Box>
            </a>
          </Link>

          <Link href={"/profile/news"}>
            <a>
              <Box sx={MenuItem}>
                <ArticleIcon
                  sx={{ margin: "0px 10px 0px 0px", fontSize: "20px" }}
                />
                <span>Noticias</span>
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

          <Link href={"/profile/gallery"}>
            <a>
              <Box sx={MenuItem}>
                <PaletteIcon
                  sx={{ margin: "0px 10px 0px 0px", fontSize: "20px" }}
                />
                <span>Galeria de Arte</span>
              </Box>
            </a>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
