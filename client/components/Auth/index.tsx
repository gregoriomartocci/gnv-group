import React from "react";
import { Box } from "@mui/material";
import { StaticImageData } from "next/image";
import { AuthContainer, AuthImage, Login } from "./Styles";

import Link from "next/link";
import SignUp from "./Components/Sign-Up";
import SignIn from "./Components/Sign-In";

export interface IAuthProps {
  auth: string;
  img: StaticImageData;
}

export type inputType = {
  name: string;
  email: string;
  password: string;
};

export type errorType = {
  auth: string;
  message: any;
};

const Auth = ({ auth, img }: IAuthProps) => {
  return (
    <Box sx={AuthContainer}>
      <Box sx={AuthImage}>
        <img src={img?.src} alt="auth" />
      </Box>
      {auth === "sign-in" ? (
        <SignIn img={img} />
      ) : (
        auth === "sign-up" && <SignUp img={img} />
      )}
    </Box>
  );
};

export default Auth;
