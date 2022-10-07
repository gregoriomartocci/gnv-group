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

const Form = ({ input, setInput }: ICreateProps) => {
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
        name="title"
        description="Ingrese el nombre de la noticia"
        label="Titulo"
        type="text"
        value={input?.title ? input?.title : ""}
        onChangeHandler={onChangeHandler}
      />
      <InputGroup
        name="source"
        description="Ingrese el enlace de la noticia"
        label="Fuente"
        type="text"
        value={input ? input?.source : ""}
        onChangeHandler={onChangeHandler}
      />
      <InputGroup
        name="date"
        description="Ingrese la fecha de la noticia"
        label="Fecha"
        type="text"
        value={input ? input?.date : ""}
        onChangeHandler={onChangeHandler}
      />
      <InputGroup
        name="link"
        description="Ingrese el enlace de la noticia"
        label="Enlace"
        type="text"
        value={input ? input?.link : ""}
        onChangeHandler={onChangeHandler}
      />
    </Box>
  );
};

export default Form;
