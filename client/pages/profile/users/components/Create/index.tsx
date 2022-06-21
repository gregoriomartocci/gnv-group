import React, { Fragment, useState } from "react";
import {
  Alert,
  Autocomplete,
  Box,
  CircularProgress,
  TextField,
} from "@mui/material";
import InputGroup from "../../../../../components/Input";
import UseButton from "../../../../../components/Button";
import { useDispatch } from "react-redux";
import { StaticImageData } from "next/image";
import api from "../../../../../hooks/Api";
import { useRouter } from "next/router";
import { InputContainer, Login } from "./Styles";

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

const CreateUser = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<errorType>({ auth: "", message: "" });
  const [input, setInput] = useState<inputType>({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const router = useRouter();

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
        // dispatch();
        router.push("/profile");
      }
    } catch (err) {
      setError({ auth: "failed", message: "Something went wrong" });
      setLoading(false);
    }
  };

  const options = ["Administrador", "Propietario"];

  return (
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
          Create User
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
          name="username"
          description="Enter your username"
          label="Username"
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
        <InputGroup
          name="password"
          description="Enter your password"
          label="Password"
          type="password"
          value={input.password}
          onChangeHandler={onChangeHandler}
        ></InputGroup>


        <UseButton type="Blue" onClickHandler={onSubmitHandler}>
          {loading ? (
            <CircularProgress style={{ color: "#fff" }} />
          ) : (
            "Agregar Usuario"
          )}
        </UseButton>
      </Fragment>
    </Box>
  );
};

export default CreateUser;
