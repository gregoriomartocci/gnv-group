import React, { Fragment, useEffect, useState } from "react";
import {
  Alert,
  Autocomplete,
  Box,
  CircularProgress,
  TextField,
} from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { StaticImageData } from "next/image";

import { useRouter } from "next/router";
import { Login } from "./Styles";

import dynamic from "next/dynamic";
import ImageUploader, {
  IImagetoUpload,
} from "../../../../../components/Image-Uploader";
import InputGroup from "../../../../../components/Input";
import UseTabs from "../../../../../components/Tabs";
import UseButton from "../../../../../components/Button";
import { IProject } from "../../../../../redux/slices/projects";
import { IArticle } from "../../../../../redux/slices/articles";
import BasicSelect from "../../../../../components/Select";

const Editor = dynamic(() => import("../../../../../components/Editor"), {
  ssr: false,
});

export interface IAuthProps {
  img: StaticImageData;
}

export type ArticleType = {
  name: string;
  price: number;
  images: IImagetoUpload[];
  description: string;
  status: string;
  type: string;
};

export type errorType = {
  publish: string;
  message: any;
};

export interface ICreateProps {
  items: IArticle[] | IProject[];
  path: "article" | "project" | "user";
  publish: any;
  loading: boolean;
  stateHandler: any;
}

const Create = ({
  items,
  path,
  publish,
  loading,
  stateHandler,
}: ICreateProps) => {
  const router = useRouter();

  const [input, setInput] = useState<IProject>({
    _id: "",
    name: "",
    status: "",
    link: "",
    images: [],
    description: "",
    published: true,
  });

  const [tab, setTab] = useState<number>(0);

  const handlePublish = () => {
    publish(input);
  };

  const onChangeHandler = (e: any) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const tab_options = ["Información Básica", "Multimedia", "Descripcion"];

  const status = [
    "Seleccione el estado en el que se encuentra el emprendimiento",
    "En desarrollo",
    "Finalizados",
  ];

  const steps = [
    <Fragment>
      <InputGroup
        name="name"
        description="Ingrese el nombre del emprendimiento"
        label="Nombre"
        type="text"
        value={input.name}
        onChangeHandler={onChangeHandler}
      />
      <InputGroup
        name="link"
        description="Ingrese el enlace del emprendimiento"
        label="Enlace"
        type="text"
        value={input.link}
        onChangeHandler={onChangeHandler}
      />
      <BasicSelect
        options={status}
        width="100%"
        value={input}
        setValue={setInput}
        name="status"
        placeholder="Seleccione el estado en el que se encuentra el emprendimiento"
        label="Estado"
      />
    </Fragment>,
    <ImageUploader value={input} setValue={setInput} />,
    <Editor value={input} setValue={setInput} />,
  ];

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={Login}>
        <span
          style={{
            fontSize: "20px",
            fontWeight: 600,
            margin: "0 0 15px 0",
            color: "#424242",
          }}
        >
          Agregar Noticia
        </span>

        <UseTabs value={tab} setValue={setTab} options={tab_options} />

        <Box style={{ width: "100%", margin: "15px 0px" }}>{steps[tab]}</Box>

        <UseButton
          type="Primary"
          width="100%"
          onClickHandler={handlePublish}
        >
          {loading ? (
            <CircularProgress style={{ color: "#fff" }} />
          ) : (
            "Agregar Emprendimiento"
          )}
        </UseButton>
      </Box>
    </Box>
  );
};

export default Create;
