import React, { Fragment, useEffect, useState } from "react";
import {
  Alert,
  Autocomplete,
  Box,
  CircularProgress,
  TextField,
} from "@mui/material";
import InputGroup from "../../../../../components/Input";
import UseButton from "../../../../../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { StaticImageData } from "next/image";
import api from "../../../../../hooks/Api";
import { useRouter } from "next/router";
import { Login } from "./Styles";
import UseAutocomplete from "../../../../../components/Autocomplete";
import ImageUploader, {
  IImagetoUpload,
} from "../../../../../components/Image-Uploader";
import UseTabs from "../../../../../components/Tabs";
import dynamic from "next/dynamic";
import Toast from "../../../../../components/Alert";
import BasicSelect from "../../../../../components/Select";

import { IState } from "../../../../../components/Menu";
import { resetParams } from "../..";
import {
  IArticle,
  setArticles,
  setUpdate,
} from "../../../../../redux/slices/articles";

const Editor = dynamic(() => import("../../../../../components/Editor"), {
  ssr: false,
});

export interface IAuthProps {
  img: StaticImageData;
}

export type inputType = {
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
  articles: IArticle[];
  path: string;
  id: number;
}

const Update = ({ articles, path, id }: ICreateProps) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [value, setValue] = useState<IImagetoUpload[] | []>([]);
  const state = useSelector((state: IState) => state?.articles);
  const { update } = state;
  const [input, setInput] = useState<IArticle>(state?.update?.article);
  const [tab, setTab] = useState<number>(0);

  const reset = (string: keyof resetParams) => {
    const ok = state[string];
    dispatch(
      setUpdate({
        ...ok,
        status: "",
        message: "",
      })
    );
  };

  // Publish Project
  const handlePublish = async () => {
    dispatch(setUpdate({ ...update, status: "", message: "", loading: true }));

    try {
      const data = await api({
        method: "post",
        path: `/${path}/${id}`,
        payload: input,
      });

      dispatch(setUpdate({ ...update, loading: false }));
      const { error } = data;
      console.log(error, "<== mensaje error");
      if (error) {
        dispatch(setUpdate({ ...update, status: "failed", message: error }));
      } else {
        const updateProjects = articles?.map((p) =>
          p?._id?.toString() === id?.toString() ? data : p
        );

        dispatch(setArticles(updateProjects));

        dispatch(
          setUpdate({
            ...update,
            status: "success",
            message: "La noticia se actualizó con éxito",
          })
        );
      }
    } catch (err) {
      setUpdate({
        ...update,
        status: "failed",
        message: "Algo salió mal, intente nuevamente!",
        loading: false,
      });
    }
  };

  const onChangeHandler = (e: any) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const status = ["En construcción", "Finalizado"];
  const type = ["Casa", "Departamento", "Local Comercial"];

  const steps = [
    <Fragment>
      <InputGroup
        name="title"
        description="Ingrese el título de la noticia"
        label="Titulo"
        type="text"
        value={input?.title}
        onChangeHandler={onChangeHandler}
      />
      <InputGroup
        name="source"
        description="Ingrese la fuente de la noticia"
        label="Fuente"
        type="text"
        value={input?.source}
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
      <InputGroup
        name="date"
        description="Ingrese la fecha de la noticia"
        label="Fecha"
        type="text"
        value={input?.date}
        onChangeHandler={onChangeHandler}
      />
    </Fragment>,
    <ImageUploader value={input} setValue={setInput} />,
    <Editor value={input} setValue={setInput} />,
  ];

  const tab_options = ["Información Básica", "Multimedia", "Descripción"];

  return (
    <Box sx={{ width: "100%" }}>
      {update?.status === "success" && (
        <Toast
          message={update?.message}
          type="success"
          action={() => reset("update")}
        />
      )}
      {update?.status === "failed" && (
        <Toast
          message={update?.message}
          type="error"
          action={() => reset("update")}
        />
      )}

      <Box sx={Login}>
        <span
          style={{
            fontSize: "20px",
            fontWeight: 600,
            margin: "0 0 15px 0",
            color: "#424242",
          }}
        >
          Editar Noticia
        </span>

        <UseTabs value={tab} setValue={setTab} options={tab_options} />

        <Box style={{ width: "100%", margin: "15px 0px" }}>{steps[tab]}</Box>

        <UseButton type="Primary" width="100%" onClickHandler={handlePublish}>
          {update?.loading ? (
            <CircularProgress style={{ color: "#fff" }} />
          ) : (
            "Agregar Noticia"
          )}
        </UseButton>
      </Box>
    </Box>
  );
};

export default Update;
