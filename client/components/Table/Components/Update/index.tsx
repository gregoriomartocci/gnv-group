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
  title: string;
  content: any;
  update: any;
}

const Update = ({ title, content, update }: ICreateProps) => {
  const [tab, setTab] = useState<number>(0);

  const handlePublish = () => {
    update();
  };

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
          Editar {title}
        </span>

        <UseTabs value={tab} setValue={setTab} options={tab_options} />

        <Box style={{ width: "100%", margin: "15px 0px" }}>{content[tab]}</Box>

        <UseButton
          type="Primary"
          width="100%"
          onClickHandler={() => handlePublish()}
        >
          {false ? <CircularProgress style={{ color: "#fff" }} /> : "Guardar"}
        </UseButton>
      </Box>
    </Box>
  );
};

export default Update;
