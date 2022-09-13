import React, { Fragment, useEffect, useState } from "react";
import { Box, CircularProgress } from "@mui/material";
import { useSelector } from "react-redux";
import { StaticImageData } from "next/image";
import { Login } from "./Styles";
import { IProject } from "../../../../redux/slices/projects";
import dynamic from "next/dynamic";
import UseTabs from "../../../Tabs";
import ImageUploader, { IImagetoUpload } from "../../../Image-Uploader";
import { IArticle } from "../../../../redux/slices/articles";
import { IState } from "../../../Menu";
import UseButton from "../../../Button";

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
  selector: "projects" | "articles" | "users";
  concept: string;
  item: string;
  stateHandler: any;
  form: any;
  request: any;
}

const Update = ({
  selector,
  concept,
  item,
  form,
  request,
  stateHandler,
}: ICreateProps) => {
  const state_selector = useSelector((state: IState) => state[selector]);
  const [input, setInput] = useState<IProject | IArticle>(
    state_selector?.update[item]
  );

  const [tab, setTab] = useState<number>(0);

  const onChangeHandler = (e: any) => {
    stateHandler({
      method: "update",
      payload: {
        [item]: { ...input, [e.target.name]: e.target.value },
      },
      state: state_selector,
      keep: true,
    });
  };

  const handlePublish = () => {
    request();
  };

  const steps = [
    form({ input: state_selector.update[item], onChangeHandler, setInput }),
    <ImageUploader
      value={state_selector.update[item]}
      method="update"
      item={item}
      stateHandler={stateHandler}
      state={state_selector}
    />,
    <Editor
      value={state_selector.update[item]}
      method="update"
      item={item}
      stateHandler={stateHandler}
      state={state_selector}
    />,
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
          Editar {concept}
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
