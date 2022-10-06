import { IconButton, SxProps, TableCell, Typography } from "@mui/material";
import { Theme } from "@mui/system";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Dashboard from "../../../components/Dashboard";
import { IState } from "../../../components/Menu";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import api from "../../../hooks/Api";
import {
  closeAlert,
  initialState,
  IProject,
  setAlert,
  setModal,
  setProjects,
  setSelected,
  setState,
} from "../../../redux/slices/projects";
import UseTable from "../../../components/Table";
import Box from "@mui/material/Box";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import Dropdown from "../../../components/Dropdown";
import UseModal from "../../../components/Modal";
import Toast from "../../../components/Alert";
import parse from "html-react-parser";
import Actions from "../../../components/Table/Components/Actions";
import Delete from "../../../components/Table/Components/Delete";
import Update from "../../../components/Table/Components/Update";
import Create from "../../../components/Table/Components/Create";

import ImageUploader from "../../../components/Image-Uploader";
import dynamic from "next/dynamic";
import form from "./Components/Form";
import { useQuery, useMutation, useQueryClient } from "react-query";
import {
  CreateArticle,
  DeleteArticle,
  ReadArticles,
  UpdateArticle,
  ReadArticle,
} from "../../../api/articles";
import Content from "./Components/Content";
import Form from "./Components/Form";

const Editor = dynamic(() => import("../../../components/Editor"), {
  ssr: false,
});

// id: {
//   type: Number,
//   required: true,
//   default: 1,
// },
// title: {
//   type: String,
//   trim: true,
//   required: true,
// },
// source: {
//   type: String,
//   required: true,
// },
// date: {
//   type: String,
//   required: true,
// },
// description: {
//   type: String,
//   required: true,
// },
// images: [{}],
// published: { type: Boolean, default: true },
// link: {
//   type: String,
//   required: true,
// },

export interface Data {
  id: number;
  title: string;
  source: string;
  date: string;
  description: string;
  images: string[];
  published: boolean;
  link: string;
  createdAt: string;
  updatedAt: string;
}

export type resetParams = {
  delete: "delete";
  update: "update";
  create: "crate";
};

interface HeadCell {
  disablePadding: boolean;
  id: keyof Data | "actions";
  label: string;
  numeric: boolean;
}

interface ITableContent {
  article: IArticle;
}

interface ISanitize {
  string: string;
}

export const sanitize = (string: string) => {
  if (typeof string === "string") {
    const reactElement = parse(string);
    return reactElement;
  }
  return;
};

export const sliceText = (text: any, limit: number) => {
  const string =
    text?.length && text?.length > limit
      ? text.toString().substring(0, limit) + "..."
      : text;
  return string;
};

const headCells: readonly HeadCell[] = [
  {
    id: "id",
    numeric: true,
    disablePadding: true,
    label: "ID",
  },
  {
    id: "title",
    numeric: true,
    disablePadding: false,
    label: "Titulo",
  },
  {
    id: "source",
    numeric: true,
    disablePadding: false,
    label: "Fuente",
  },
  {
    id: "date",
    numeric: true,
    disablePadding: false,
    label: "Fecha",
  },
  {
    id: "description",
    numeric: true,
    disablePadding: false,
    label: "Descripción",
  },
  {
    id: "link",
    numeric: true,
    disablePadding: false,
    label: "Enlace",
  },
  {
    id: "published",
    numeric: true,
    disablePadding: false,
    label: "Activo",
  },
  {
    id: "actions",
    numeric: true,
    disablePadding: false,
    label: "Acciones",
  },
];

export type errorType = {
  projects: string;
  message: any;
};

export type TProject = {
  id: number;
  title: string;
  source: string;
  date: never[];
  description: string;
  images: any[];
  published: boolean;
  link: string;
};

