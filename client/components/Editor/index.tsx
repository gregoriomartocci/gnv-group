import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Box, CircularProgress } from "@mui/material";
import UseButton from "../Button";
import api from "../../hooks/Api";
import Toast from "../Alert";

const modules = {
  toolbar: [
    [{ font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
    ["clean"],
  ],
  clipboard: {
    matchVisual: false,
  },
};

const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
];

export interface IEditor {
  value: any;
  setValue: any;
}

const Editor = ({ value, setValue }: IEditor) => {
  const onChangeHandler = (e: string) => {
    setValue({ ...value, description: e });
  };

  return (
    <Box style={{ height: "auto" }}>
      <Box style={{ height: "350px" }}>
        {typeof window !== "undefined" ? (
          <ReactQuill
            formats={formats}
            style={{ height: "300px" }}
            placeholder="Introduzca una descripción del proyecto.."
            theme="snow"
            value={value.description}
            scrollingContainer="body"
            modules={modules}
            onChange={() => onChangeHandler}
          />
        ) : null}
      </Box>
    </Box>
  );
};

export default Editor;
