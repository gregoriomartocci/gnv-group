import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Box } from "@mui/material";

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
    ops: [],
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


  const onChangeHandler = (string: string) => {
    console.log(string, "string");
    setValue({ ...value, description: string });

    
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
            defaultValue={value.description}
            scrollingContainer="body"
            modules={modules}
            onChange={onChangeHandler}
          />
        ) : null}
      </Box>
    </Box>
  );
};

export default Editor;
