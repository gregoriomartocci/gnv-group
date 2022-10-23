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
} from "../../../../../components/Image-Uploader";

import InputGroup from "../../../../../components/Input";
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

  const [status, setStatus] = useState(["En desarrollo", "Finalizado"]);

  console.log(input, "input");

  return (
    <Box>
      <InputGroup
        name="Año"
        description="Ingrese el año"
        label="Año"
        type="number"
        value={input?.year ? input?.year : ""}
        onChangeHandler={onChangeHandler}
      />

      
    </Box>
  );
};

export default ProyectForm;
