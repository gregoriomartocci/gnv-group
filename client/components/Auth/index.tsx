import React from "react";
import { Box } from "@mui/material";
import { StaticImageData } from "next/image";
import { AuthContainer, AuthImage, Login } from "./Styles";

import Link from "next/link";
import SignUp from "./Components/Sign-Up";
import SignIn from "./Components/Sign-In";

export interface IAuthProps {
  img: StaticImageData | string;
}

export type inputType = {
  name: string;
  email: string;
  password: string;
};

export type errorType = {
  message: any;
};

const Auth = ({ img }: IAuthProps) => {
  return (
    <Box sx={AuthContainer}>
      <Box sx={AuthImage}>
        <img src={img} alt="auth" />
      </Box>
      <SignIn img={img} />
    </Box>
  );
};

export default Auth;
