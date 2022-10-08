import React, { Fragment, useEffect, useState } from "react";
import {
  Alert,
  Autocomplete,
  Box,
  CircularProgress,
  TextField,
  Typography,
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
import Dropdown from "../../../../ventures/components/Dropdown";

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
  const onChangeHandler = (e: any) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const [type, setType] = useState([
    "Usos mixtos",
    "Residencial",
    "Corporativo",
    "Hoteleria",
    "Retail",
    "Urbanización",
    "Gastronomía y Lifestyle",
  ]);

  // id: number;
  // gallery: string;
  // artist: string;
  // title: string;
  // image: string;
  // technique: string;
  // measures: boolean;
  // date: string;
  // published: boolean;
  // createdAt: string;
  // updatedAt: string;

  return (
    <Box>
      <InputGroup
        name="title"
        description="Ingrese el titulo de la obra"
        label="Titulo"
        type="text"
        value={input?.name ? input?.name : ""}
        onChangeHandler={onChangeHandler}
      />
      <InputGroup
        name="gallery"
        description="Ingrese el nombre de la galeria"
        label="Galeria"
        type="text"
        value={input ? input?.gallery : ""}
        onChangeHandler={onChangeHandler}
      />
      <InputGroup
        name="artist"
        description="Ingrese el nombre del artista"
        label="Artista"
        type="text"
        value={input ? input?.artist : ""}
        onChangeHandler={onChangeHandler}
      />
      <InputGroup
        name="date"
        description="Ingrese la fecha de la obra"
        label="Fecha"
        type="text"
        value={input ? input?.gallery : ""}
        onChangeHandler={onChangeHandler}
      />
      <InputGroup
        name="measures"
        description="Ingrese las medidas de la obra"
        label="Medidas"
        type="text"
        value={input ? input?.gallery : ""}
        onChangeHandler={onChangeHandler}
      />
    </Box>
  );
};

export default ProyectForm;
