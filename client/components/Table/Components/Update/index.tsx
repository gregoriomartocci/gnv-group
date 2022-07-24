import React, { Fragment, useEffect, useState } from "react";
import { Box, CircularProgress } from "@mui/material";
import { useSelector } from "react-redux";
import { StaticImageData } from "next/image";
import { Login } from "./Styles";
import { IProject } from "../../../../redux/slices/projects";
import dynamic from "next/dynamic";
import UseButton from "../../../Button";
import UseTabs from "../../../Tabs";
import ImageUploader, { IImagetoUpload } from "../../../Image-Uploader";
import { IArticle } from "../../../../redux/slices/articles";
import { IState } from "../../../Menu";

const Editor = dynamic(() => import("../../../Editor"), {
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
  items: IArticle[] | IProject[];
  path: "projects" | "articles" | "users";
  id: number;
  object: string;
  stateHandler: any;
  form: any;
  request: any;
}

const Update = ({
  items,
  path,
  id,
  object,
  stateHandler,
  form,
  request,
}: ICreateProps) => {
  const state_selector = useSelector((state: IState) => state[path]);
  const [input, setInput] = useState<IArticle>(state_selector?.update[path.slice(0, -1)]);
  const [tab, setTab] = useState<number>(0);

  const onChangeHandler = (e: any) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handlePublish = () => {
    request(
      "update",
      "post",
      input,
      state_selector?.update[path.slice(0, -1)]._id,
      "edit-project",
      "La noticia se actualizó con éxito"
    );
  };

  const steps = [
    form({ input, onChangeHandler }),
    <ImageUploader value={input} setValue={setInput} />,
    <Editor value={input} setValue={setInput} />,
  ];

  const tab_options = ["Información Básica", "Multimedia", "Descripción"];

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
          Editar {object}
        </span>

        <UseTabs value={tab} setValue={setTab} options={tab_options} />

        <Box style={{ width: "100%", margin: "15px 0px" }}>{steps[tab]}</Box>

        <UseButton type="Primary" width="100%" onClickHandler={handlePublish}>
          {false ? <CircularProgress style={{ color: "#fff" }} /> : "Guardar"}
        </UseButton>
      </Box>
    </Box>
  );
};

export default Update;
