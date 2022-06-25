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
  value: string;
  setValue: any;
}

const Editor = ({ value, setValue }: IEditor) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState({ publish: "", message: "" });
  const [project, setProject] = useState({
    name: "Osten Tower",
    description: "descripcion de prueba",
    type: "Edificio",
    published: true,
    status: "En construcción",
  });
  const onChangeHandler = (e: string) => {
    setValue(e);
  };

  const handlePublish = async () => {
    setError({ publish: "", message: "" });
    setLoading(true);
    try {
      const data = await api({
        method: "post",
        path: "/project",
        payload: project,
      });
      console.log("Dateushh", data);
      setLoading(false);

      if (data?.error) {
        setError({ publish: "failed", message: data?.error });
      } else {
        setError({ ...error, publish: "success" });
        localStorage.setItem("auth", JSON.stringify(data));
        // dispatch(setAuth(data));
        // router.push("/profile");
      }
    } catch (err) {
      setError({ publish: "failed", message: "Something went wrong" });
      setLoading(false);
    }
  };

  return (
    <Box style={{ height: "auto" }}>

      {error?.publish === "success" && (
        <Toast message="El emprendimiento se agregó con éxito" type="success" />
      )}
      {error?.publish === "failed" && (
        <Toast message={error.message} type="error" />
      )}

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
        <UseButton type="Blue" onClickHandler={handlePublish}>
          {loading ? (
            <CircularProgress style={{ color: "#fff" }} />
          ) : (
            "Agregar Proyecto"
          )}
        </UseButton>
      </Box>
    </Box>
  );
};

export default Editor;
