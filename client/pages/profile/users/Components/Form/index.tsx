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

const Form = ({ input, setInput }: ICreateProps) => {
  const onChangeHandler = (e: any) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const roles = ["Admin", "Suscriptor"];

  return (
    <Box>
      <InputGroup
        name="name"
        description="Ingrese su nombre"
        label="Nombre"
        type="text"
        value={input ? input?.name : ""}
        onChangeHandler={onChangeHandler}
      />
      <InputGroup
        name="email"
        description="Ingrese el email"
        label="Email"
        type="text"
        value={input ? input?.email : ""}
        onChangeHandler={onChangeHandler}
      />
      <InputGroup
        name="password"
        description="Ingrese su contraseña"
        label="Contraseña"
        type="password"
        value={input ? input?.password : ""}
        onChangeHandler={onChangeHandler}
      />

      <Box sx={{ margin: { xs: "7.5px 0", sm: "0 20px 0 0" } }}>
        <Typography
          sx={{
            fontSize: "15px",
            color: "#212121",
            fontWeight: "600",
            margin: "10px 0",
          }}
        >
          Rol
        </Typography>
        <Dropdown
          items={roles}
          placeholder={input?.role}
          width="100%"
          action={(e) =>
            setInput({
              ...input,
              ["role"]: e,
            })
          }
          border
          optionsHeight="40px"
        />
      </Box>
    </Box>
  );
};

export default Form;
