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
import {
  CreateProject,
  DeleteProject,
  ReadProjects,
  UpdateProject,
} from "../../../api/ventures";
import Content from "./Components/Content";

const Editor = dynamic(() => import("../../../components/Editor"), {
  ssr: false,
});

export interface Data {
  id: number;
  name: string;
  email: string;
  role: string;
}

// id: string;
// name: string;
// email: string;
// role: string;

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
    id: "id",
    numeric: true,
    disablePadding: false,
    label: "id",
  },
  {
    id: "name",
    numeric: true,
    disablePadding: false,
    label: "Nombre",
  },
  {
    id: "email",
    numeric: true,
    disablePadding: false,
    label: "Email",
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
  const state = useSelector((state) => state?.users);
  const userSelected = state?.userSelected;
  const [selectedProject, setSelectedProject] = useState(userSelected);

  console.log(state, "que onduuu");

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
    setSelectedProject(userSelected);
  }, [userSelected]);

  const {
    isFetching: loading,
    isError,
    error,
    data: allProjects,
  } = useQuery("users", ReadProjects);

  const { mutateAsync: createProjectMutation, isLoading: createLoading } =
    useMutation(CreateProject, {
      onSuccess: (data) => {
        queryClient.invalidateQueries("users");
        console.log(data, "ok");
        dispatch(
          setAlert({
            message: "El usuario se creó con éxito.",
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
    useMutation(UpdateProject, {
      onSuccess: () => {
        queryClient.invalidateQueries("users");
        dispatch(
          setAlert({
            message: "El usuario se actualizó con éxito.",
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
    useMutation(DeleteProject, {
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
    <ProjectForm input={input} setInput={setInput} key={0} />,
    <ImageUploader
      value={input?.images}
      addImage={(file: any) => {
        setInput({ ...input, images: [...input.images, file] });
      }}
      removeImage={(array: any) => {
        setInput({ ...input, images: array });
      }}
      key={1}
    />,
    <Editor
      value={input}
      setValue={(string) => setInput({ ...input, description: string })}
      key={2}
    />,
  ];

  const updateContent = [
    <ProjectForm
      input={selectedProject}
      setInput={setSelectedProject}
      key={0}
    />,
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
      key={1}
    />,
    <Editor
      value={selectedProject}
      setValue={(string) =>
        setSelectedProject({ ...selectedProject, description: string })
      }
      key={2}
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
        title="Usuarios"
        name="users"
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
          title="Usuario"
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
            title="usuario"
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
          title="usuario"
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
