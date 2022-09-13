import React, { Fragment, useState } from "react";
import { Alert, Box, CircularProgress } from "@mui/material";
import { StaticImageData } from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";

import InputGroup from "../../../Input";
import Toast from "../../../Alert";
import { AuthContainer, AuthImage, Login } from "../../Styles";
import { setAuth } from "../../../../redux/slices/auth";
import api from "../../../../hooks/Api";
import { useRouter } from "next/router";
import { UseButton } from "../../../Button/cacona";

export interface IAuthProps {
  img: StaticImageData | string;
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
  const router = useRouter();
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
      const data = await api({
        method: "post",
        path: "/signin",
        payload: input,
      });
      console.log("Dateushh", data);
      setLoading(false);
      if (data?.error) {
        setError({ auth: "failed", message: data?.error });
      } else {
        setError({ ...error, auth: "success" });
        localStorage.setItem("auth", JSON.stringify(data));
        dispatch(setAuth(data));
        router.push("/profile");
      }
    } catch (err) {
      setError({ auth: "failed", message: "Something went wrong" });
      setLoading(false);
    }
  };

  return (
    <Fragment>
      {error?.auth === "success" && (
        <Toast message="Successfully signed in" type="success" />
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
            Iniciar sesión
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

          <Box sx={{ margin: "10px 0px 0px 0px" }}>
            <UseButton
              type="Primary"
              width="100%"
              height="50px"
              onClickHandler={onSubmitHandler}
            >
              {loading ? (
                <CircularProgress style={{ color: "#fff" }} />
              ) : (
                "Siguiente"
              )}
            </UseButton>
          </Box>
        </Fragment>
        {/* Es tu primera vez? Create una cuenta <span>Sign in</span> */}
      </Box>
    </Fragment>
  );
};

export default SignIn;
