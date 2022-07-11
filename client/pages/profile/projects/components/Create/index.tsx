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

import { setCreate, setProjects } from "../../../../../redux/slices/projects";
import { IState } from "../../../../../components/Menu";
import { resetParams } from "../..";
import { IProjects } from "../../../../../components/Cards";

const Editor = dynamic(() => import("../../../../../components/Editor"), {
  ssr: false,
});

export interface IAuthProps {
  img: StaticImageData;
}

export type inputType = {
  name: string;
  link: string;
  images: IImagetoUpload[];
  description: string;
  status: string;
};

export type errorType = {
  publish: string;
  message: any;
};

export interface ICreateProject {
  projects: IProjects[];
}

const Create = ({ projects }: ICreateProject) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const state = useSelector((state: IState) => state?.projects);
  const { create } = state;

  const reset = (string: keyof resetParams) => {
    const ok = state[string];
    dispatch(
      setCreate({
        ...ok,
        status: "",
        message: "",
      })
    );
  };

  const [input, setInput] = useState<inputType>({
    name: "",
    // price: 0,
    description: "",
    images: [],
    link: "",
    status: "",
    // type: "",
  });

  console.log(input.images, "que pasa aca che");

  const [tab, setTab] = useState<number>(0);

  // Publish Project
  const handlePublish = async () => {
    dispatch(setCreate({ ...create, status: "", message: "", loading: true }));

    try {
      const data = await api({
        method: "post",
        path: "/project",
        payload: input,
      });

      dispatch(setCreate({ ...create, loading: false }));
      const { error } = data;
      console.log(error, "<== mensaje error");
      if (error) {
        dispatch(setCreate({ ...create, status: "failed", message: error }));
      } else {
        const updateProjects = [...projects, data];
        dispatch(setProjects(updateProjects));
        dispatch(
          setCreate({
            ...create,
            status: "success",
            message: "El emprendimiento se agregó con éxito",
          })
        );
      }
    } catch (err) {
      setCreate({
        ...create,
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

  console.log(input, "Holiss");

  const status = [
    "Ingrese el estado del emprendimiento",
    "En construcción",
    "Finalizado",
  ];

  const steps = [
    <Fragment>
      <InputGroup
        name="name"
        description="Ingrese el nombre de la propiedad"
        label="Nombre"
        type="text"
        value={input.name}
        onChangeHandler={onChangeHandler}
      />
      <InputGroup
        name="link"
        description="Ingrese el enlace de la propiedad"
        label="Link"
        type="text"
        value={input.link}
        onChangeHandler={onChangeHandler}
      />
      <BasicSelect
        options={status}
        width="100%"
        value={input}
        setValue={setInput}
        label="Estado"
        name="status"
        placeholder="Ingrese el estado del emprendimiento"
      />
    </Fragment>,
    <ImageUploader value={input} setValue={setInput} />,
    <Editor value={input} setValue={setInput} />,
  ];

  return (
    <Box sx={{ width: "100%" }}>
      {create?.status === "success" && (
        <Toast
          message={create?.message}
          type="success"
          action={() => reset("create")}
        />
      )}
      {create?.status === "failed" && (
        <Toast
          message={create?.message}
          type="error"
          action={() => reset("create")}
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
          Agregar Emprendimiento
        </span>

        <UseTabs value={tab} setValue={setTab} />

        <Box style={{ width: "100%", margin: "15px 0px" }}>{steps[tab]}</Box>

        {/* {console.log(input, "INPUT")} */}

        <UseButton type="Primary" width="100%" onClickHandler={handlePublish}>
          {create?.loading ? (
            <CircularProgress style={{ color: "#fff" }} />
          ) : tab === 2 ? (
            "Agregar Proyecto"
          ) : (
            "Siguiente"
          )}
        </UseButton>
      </Box>
    </Box>
  );
};

export default Create;
