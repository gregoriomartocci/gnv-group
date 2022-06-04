import { SxProps, Theme } from "@mui/material";

const darkBlue = "#0B2559";

export const SidebarContainer: SxProps<Theme> = {
  height: "100%",
  width: "250px",
  backgroundColor: darkBlue,
};

export const MenuItems: SxProps<Theme> = {
  width: "100%",
  backgroundColor: darkBlue,
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
  backgroundColor: "#0B2559",
  cursor: "pointer",
  borderRadius: "7.5px",
  padding: "0px 10px",


  "&:hover": {
    backgroundColor: "#0C2E6E",
  },

  span: {
    fontSize: "12px",
    fontFamily: "Poppins",
    fontWeight: "600",
    margin: "10px 5px",
  },
};
