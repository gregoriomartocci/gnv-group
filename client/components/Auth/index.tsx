import React, { Fragment, useState } from "react";
import { Alert, Box, CircularProgress } from "@mui/material";
import { StaticImageData } from "next/image";
import { AuthContainer, AuthImage, Login } from "./Styles";
import InputGroup from "../Input";
import Link from "next/link";
import UseButton from "../Button";
import axios from "axios";
import Toast from "../Alert";
import { setAuth } from "../../redux/slices/auth";
import { useDispatch } from "react-redux";

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
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<errorType>({ auth: "", message: "" });
  const [input, setInput] = useState<inputType>({
    name: "",
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

  const onChangeHandler = (e: any) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitHandler = async () => {
    setError({ auth: "", message: "" });
    setLoading(true);
    try {
      const { data } = await axios.post(
        "http://localhost:8000/api/signup",
        input
      );
      setLoading(false);
      if (data?.error) {
        setError({ auth: "failed", message: data?.error });
      } else {
        setError({ ...error, auth: "success" });
        localStorage.setItem("auth", JSON.stringify(data));
        console.log("DATEUUUUSH", data);
        dispatch(setAuth(data));
      }
    } catch (err) {
      setError({ auth: "failed", message: "Something went wrong" });
      setLoading(false);
    }
    console.log(input, "input");
  };

  return (
    <Fragment>
      {error?.auth === "success" && (
        <Toast message="Account successfully created" type="success" />
      )}
      {error?.auth === "failed" && (
        <Toast message={error.message} type="error" />
      )}
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
                Sign up
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
                {loading ? (
                  <CircularProgress style={{ color: "#fff" }} />
                ) : (
                  "Sign Up"
                )}
              </UseButton>
            </Fragment>

            {/* Already have an account? <span>Sign in</span> */}
          </Box>
        ) : (
          <Box>Auth</Box>
        )}
      </Box>
    </Fragment>
  );
};

export default Auth;
