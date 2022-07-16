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
import {
  IProject,
  setProjects,
  setUpdate,
} from "../../../../../redux/slices/projects";
import { IState } from "../../../../../components/Menu";
import { resetParams } from "../..";

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
  type: string;
};

export type errorType = {
  publish: string;
  message: any;
};

export interface ICreateProject {
  projects: IProject[];
  path: string;
  id: number;
}

const Update = ({ projects, path, id }: ICreateProject) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [value, setValue] = useState<IImagetoUpload[] | []>([]);
  const state = useSelector((state: IState) => state?.projects);
  const { update } = state;
  const [input, setInput] = useState<inputType>(state?.update.project);
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
        const updateProjects = projects.map((p) =>
          p._id.toString() === id.toString() ? data : p
        );

        dispatch(setProjects(updateProjects));

        dispatch(
          setUpdate({
            ...update,
            status: "success",
            message: "El emprendimiento se actualizó con éxito",
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

  const tab_options = ["Información Básica", "Multimedia", "Descripción"];

  const status = [
    "Ingrese el estado del emprendimiento",
    "En desarrollo",
    "Finalizado",
  ];
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
          Editar Emprendimiento
        </span>

        <UseTabs value={tab} setValue={setTab} options={tab_options} />

        <Box style={{ width: "100%", margin: "15px 0px" }}>{steps[tab]}</Box>

        {/* {console.log(input, "INPUT")} */}

        <UseButton type="Primary" width="100%" onClickHandler={handlePublish}>
          {update?.loading ? (
            <CircularProgress style={{ color: "#fff" }} />
          ) : (
            "Guardar"
          )}
        </UseButton>
      </Box>
    </Box>
  );
};
 
export default Update;
