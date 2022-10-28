import React from "react";
import { Box, Divider } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LogoutIcon from "@mui/icons-material/Logout";
import HelpIcon from "@mui/icons-material/Help";
import { AccountBottom, AccountContainer, AccountTop } from "./Styles";
import AccountMenuItem from "./Components/AccountMenuItems";
import { useDispatch } from "react-redux";
import { setAuth } from "../../redux/slices/auth";

const menuItems = {
  mid: [
    {
      icon: <AccountCircleIcon />,
      text: "Perfil",
      route: "/profile",
    },
  ],
  logout: [
    {
      icon: <LogoutIcon />,
      text: "Cerrar Sesión",
      route: "",
    },
  ],
};

interface IAccount {
  handleClose: any;
}

const Account = ({ handleClose }: IAccount) => {
  const dispatch = useDispatch();

  const SignOut = () => {
    localStorage.removeItem("auth");
    dispatch(setAuth({ user: "", token: "" }));
    handleClose();
  };

  return (
    <Box sx={AccountContainer}>
      <Box>
        {menuItems?.mid?.map(({ icon, text, route }, index) => (
          <Box sx={{ padding: "5px 0" }} key={index}>
            <AccountMenuItem
              key={index}
              icon={icon}
              text={text}
              route={route}
            />
          </Box>
        ))}
      </Box>
      <Divider sx={{ my: 0.5 }} />
      <Box sx={AccountBottom}>
        {menuItems?.logout?.map(({ icon, text, route }, index) => (
          <Box sx={{ padding: "5px 0" }} key={index}>
            <AccountMenuItem
              key={index}
              icon={icon}
              text={text}
              route={route}
              action={SignOut}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Account;
