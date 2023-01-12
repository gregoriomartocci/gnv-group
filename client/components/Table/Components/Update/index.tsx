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
  loading: boolean;
  tabOptions?: string[];
}

const Update = ({
  title,
  content,
  update,
  loading,
  tabOptions,
}: ICreateProps) => {
  const [tab, setTab] = useState<number>(0);

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

        {tabOptions?.length && (
          <UseTabs
            value={tab}
            setValue={setTab}
            options={tabOptions ? tabOptions : []}
          />
        )}

        <Box style={{ width: "100%", margin: "15px 0px" }}>{content[tab]}</Box>

        <UseButton type="Primary" width="100%" onClickHandler={update}>
          {loading ? <CircularProgress style={{ color: "#fff" }} /> : "Guardar"}
        </UseButton>
      </Box>
    </Box>
  );
};

export default Update;
