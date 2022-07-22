import { SxProps, Theme } from "@mui/material";

const black = "#212121";

export const SidebarContainer: SxProps<Theme> = {
  height: "100vh",
  width: "250px",
  backgroundColor: black,
};

export const MenuItems: SxProps<Theme> = {
  width: "100%",
  backgroundColor: black,
  padding: "0px 15px",

  span: {
    fontSize: "12px",
    fontFamily: "Poppins",
    color: "#fff",
    fontWeight: "600",
    margin: "10px 0",
  },
};

export const MenuItem: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  margin: "15px 5px",
  color: "#eeeeee",
  cursor: "pointer",
  padding: "0px 10px",

  // "&:hover": {
  //   backgroundColor: "#616161",
  // },

  span: {
    fontSize: "12px",
    fontFamily: "Poppins",
    fontWeight: "600",
    margin: "10px 5px",
  },
};

export const Logo: SxProps<Theme> = {
  // fontFamily: "Poppins, sans-serif",
  fontFamily: "'Montserrat', sans-serif",
  color: "#fff",
};
