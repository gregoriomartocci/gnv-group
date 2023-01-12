import React, { Fragment, useEffect, useState } from "react";
import {
  Alert,
  Autocomplete,
  Box,
  CircularProgress,
  TextField,
  Typography,
} from "@mui/material";

import { StaticImageData } from "next/image";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

import ImageUploader, {
  IImagetoUpload,
} from "../../../../../components/Image-Uploader";

import InputGroup from "../../../../../components/Input";
import Dropdown from "../../../../ventures/components/Dropdown";
import Highlights from "../Highlights";
import UseModal from "../../../../../components/Modal";
import AddForm from "../Highlights/Components/AddForm";

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
  input: any;
  setInput: any;
}

const Form = ({ input, setInput }: ICreateProps) => {
  const [modal, setModal] = useState<string>("");

  const [highlight, setHighlight] = useState({
    name: "",
    description: "",
    img: [],
  });

  const [highlightSelected, setHighlightSelected] = useState({
    name: "",
    description: "",
    img: [],
  });

  const onChangeHandler = (e: any) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const deleteSelected = (id) => {
    const updateHighlight = input?.highlights.filter(
      (element, index) => index !== id
    );
    setInput({ ...input, highlights: updateHighlight });
  };

  const updateSelected = () => {
    const updateHighlight = input?.highlights.map((element, index) =>
      index === highlightSelected?.id ? highlightSelected : element
    );
    setInput({ ...input, highlights: updateHighlight });
  };

  return (
    <Box>
      <InputGroup
        name="year"
        description="Ingrese el año"
        label="Año"
        type="text"
        value={input?.year ? input?.year : ""}
        onChangeHandler={onChangeHandler}
      />

      <Typography
        sx={{
          fontSize: "16px",
          color: "#212121",
          fontWeight: "600",
          margin: "10px 0",
        }}
      >
        Emprendimientos
      </Typography>

      <Highlights
        items={input?.highlights}
        create={(value) => {
          setModal("create");
        }}
        updateSelected={(value) => {
          setModal("update"), setHighlightSelected(value);
        }}
        deleteSelected={(id) => deleteSelected(id)}
        reOrderItems={(items) => {
          setInput({ ...input, highlights: items });
        }}
      />

      <UseModal open={modal === "update"} handleClose={() => setModal("")}>
        <AddForm
          highlight={highlightSelected}
          setHighlight={setHighlightSelected}
          action={(id) => {
            updateSelected(id), setModal("");
          }}
        />
      </UseModal>

      <UseModal open={modal === "create"} handleClose={() => setModal("")}>
        <AddForm
          highlight={highlight}
          setHighlight={setHighlight}
          action={(value) => {
            setInput({ ...input, highlights: [...input?.highlights, value] }),
              setHighlight({ name: "", description: "", img: [] }),
              setModal("");
          }}
        />
      </UseModal>
    </Box>
  );
};

export default Form;
