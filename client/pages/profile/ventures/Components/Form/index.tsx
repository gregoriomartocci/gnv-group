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

  const [status, setStatus] = useState(["En desarrollo", "Finalizado"]);

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
        name="order"
        description="Ingrese el orden del emprendimiento"
        label="Orden"
        type="number"
        value={input ? input?.order : ""}
        onChangeHandler={onChangeHandler}
      />
      {/* <InputGroup
        name="link"
        description="Ingrese el enlace del emprendimiento"
        label="Enlace"
        type="text"
        value={input ? input?.link : ""}
        onChangeHandler={onChangeHandler}
      /> */}

      <Box
        sx={{
          margin: "20px 0",
        }}
      >
        <Typography
          sx={{
            fontSize: "15px",
            color: "#212121",
            fontWeight: "600",
            margin: "10px 0",
          }}
        >
          Tipo
        </Typography>

        <Dropdown
          items={type}
          placeholder={input?.type}
          width="100%"
          action={(e) =>
            setInput({
              ...input,
              ["type"]: e,
            })
          }
          border
          optionsHeight="40px"
        />
      </Box>

      <Box
        sx={{
          margin: "20px 0",
        }}
      >
        <Typography
          sx={{
            fontSize: "15px",
            color: "#212121",
            fontWeight: "600",
            margin: "10px 0",
          }}
        >
          Estado
        </Typography>
        <Dropdown
          items={status}
          width="100%"
          placeholder={input?.status}
          action={(e) =>
            setInput({
              ...input,
              ["status"]: e,
            })
          }
          border
          optionsHeight="40px"
        />
      </Box>

      {/* <BasicSelect
        options={status}
        width="100%"
        value={input ? input : {}}
        setValue={setInput}
        name="status"
        placeholder="Seleccione el estado en el que se encuentra el emprendimiento"
        label="Estado"
      /> */}
    </Box>
  );
};

export default ProyectForm;
