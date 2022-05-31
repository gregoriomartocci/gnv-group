import { IconButton } from "@mui/material";
import {
  Logo,
  MenuContainer,
  MenuContent,
  MenuItem,
  MenuItems,
} from "./Styles";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Menu = () => {
  return (
    <MenuContainer>
      <MenuContent>
        <Logo>Consultatio</Logo>

        <MenuItems>
          <MenuItem>Proyectos</MenuItem>
          <MenuItem>Novedades</MenuItem>
          <MenuItem>Inversores</MenuItem>
          <MenuItem>
            <IconButton>
              <AccountCircleIcon />
            </IconButton>
          </MenuItem>
        </MenuItems>
      </MenuContent>
    </MenuContainer>
  );
};

export default Menu;
