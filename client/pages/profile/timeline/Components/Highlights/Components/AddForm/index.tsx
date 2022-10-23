import React, { Fragment, useEffect, useState } from "react";
import {
  Alert,
  Autocomplete,
  Box,
  CircularProgress,
  TextField,
  Typography,
} from "@mui/material";

import { StaticImageData } from "next/image";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import ImageUploader, {
  IImagetoUpload,
} from "../../../../../../../components/Image-Uploader";
import InputGroup from "../../../../../../../components/Input";
import UseButton from "../../../../../../../components/Button";

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

const AddForm = ({ input, setInput }: ICreateProps) => {
  const onChangeHandler = (e: any) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Box sx={{ padding: "25px", width: "40vw" }}>
      <InputGroup
        name="name"
        description="Ingrese el nombre del emprendimiento"
        label="Nombre"
        type="text"
        value={input?.name ? input?.name : ""}
        onChangeHandler={onChangeHandler}
      />

      <InputGroup
        name="description"
        description="Ingrese la descripción del emprendimiento"
        label="Descripción"
        type="number"
        value={input?.description ? input?.description : ""}
        onChangeHandler={onChangeHandler}
      />
      <Typography
        sx={{
          fontSize: "16px",
          color: "#212121",
          fontWeight: "600",
          margin: "10px 0",
        }}
      >
        Imágenes
      </Typography>
      <ImageUploader
        value={input?.highlights}
        addImage={(value) => console.log(value)}
        removeImage={(value) => console.log(value)}
      />

      <UseButton type="Primary" width="100%">
        {true ? <CircularProgress style={{ color: "#fff" }} /> : "Guardar"}
      </UseButton>
    </Box>
  );
};

export default AddForm;
