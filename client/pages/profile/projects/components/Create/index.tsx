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
import ImageUploader from "../../../../../components/Image-Uploader";
import UseTabs from "../../../../../components/Tabs";
import dynamic from "next/dynamic";

const Editor = dynamic(
  () => import("../../../../../components/Editor"),
  { ssr: false }
);

export interface IAuthProps {
  img: StaticImageData;
}

export type inputType = {
  name: string;
  price: number;
};

export type errorType = {
  auth: string;
  message: any;
};

const CreateProject = () => {
  
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<errorType>({ auth: "", message: "" });
  const [input, setInput] = useState<inputType>({ name: "", price: 0 });
  const [value, setValue] = useState<number>(0);
  const [text, setText] = useState<string>("");

  const dispatch = useDispatch();
  const router = useRouter();

  const onChangeHandler = (e: any) => {
    console.log(input);
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const status = ["En construcción", "Finalizado"];
  const type = ["Casa", "Departamento"];

  const steps = [
    <Fragment>
      <InputGroup
        name="name"
        description="Ingrese el nombre de la propiedad"
        label="Nombre"
        type="text"
        value={input.name}
        onChangeHandler={onChangeHandler}
      />
      <InputGroup
        name="price"
        description="Ingrese el precio de la propiedad"
        label="Precio"
        type="number"
        value={input.price}
        onChangeHandler={onChangeHandler}
      />

      <UseAutocomplete items={status} label="Estado" placeholder="sad" />
      <UseAutocomplete items={type} label="Tipo" placeholder="sad" />

    </Fragment>,
    <ImageUploader />,
    <Editor value={text} setValue={setText} />,
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
        Agregar Emprendimiento
      </span>
      <UseTabs value={value} setValue={setValue} />
      <Box style={{ width: "100%", margin: "15px 0px" }}>{steps[value]}</Box>
    </Box>
  );
};

export default CreateProject;
