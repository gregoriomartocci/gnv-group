import React from "react";
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
  onChangeHandler: any;
}

const Form = ({ input, onChangeHandler }: ICreateProps) => {
  return (
    <Box>
      <InputGroup
        name="title"
        description="Ingrese el nombre de la noticia"
        label="Título"
        type="text"
        value={input?.title}
        onChangeHandler={onChangeHandler}
      />
      <InputGroup
        name="link"
        description="Ingrese el enlace de la noticia"
        label="Enlace"
        type="text"
        value={input?.link}
        onChangeHandler={onChangeHandler}
      />
    </Box>
  );
};

export default Form;
