import React, { Fragment, useEffect, useState } from "react";
import {
  Alert,
  Autocomplete,
  Box,
  CircularProgress,
  TextField,
} from "@mui/material";

import { StaticImageData } from "next/image";
import { Login } from "./Styles";
import dynamic from "next/dynamic";
import ImageUploader, { IImagetoUpload } from "../../../Image-Uploader";
import { IArticle } from "../../../../redux/slices/articles";
import { IProject } from "../../../../redux/slices/projects";

import UseTabs from "../../../Tabs";
import UseButton from "../../../Button";

const Editor = dynamic(() => import("../../../Editor"), {
  ssr: false,
});

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
  items: IArticle[] | IProject[];
  path: "article" | "project" | "user";
  object: string;
  loading: boolean;
  stateHandler: any;
  form: any;
  request: any;
  textEditor?: boolean;
}

const Create = ({
  items,
  path,
  loading,
  object,
  stateHandler,
  form,
  textEditor,
  request,
}: ICreateProps) => {
  const [input, setInput] = useState<IArticle>({
    title: "",
    source: "",
    link: "",
    date: "",
    images: [],
    description: "",
    _id: "",
    published: true,
  });

  const [tab, setTab] = useState<number>(0);

  const handlePublish = () => {
    request(
      "create",
      "post",
      input,
      "",
      path,
      "El emprendimiento se agregó con éxito"
    );
  };

  const onChangeHandler = (e: any) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const tab_options = [
    "Información Básica",
    "Multimedia",
    textEditor ? "Descripción" : null,
  ];

  const steps = [
    form({ input, onChangeHandler, setInput }),
    <ImageUploader value={input} setValue={setInput} />,
    textEditor ? <Editor value={input} setValue={setInput} /> : null,
  ];

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={Login}>
        <span
          style={{
            fontSize: "20px",
            fontWeight: 600,
            margin: "0 0 15px 0",
            color: "#424242",
          }}
        >
          Agregar {object}
        </span>

        <UseTabs value={tab} setValue={setTab} options={tab_options} />

        <Box style={{ width: "100%", margin: "15px 0px" }}>{steps[tab]}</Box>

        <UseButton type="Primary" width="100%" onClickHandler={handlePublish}>
          {loading ? <CircularProgress style={{ color: "#fff" }} /> : "Agregar"}
        </UseButton>
      </Box>
    </Box>
  );
};

export default Create;
