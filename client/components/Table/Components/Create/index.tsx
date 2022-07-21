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
import { Login } from "./Styles";
import dynamic from "next/dynamic";
import ImageUploader, { IImagetoUpload } from "../../../Image-Uploader";
import { IArticle } from "../../../../redux/slices/articles";
import { IState } from "../../../Menu";
import { resetParams } from "../../../../pages/profile/projects";
import api from "../../../../hooks/Api";
import { IProject } from "../../../../redux/slices/projects";
import UseButton from "../../../Button";
import UseTabs from "../../../Tabs";
import Toast from "../../../Alert";
import InputGroup from "../../../Input";

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
  publish: any;
  loading: boolean;
  stateHandler: any;
  form: any;
  request: any;
}

const Create = ({
  items,
  path,
  loading,
  stateHandler,
  form,
  request
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
    request
  });

  console.log(input.images, "que pasa aca che");

  const [tab, setTab] = useState<number>(0);

  const handlePublish = () => {

    request(
      "create",
      "post",
      input,
      "",
      "project",
      "El emprendimiento se agregó con éxito"
    );
    
  };

  const onChangeHandler = (e: any) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const tab_options = ["Información Básica", "Multimedia", "Descripcion"];

  const steps = [
    form({ input, onChangeHandler, setInput }),
    <ImageUploader value={input} setValue={setInput} />,
    <Editor value={input} setValue={setInput} />,
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
          Agregar Noticia
        </span>

        <UseTabs value={tab} setValue={setTab} options={tab_options} />

        <Box style={{ width: "100%", margin: "15px 0px" }}>{steps[tab]}</Box>

        {/* {console.log(input, "INPUT")} */}

        <UseButton type="Primary" width="100%" onClickHandler={handlePublish}>
          {loading ? (
            <CircularProgress style={{ color: "#fff" }} />
          ) : (
            "Agregar Noticia"
          )}
        </UseButton>
      </Box>
    </Box>
  );
};

export default Create;
