import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Box } from "@mui/material";
import UseButton from "../Button";

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
  value: string;
  setValue: any;
}

const Editor = ({ value, setValue }: IEditor) => {
  const onChangeHandler = (e: string) => {
    setValue(e);
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
            value={value}
            scrollingContainer="body"
            modules={modules}
            onChange={onChangeHandler}
          />
        ) : null}
      </Box>

      <Box style={{ margin: "40px 0 0 0" }}>
        <UseButton type="Blue"> Confirmar</UseButton>
      </Box>
    </Box>
  );
};

export default Editor;
