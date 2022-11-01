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
  IUser,
  setAlert,
  setModal,
  setUsers,
  setSelected,
} from "../../../redux/slices/users";
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

import { useQuery, useMutation, useQueryClient } from "react-query";
import {
  CreateUser,
  ReadUsers,
  DeleteUser,
  UpdateUser,
} from "../../../api/users";
import Content from "./Components/Content";
import Form from "./Components/Form";

const Editor = dynamic(() => import("../../../components/Editor"), {
  ssr: false,
});

export interface Data {
  id: number;
  name: string;
  email: string;
  role: string;
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
  user: IUser;
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
    id: "role",
    numeric: true,
    disablePadding: false,
    label: "Rol",
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

const Users = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state?.users);
  const userSelected = state?.userSelected;
  const [selectedUser, setSelectedUser] = useState(userSelected);

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
    setSelectedUser(userSelected);
  }, [userSelected]);

  const {
    isFetching: loading,
    isError,
    error,
    data: allUsers,
  } = useQuery("users", ReadUsers);

  const { mutateAsync: createUserMutation, isLoading: createLoading } =
    useMutation(CreateUser, {
      onSuccess: (data) => {
        queryClient.invalidateQueries("users");
        dispatch(
          setAlert({
            message: "El usuario se creó con éxito.",
            status: "success",
          })
        );
      },
      onError: (data) => {
        dispatch(
          setAlert({
            message: "Algo salió mal.",
            status: "error",
          })
        );
      },
    });

  const { mutateAsync: updateUserMutation, isLoading: updateLoading } =
    useMutation(UpdateUser, {
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

  const { mutateAsync: deleteUserMutation, isLoading: deleteLoading } =
    useMutation(DeleteUser, {
      onSuccess: () => {
        queryClient.invalidateQueries("users");
        dispatch(
          setAlert({
            message: "El usuario se eliminó con éxito.",
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
    <Form input={input} setInput={setInput} key={0} />,
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
    <Form input={selectedUser} setInput={setSelectedUser} key={0} />,
    <ImageUploader
      value={selectedUser?.id ? selectedUser?.images : []}
      addImage={(file: any) => {
        setSelectedUser({
          ...selectedUser,
          images: [...selectedUser?.images, file],
        });
      }}
      removeImage={(array: any) => {
        setSelectedUser({ ...selectedUser, images: array });
      }}
      key={1}
    />,
    <Editor
      value={selectedUser}
      setValue={(string) =>
        setSelectedUser({ ...selectedUser, description: string })
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
        rows={allUsers?.length ? allUsers : []}
        content={(project: IUser) => <Content {...project} />}
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
          create={() => createUserMutation({ ...input })}
          loading={createLoading}
        />
      </UseModal>
      <UseModal
        open={modal.update}
        handleClose={() => dispatch(setModal({ name: "update", value: false }))}
      >
        {selectedUser?._id && (
          <Update
            title="usuario"
            content={updateContent}
            update={() => updateUserMutation({ ...selectedUser })}
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
          deleteElement={() => deleteUserMutation(selectedUser?._id)}
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

export default Users;
