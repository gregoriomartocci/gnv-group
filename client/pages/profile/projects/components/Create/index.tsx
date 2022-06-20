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
import { Login } from "./Styles";
import UseAutocomplete from "../../../../../components/Autocomplete";
import UseTabs from "../../../../../components/Tabs";

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

const CreateProject = () => {
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

  const options = ["En construcción", "Finalizado"];

  const steps = [
    <Fragment>
      <InputGroup
        name="name"
        description="Ingrese el nombre de la propiedad"
        label="Nombre"
        type="text"
        value={input.email}
        onChangeHandler={onChangeHandler}
      />
      <InputGroup
        name="price"
        description="Ingrese el precio de la propiedad"
        label="Precio"
        type="text"
        value={input.email}
        onChangeHandler={onChangeHandler}
      />

      <UseAutocomplete items={options} label="Estado" />

      <UseButton type="Blue" onClickHandler={onSubmitHandler}>
        {loading ? (
          <CircularProgress style={{ color: "#fff" }} />
        ) : (
          "Agregar Proyecto"
        )}
      </UseButton>
    </Fragment>,
    <Fragment>
      <InputGroup
        name="name"
        description="Ingrese el nombre de la propiedad"
        label="Nombre"
        type="text"
        value={input.email}
        onChangeHandler={onChangeHandler}
      />
      <InputGroup
        name="price"
        description="Ingrese el precio de la propiedad"
        label="Precio"
        type="text"
        value={input.email}
        onChangeHandler={onChangeHandler}
      />

      <UseAutocomplete items={options} label="Estado" />

      <UseButton type="Blue" onClickHandler={onSubmitHandler}>
        {loading ? (
          <CircularProgress style={{ color: "#fff" }} />
        ) : (
          "Agregar Proyecto"
        )}
      </UseButton>
    </Fragment>,
  ];

  return (
    <Box sx={Login}>
      <span
        style={{
          fontSize: "35px",
          fontWeight: 600,
          margin: "10px 0",
          color: "#424242",
        }}
      >
        Create Project
      </span>
      <UseTabs>{steps}</UseTabs>
    </Box>
  );
};

export default CreateProject;
