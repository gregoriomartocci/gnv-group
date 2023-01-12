import React, { useState } from "react";
import { Box } from "@mui/material";

import { StaticImageData } from "next/image";

import ImageUploader, {
  IImagetoUpload,
} from "../../../../../components/Image-Uploader";

import InputGroup from "../../../../../components/Input";
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

const GalleryForm = ({ input, setInput }: ICreateProps) => {
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

  return (
    <Box>
      <InputGroup
        name="title"
        description="Ingrese el título"
        label="Titulo"
        type="text"
        value={input ? input?.title : ""}
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
        description="Ingrese la fecha"
        label="Fecha"
        type="text"
        value={input ? input?.date : ""}
        onChangeHandler={onChangeHandler}
      />
      <InputGroup
        name="technique"
        description="Ingrese la técnica"
        label="Técnica"
        type="text"
        value={input ? input?.technique : ""}
        onChangeHandler={onChangeHandler}
      />
      <InputGroup
        name="measures"
        description="Ingrese las medidas"
        label="Medidas"
        type="text"
        value={input ? input?.measures : ""}
        onChangeHandler={onChangeHandler}
      />
    </Box>
  );
};

export default GalleryForm;
