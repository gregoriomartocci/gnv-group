import React, { Fragment, useState } from "react";
import { Alert, Box, CircularProgress } from "@mui/material";
import { StaticImageData } from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import UseButton from "../../../Button";
import InputGroup from "../../../Input";
import Toast from "../../../Alert";
import { Login } from "../../Styles";
import { setAuth } from "../../../../redux/slices/auth";
import api from "../../../../hooks/Api";

export interface IAuthProps {
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

const SignUp = ({ img }: IAuthProps) => {
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
      const data = await api({
        method: "post",
        path: "/signup",
        payload: input,
      });
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
            Registro
          </span>
          <InputGroup
            name="name"
            description="Enter your name"
            label="Nombre"
            type="text"
            value={input.name}
            onChangeHandler={onChangeHandler}
          />
          <InputGroup
            name="email"
            description="Enter your email"
            label="Correo electrónico"
            type="text"
            value={input.email}
            onChangeHandler={onChangeHandler}
          />
          <InputGroup
            name="password"
            description="Enter your password"
            label="Contraseña"
            type="password"
            value={input.password}
            onChangeHandler={onChangeHandler}
          />

          <UseButton type="Auth" onClickHandler={onSubmitHandler}>
            {loading ? (
              <CircularProgress style={{ color: "#fff" }} />
            ) : (
              "Registrarse"
            )}
          </UseButton>
        </Fragment>

        {/* Already have an account? <span>Sign in!</span> */}
      </Box>
    </Fragment>
  );
};

export default SignUp;
