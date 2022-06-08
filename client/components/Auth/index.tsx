import React, { Fragment, useState } from "react";
import { Alert, Box } from "@mui/material";
import { StaticImageData } from "next/image";
import { AuthContainer, AuthImage, Login } from "./Styles";
import InputGroup from "../Input";
import Link from "next/link";
import UseButton from "../Button";
import axios from "axios";

export interface IAuthProps {
  auth: string;
  img: StaticImageData;
}

export type inputType = {
  name: string;
  email: string;
  password: string;
};

const Auth = ({ auth, img }: IAuthProps) => {
  const [input, setInput] = useState<inputType>({
    name: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (e: any) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitHandler = async () => {
    try {
      const { data } = await axios.post(
        "http://localhost:8000/api/signup",
        input
      );
      console.log(data);
      // <Alert variant="outlined" severity="error">
      //   Something went wrong
      // </Alert>;
    } catch (error) {
      <Alert variant="outlined" severity="error">
        Something went wrong
      </Alert>;
      console.log(error);
    } finally {
    }
    console.log(input, "input");
  };

  return (
    <Box sx={AuthContainer}>
      <Box sx={AuthImage}>
        <img src={img?.src} alt="auth" />
      </Box>
      {auth === "login" ? (
        <Box sx={Login}>
          <Fragment>
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
              name="name"
              description="Enter your name"
              label="Name"
              type="text"
              value={input.name}
              onChangeHandler={onChangeHandler}
            />
            <InputGroup
              name="email"
              description="Enter your email"
              label="Email address"
              type="text"
              value={input.email}
              onChangeHandler={onChangeHandler}
            />
            <InputGroup
              name="password"
              description="Enter your password"
              label="Password"
              type="password"
              value={input.password}
              onChangeHandler={onChangeHandler}
            />

            <UseButton type="Auth" onClickHandler={onSubmitHandler}>
              Sign Up
            </UseButton>
          </Fragment>

          {/* Already have an account? <span>Sign in</span> */}
        </Box>
      ) : (
        <Box>Auth</Box>
      )}
    </Box>
  );
};

export default Auth;
