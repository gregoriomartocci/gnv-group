import React, { useEffect } from "react";
import { Box } from "@mui/material";
import Menu from "../../components/Menu";
import Auth from "../../components/Auth";

export interface ILogin {
  img: string;
}

const Login = () => {
  return (
    <Box>
      <Menu onScroll={false} relative backgroundColor="#fff" />
      <Auth
        img="https://res.cloudinary.com/gregomartocci/image/upload/v1657430588/owperet7603w21sgbf7w.jpg"
        auth="sign-in"
      />
    </Box>
  );
};

export default Login;
