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
  input: any;
  setInput: any;
}

const ProyectForm = ({ input, setInput }: ICreateProps) => {
  const status = ["en desarrollo", "finalizado"];

  const onChangeHandler = (e: any) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Box>
      <InputGroup
        name="name"
        description="Ingrese el nombre del emprendimiento"
        label="Nombre"
        type="text"
        value={input?.name ? input?.name : ""}
        onChangeHandler={onChangeHandler}
      />
      <InputGroup
        name="link"
        description="Ingrese el enlace del emprendimiento"
        label="Enlace"
        type="text"
        value={input ? input?.link : ""}
        onChangeHandler={onChangeHandler}
      />
      <BasicSelect
        options={status}
        width="100%"
        value={input ? input : {}}
        setValue={setInput}
        name="status"
        placeholder="Seleccione el estado en el que se encuentra el emprendimiento"
        label="Estado"
      />
    </Box>
  );
};

export default ProyectForm;