const News = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state?.articles);
  const artcileSelected = state?.projectSelected;
  const [selectedArticle, setSelectedArticle] = useState(artcileSelected);

  const { alert, modal } = state;

  const [input, setInput] = useState({
    name: "",
    link: "",
    images: [],
    description: "",
  });

  console.log(selectedArticle, "Que onda monnoooo");

  const queryClient = useQueryClient();

  useEffect(() => {
    setSelectedArticle(artcileSelected);
  }, [artcileSelected]);

  const {
    isFetching: loading,
    isError,
    error,
    data: allArticles,
  } = useQuery("projects", ReadArticles);

  const { mutateAsync: createArticleMutation, isLoading: createLoading } =
    useMutation(CreateArticle, {
      onSuccess: (data) => {
        queryClient.invalidateQueries("projects");
        console.log(data, "ok");
        dispatch(
          setAlert({
            message: "El emprendimiento se creó con éxito.",
            status: "success",
          })
        );
      },
      onError: (data) => {
        console.log(data, "ok");
        dispatch(
          setAlert({
            message: "Algo salió mal.",
            status: "error",
          })
        );
      },
    });

  const { mutateAsync: updateArticleMutation, isLoading: updateLoading } =
    useMutation(UpdateArticle, {
      onSuccess: () => {
        queryClient.invalidateQueries("projects");
        dispatch(
          setAlert({
            message: "El emprendimiento se actualizó con éxito.",
            status: "success",
          })
        );
      },
      onError: () => {
        dispatch(
          setAlert({
            message: "Algo salió mal.",
            status: "error",
          })
        );
      },
    });

  const { mutateAsync: deleteArticleMutation, isLoading: deleteLoading } =
    useMutation(DeleteArticle, {
      onSuccess: () => {
        queryClient.invalidateQueries("projects");
        dispatch(
          setAlert({
            message: "El emprendimiento se eliminó con éxito.",
            status: "success",
          })
        );
      },
      onError: () => {
        dispatch(
          setAlert({
            message: "Algo salió mal.",
            status: "error",
          })
        );
      },
    });

  const createContent = [
    <Form input={input} setInput={setInput} />,
    <ImageUploader
      value={input?.images}
      addImage={(file: any) => {
        setInput({ ...input, images: [...input.images, file] });
      }}
      removeImage={(array: any) => {
        setInput({ ...input, images: array });
      }}
    />,
    <Editor
      value={input}
      setValue={(string) => setInput({ ...input, description: string })}
    />,
  ];

  const updateContent = [
    <Form input={selectedArticle} setInput={setSelectedArticle} />,
    <ImageUploader
      value={selectedArticle?.id ? selectedArticle?.images : []}
      addImage={(file: any) => {
        setSelectedArticle({
          ...selectedArticle,
          images: [...selectedArticle?.images, file],
        });
      }}
      removeImage={(array: any) => {
        setSelectedArticle({ ...selectedArticle, images: array });
      }}
    />,
    <Editor
      value={selectedArticle}
      setValue={(string) =>
        setSelectedArticle({ ...selectedArticle, description: string })
      }
    />,
  ];

  return (
    <Dashboard>
      <Box sx={{ display: "flex", position: "relative", flexWrap: "wrap" }}>
        {alert?.map(({ message, status }, index) => {
          return (
            <Toast
              key={index}
              message={message}
              type={status}
              action={() => dispatch(closeAlert(index))}
            />
          );
        })}
      </Box>
      <UseTable
        title="Noticias"
        name="articles"
        headCells={headCells}
        rows={allArticles?.length ? allArticles : []}
        content={(project: IProject) => <Content {...project} />}
      />

      <UseModal
        open={modal.create}
        handleClose={() => dispatch(setModal({ name: "create", value: false }))}
      >
        <Create
          content={createContent}
          title="Emprendimiento"
          create={() => createArticleMutation({ ...input })}
          loading={createLoading}
        />
      </UseModal>
      <UseModal
        open={modal.update}
        handleClose={() => dispatch(setModal({ name: "update", value: false }))}
      >
        {selectedArticle?.id ? (
          <Update
            title="emprendimiento"
            content={updateContent}
            update={() => updateArticleMutation({ ...selectedArticle })}
            loading={updateLoading}
          />
        ) : null}
      </UseModal>
      <UseModal
        open={modal?.delete}
        handleClose={() => {
          dispatch(
            setModal({
              name: "delete",
              value: false,
            })
          );
        }}
      >
        <Delete
          title="emprendimiento"
          deleteProject={() => deleteProjectMutation(selectedArticle?._id)}
          onClose={() => {
            dispatch(
              setModal({
                name: "delete",
                value: false,
              })
            );
          }}
          loading={deleteLoading}
        />
      </UseModal>
    </Dashboard>
  );
};

export default News;
