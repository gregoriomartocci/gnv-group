import React, { Fragment } from "react";
import { Box } from "@mui/material";
import { StaticImageData } from "next/image";
import { AuthContainer, AuthImage, Login } from "./Styles";
import InputGroup from "../Input";
import Button from "../Button";
import { Link } from "react-router-dom";
import { createBrowserHistory } from "history";

export interface IAuthProps {
  auth: string;
  img: StaticImageData;
}

const Auth = ({ auth, img }: IAuthProps) => {
  const history = createBrowserHistory();

  const toDashboard = () => {
    return history.push("/profile");
  };

  return (
    <Box sx={AuthContainer}>
      <Box sx={AuthImage}>
        <img src={img?.src} alt="auth" />
      </Box>
      {auth === "login" ? (
        <Box sx={Login}>
          <span
            style={{
              fontSize: "35px",
              fontWeight: 600,
              margin: "10px 0",
              color: "#424242",
            }}
          >
            Login
          </span>
          <InputGroup
            name="email"
            description="Enter your email"
            label="Email address"
            type="text"
          />
          <InputGroup
            name="password"
            description="Enter your password"
            label="Password"
            type="password"
          />

          <Box onClick={toDashboard}>
            <Button type="Auth">Sign In</Button>
          </Box>

          {/* Already have an account? <span>Sign in</span> */}
        </Box>
      ) : (
        <Box>Auth</Box>
      )}
    </Box>
  );
};

export default Auth;