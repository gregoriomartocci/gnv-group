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
import { IProject } from "../../../news";
import { setCreated, setProjects } from "../../../../../redux/slices/projects";
import { IState } from "../../../../../components/Menu";

const Editor = dynamic(() => import("../../../../../components/Editor"), {
  ssr: false,
});

export interface IAuthProps {
  img: StaticImageData;
}

export type inputType = {
  name: string;
  price: number;
  images: string[];
  description: string;
  status: string;
  type: string;
};

export type errorType = {
  publish: string;
  message: any;
};

export interface ICreateProject {
  projects: IProject[];
}

const CreateProject = ({ projects }: ICreateProject) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [value, setValue] = useState<IImagetoUpload[] | []>([]);
  const state = useSelector((state: IState) => state?.projects);

  const { created } = state;

  const [input, setInput] = useState<inputType>({
    name: "",
    price: 0,
    description: "",
    images: [],
    status: "",
    type: "",
  });

  console.log(input.images, "que pasa aca che");

  const [tab, setTab] = useState<number>(0);

  // Publish Project
  const handlePublish = async () => {

    dispatch(setCreated({ status: "", message: "", loading: true }));

    try {
      const data = await api({
        method: "post",
        path: "/project",
        payload: input,
      });

      dispatch(setCreated({ ...created, loading: false }));
      const { error } = data;
      console.log(error, "<== mensaje error");
      if (error) {
        dispatch(setCreated({ ...created, status: "failed", message: error }));
      } else {
        const updateProjects = [...projects, data];
        dispatch(setProjects(updateProjects));
        dispatch(
          setCreated({
            ...created,
            status: "success",
            message: "El emprendimiento se agregó con éxito",
          })
        );
      }
    } catch (err) {
      setCreated({
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
        name="name"
        description="Ingrese el nombre de la propiedad"
        label="Nombre"
        type="text"
        value={input.name}
        onChangeHandler={onChangeHandler}
      />
      <InputGroup
        name="price"
        description="Ingrese el precio de la propiedad"
        label="Precio"
        type="number"
        value={input.price}
        onChangeHandler={onChangeHandler}
      />

      <BasicSelect
        options={status}
        width="100%"
        value={input}
        setValue={setInput}
        label="Estado"
        name="status"
      />
      <BasicSelect
        options={type}
        width="100%"
        value={input}
        setValue={setInput}
        label="Tipo"
        name="type"
      />
    </Fragment>,
    <ImageUploader
      value={value}
      setValue={setValue}
      base64={input}
      setBase64={setInput}
    />,
    <Editor value={input} setValue={setInput} />,
  ];

  return (
    <Box sx={{ width: "100%" }}>
      {created?.status === "success" && (
        <Toast message={created?.message} type="success" />
      )}
      {created?.status === "failed" && (
        <Toast message={created?.message} type="error" />
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
          {created?.loading ? (
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

export default CreateProject;
