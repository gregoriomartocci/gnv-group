import React, { Fragment, useEffect, useState } from "react";
import { Box } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { StaticImageData } from "next/image";

import ImageUploader, {
  IImagetoUpload,
} from "../../../../../components/Image-Uploader";
import InputGroup from "../../../../../components/Input";
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
  onChangeHandler: any;
  setInput: any;
}

const Form = ({ input, onChangeHandler, setInput }: ICreateProps) => {
  const status = ["en desarrollo", "finalizado"];

  return (
    <Box>
      <InputGroup
        name="name"
        description="Ingrese el nombre del emprendimiento"
        label="Nombre"
        type="text"
        value={input?.title}
        onChangeHandler={onChangeHandler}
      />
      <InputGroup
        name="link"
        description="Ingrese el enlace del emprendimiento"
        label="Enlace"
        type="text"
        value={input?.link}
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
    </Box>
  );
};

export default Form;
