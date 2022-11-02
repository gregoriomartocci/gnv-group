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
  title: string;
  content: any[];
  create: any;
  loading: boolean;
  tabOptions?: string[];
}

const Create = ({
  title,
  content,
  create,
  loading,
  tabOptions,
}: ICreateProps) => {
  const [tab, setTab] = useState<number>(0);

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={Login}>
        <span
          style={{
            fontSize: { xs: "18px", md: "20px" },
            fontWeight: 600,
            margin: "0 0 15px 0",
            color: "#424242",
          }}
        >
          Agregar {title}
        </span>

        {tabOptions?.length && (
          <UseTabs value={tab} setValue={setTab} options={tabOptions} />
        )}

        <Box style={{ width: "100%", margin: "15px 0px" }}>{content[tab]}</Box>

        <UseButton type="Primary" width="100%" onClickHandler={create}>
          {loading ? <CircularProgress style={{ color: "#fff" }} /> : "Guardar"}
        </UseButton>
      </Box>
    </Box>
  );
};

export default Create;
