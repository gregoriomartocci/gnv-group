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
import ProjectForm from "./Components/Form";
import ImageUploader from "../../../components/Image-Uploader";
import dynamic from "next/dynamic";
import form from "./Components/Form";
import { useQuery, useMutation, useQueryClient } from "react-query";

import Content from "./Components/Content";
import {
  CreateGalleryItem,
  DeleteGalleryItem,
  ReadGalleryItems,
  UpdateGalleryItem,
} from "../../../api/gallery";

const Editor = dynamic(() => import("../../../components/Editor"), {
  ssr: false,
});

export interface Data {
  id: number;
  gallery: string;
  artist: string;
  title: string;
  image: string;
  technique: string;
  measures: boolean;
  date: string;
  published: boolean;
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
  project: IProject;
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
    id: "title",
    numeric: true,
    disablePadding: false,
    label: "Titulo",
  },
  {
    id: "gallery",
    numeric: true,
    disablePadding: false,
    label: "Galeria",
  },
  {
    id: "artist",
    numeric: true,
    disablePadding: false,
    label: "Artista",
  },
  {
    id: "title",
    numeric: true,
    disablePadding: false,
    label: "Titulo",
  },
  {
    id: "technique",
    numeric: true,
    disablePadding: false,
    label: "Tecnica",
  },
  {
    id: "measures",
    numeric: true,
    disablePadding: false,
    label: "Medidas",
  },
  {
    id: "date",
    numeric: true,
    disablePadding: false,
    label: "Fecha",
  },
  {
    id: "published",
    numeric: true,
    disablePadding: false,
    label: "Publicación",
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
  name: string;
  description: string;
  images: never[];
  link: string;
  published: boolean;
  status: string;
  type: string;
  date: string;
};

const Ventures = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state?.gallery);
  const projectSelected = state?.projectSelected;
  const [selectedProject, setSelectedProject] = useState(projectSelected);

  const { alert, modal } = state;

  const [input, setInput] = useState({
    name: "",
    link: "",
    type: "",
    status: "",
    images: [],
    description: "",
  });

  const queryClient = useQueryClient();

  useEffect(() => {
    setSelectedProject(projectSelected);
  }, [projectSelected]);

  const {
    isFetching: loading,
    isError,
    error,
    data: allProjects,
  } = useQuery("projects", ReadGalleryItems);

  const { mutateAsync: createProjectMutation, isLoading: createLoading } =
    useMutation(CreateGalleryItem, {
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

  const { mutateAsync: updateProjectMutation, isLoading: updateLoading } =
    useMutation(UpdateGalleryItem, {
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

  const { mutateAsync: deleteProjectMutation, isLoading: deleteLoading } =
    useMutation(DeleteGalleryItem, {
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
    <ProjectForm input={input} setInput={setInput} />,
    <ImageUploader
      value={input?.images}
      addImage={(file: any) => {
        setInput({ ...input, images: [...input.images, file] });
      }}
      removeImage={(array: any) => {
        setInput({ ...input, images: array });
      }}
    />,
  ];

  const updateContent = [
    <ProjectForm input={selectedProject} setInput={setSelectedProject} />,
    <ImageUploader
      value={selectedProject?.id ? selectedProject?.images : []}
      addImage={(file: any) => {
        setSelectedProject({
          ...selectedProject,
          images: [...selectedProject?.images, file],
        });
      }}
      removeImage={(array: any) => {
        setSelectedProject({ ...selectedProject, images: array });
      }}
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
        title="Galería de Arte"
        name="projects"
        headCells={headCells}
        rows={allProjects?.length ? allProjects : []}
        content={(project: IProject) => <Content {...project} />}
        openCreateModal={() =>
          dispatch(
            setModal({
              name: "create",
              value: true,
            })
          )
        }
      />
      <UseModal
        open={modal.create}
        handleClose={() => dispatch(setModal({ name: "create", value: false }))}
      >
        <Create
          content={createContent}
          title="obra"
          create={() => createProjectMutation({ ...input })}
          loading={createLoading}
        />
      </UseModal>
      <UseModal
        open={modal.update}
        handleClose={() => dispatch(setModal({ name: "update", value: false }))}
      >
        {selectedProject?.id && (
          <Update
            title="obra"
            content={updateContent}
            update={() => updateProjectMutation({ ...selectedProject })}
            loading={updateLoading}
          />
        )}
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
          title="obra"
          deleteElement={() => deleteProjectMutation(selectedProject?._id)}
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

export default Ventures;
