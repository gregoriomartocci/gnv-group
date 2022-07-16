import React from "react";
import { Box } from "@mui/material";
import Main from "../../components/Main";
import { SliderData } from "../../data/SliderData";
import Menu from "../../components/Menu";
import HeaderTitle from "../../components/Header-Title";
import Footer from "../../components/Footer";
import { ImageContainer } from "./Styles";
import SignIn from "../../components/Auth/Components/Sign-In";
import Auth from "../../components/Auth";

export interface ILogin {
  img: string;
}

const Login = () => {
  return (
    <Box>
      <Menu onScroll={false} relative/>
      <Auth
        img="https://res.cloudinary.com/gregomartocci/image/upload/v1657430588/owperet7603w21sgbf7w.jpg"
        auth="sign-in"
      />
    </Box>
  );
};

export default Login;
