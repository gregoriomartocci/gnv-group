import React, { Fragment, useState } from "react";
import { Alert, Box, CircularProgress } from "@mui/material";
import { StaticImageData } from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import UseButton from "../../../Button";
import InputGroup from "../../../Input";
import Toast from "../../../Alert";
import { AuthContainer, AuthImage, Login } from "../../Styles";
import { setAuth } from "../../../../redux/slices/auth";
import Post from "../../../../hooks";

export interface IAuthProps {
  img: StaticImageData;
}

export type inputType = {
  email: string;
  password: string;
};

export type errorType = {
  auth: string;
  message: any;
};

const SignIn = ({ img }: IAuthProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<errorType>({ auth: "", message: "" });
  const [input, setInput] = useState<inputType>({
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
      const data = await Post({ path: "/signin", payload: input });
      setLoading(false);
      if (data?.error) {
        setError({ auth: "failed", message: data?.error });
      } else {
        setError({ ...error, auth: "success" });
        localStorage.setItem("auth", JSON.stringify(data));
        dispatch(setAuth(data));
      }
    } catch (err) {
      setError({ auth: "failed", message: "Something went wrong" });
      setLoading(false);
    }
  };

  return (
    <Fragment>
      {error?.auth === "success" && (
        <Toast message="Account successfully created" type="success" />
      )}
      {error?.auth === "failed" && (
        <Toast message={error.message} type="error" />
      )}
      
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
            Sign in
          </span>
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
              "Sign in"
            )}
          </UseButton>
        </Fragment>
        {/* Es tu primera vez? Create una cuenta <span>Sign in</span> */}
      </Box>
    </Fragment>
  );
};

export default SignIn;
