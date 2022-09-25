import { IconButton, SxProps, TableCell, Typography } from "@mui/material";
import { Theme } from "@mui/system";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Dashboard from "../../../components/Dashboard";
import { IState } from "../../../components/Menu";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import api from "../../../hooks/Api";
import {
  initialState,
  IProject,
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

const Editor = dynamic(() => import("../../../components/Editor"), {
  ssr: false,
});

export interface Data {
  id: number;
  name: string;
  description: string;
  images: string[];
  link: string;
  published: boolean;
  status: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
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

export const Content = (project: IProject) => {
  const dispatch = useDispatch();
  const [size, setSize] = useState<number>(60);
  const [rounded, setRounded] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  // const [selected, setSelected] = React.useState<IProject>({});
  const state = useSelector((state: IState) => state?.projects);

  const { modal, projectSelected } = state;

  const handleCloseActionsMenu = () => {
    dispatch(setModal({ name: "actions", value: false }));
    setAnchorEl(null);
  };

  const handleClickActionsMenu = (
    event: React.MouseEvent<HTMLButtonElement>,
    project: IProject
  ) => {
    dispatch(setSelected(project));
    dispatch(setModal({ name: "actions", value: true }));
    setAnchorEl(event.currentTarget);
  };

  const CellTable: SxProps<Theme> = {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",

    img: {
      width: size,
      height: size,
      borderRadius: `${rounded ? "50px" : "5px"}`,
      objectFit: "cover",
      margin: "0px 15px",
    },
  };

  const match = project?.id === projectSelected?.id;

  return (
    <Fragment>
      <TableCell align="left">
        <Box sx={CellTable}>
          <img src={project?.images[0]?.src ?? ""} alt="" />
          <Typography>{project?.name}</Typography>
        </Box>
      </TableCell>
      <TableCell align="left">
        <Typography>{sanitize(sliceText(project?.description, 30))}</Typography>
      </TableCell>
      <TableCell align="left">
        <Typography>{sliceText(project?.link, 30)}</Typography>
      </TableCell>
      <TableCell align="left">
        <Typography>{project?.status}</Typography>
      </TableCell>
      <TableCell align="left">
        <Typography style={{ fontFamily: "Montserrat" }}>
          {project?.published ? (
            <Box
              sx={{
                width: "min-content",
                display: "flex",
                alignItems: "center",
                padding: "10px",
                borderRadius: "10px",
                border: "1px solid #E0E0E0",
              }}
            >
              <FiberManualRecordIcon
                sx={{
                  margin: "0px 6px",
                  color: "#30D18D",
                  fontSize: "12.5px",
                  fontWeight: "600",
                }}
              />
              Activa
            </Box>
          ) : (
            <Box>
              <FiberManualRecordIcon /> Pausada
            </Box>
          )}
        </Typography>
      </TableCell>
      <TableCell align="left">
        <IconButton onClick={(e) => handleClickActionsMenu(e, project)}>
          <MoreVertIcon />
        </IconButton>
        {match && (
          <Dropdown
            open={modal.actions}
            handleClose={handleCloseActionsMenu}
            anchorEl={anchorEl}
          >
            <Actions />
          </Dropdown>
        )}
      </TableCell>
    </Fragment>
  );
};

const headCells: readonly HeadCell[] = [
  {
    id: "id",
    numeric: true,
    disablePadding: true,
    label: "ID",
  },
  {
    id: "name",
    numeric: true,
    disablePadding: false,
    label: "Nombre",
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
    label: "Link",
  },
  {
    id: "status",
    numeric: true,
    disablePadding: false,
    label: "Estado",
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
  const state = useSelector((state) => state?.projects);

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<errorType>({ projects: "", message: "" });
  const projectSelected = state?.projectSelected;
  const [input, setInput] = useState(state?.projectSelected);
  const [selectedProject, setSelectedProject] = useState(projectSelected);

  useEffect(() => {
    setSelectedProject(projectSelected);
  }, [projectSelected]);

  const { modal } = state;

  const stateHandler = ({ method, payload, state, keep }) => {
    const update_state = {
      ...state,
      [method]: keep ? { ...state[method], ...payload } : payload,
    };
    dispatch(setState(update_state));
  };

  const array_operations = (action, array, item) => {
    let update;

    action === "create"
      ? (update = [...array, item])
      : action === "projects"
      ? (update = [...item])
      : action === "update"
      ? (update = array?.map((p) =>
          p?._id?.toString() === item?._id?.toString() ? item : p
        ))
      : action === "delete"
      ? (update = array.filter(
          (p) => p?._id.toString() !== item?._id.toString()
        ))
      : update;

    return update;
  };

  // request function

  const request = async (action, method, input, id, path, message) => {
    stateHandler({
      method: action,
      payload: { status: "", message: "", loading: true },
      state,
      keep: true,
    });
    try {
      const data = await api({
        method,
        path: `/${path}/${id}`,
        payload: input,
      });

      stateHandler({
        method: action,
        payload: { loading: false },
        state,
        keep: true,
      });

      const { error } = data;
      console.log(error, "<== mensaje error");

      if (error) {
        stateHandler({
          method: action,
          payload: { status: "failed", message: error },
          state,
          keep: true,
        });
      } else {
        const updated_array = array_operations(action, projects, data);

        let payload;

        action === "delete"
          ? (payload = {
              status: "success",
              message,
              modal: false,
            })
          : (payload = {
              status: "success",
              message,
              modal: false,
            });

        stateHandler({
          method: action,
          payload,
          state,
          keep: true,
        });

        dispatch(setProjects(updated_array));
      }
    } catch (err) {
      stateHandler({
        method: action,
        payload: {
          status: "failed",
          message: "Algo salió mal, intente nuevamente!",
          loading: false,
        },
        state,
        keep: true,
      });
    }
  };

  const { create, update } = state;
  const projects = state?.projects;

  useEffect(() => {
    // getProjects();
    request("projects", "get", {}, "", "projects", "");
  }, []);

  const addImage = (file: any) => {
    setInput({ ...input, images: [...input.images, file] });
  };

  const removeImage = (array: any) => {
    setInput({ ...input, images: array });
  };

  const createContent = [
    <ProjectForm input={input} setInput={setInput} />,
    <ImageUploader
      value={input?.images}
      addImage={addImage}
      removeImage={removeImage}
    />,
    <Editor value={input} setValue={setInput} />,
  ];

  console.log(typeof setSelectedProject, "SELECTED PROJECT");
  console.log(input, "INPUTTTT");
  console.log(selectedProject, "sEelected");

  const updateContent = [
    <ProjectForm input={selectedProject} setInput={setSelectedProject} />,
    <ImageUploader
      value={selectedProject?.id ? selectedProject.images : []}
      addImage={addImage}
      removeImage={removeImage}
    />,
    <Editor value={input} setValue={setInput} />,
  ];

  return (
    <Dashboard>
      {state?.delete?.status === "success" && (
        <Toast
          message="El emprendimiento se eliminó con éxito"
          type="success"
          action={() =>
            stateHandler({
              method: "delete",
              payload: { status: "", message: "" },
              state,
              keep: true,
            })
          }
        />
      )}
      {state?.delete?.status === "failed" && (
        <Toast
          message={state?.delete.message}
          type="error"
          action={() =>
            stateHandler({
              method: "delete",
              payload: { status: "", message: "" },
              state,
              keep: true,
            })
          }
        />
      )}
      {create?.status === "success" && (
        <Toast
          message={create?.message}
          type="success"
          action={() =>
            stateHandler({
              method: "create",
              payload: { status: "", message: "" },
              state,
              keep: true,
            })
          }
        />
      )}
      {create?.status === "failed" && (
        <Toast
          message={create?.message}
          type="error"
          action={() =>
            stateHandler({
              method: "create",
              payload: { status: "", message: "" },
              state,
              keep: true,
            })
          }
        />
      )}
      <UseTable
        title="Emprendimientos"
        api="project"
        name="projects"
        headCells={headCells}
        rows={projects?.length ? projects : []}
        content={(project: IProject) => <Content {...project} />}
        stateHandler={stateHandler}
      />

      <UseModal
        open={modal.create}
        handleClose={() => dispatch(setModal({ name: "create", value: false }))}
      >
        <Create
          content={createContent}
          title="Emprendimiento"
          create={() => console.log("Okk")}
        />
      </UseModal>
      <UseModal
        open={modal.update}
        handleClose={() => dispatch(setModal({ name: "update", value: false }))}
      >
        {selectedProject?.id ? (
          <Update
            title="emprendimiento"
            content={updateContent}
            update={() => console.log("ok")}
            // update={() =>
            //   request(
            //     "update",
            //     "post",
            //     state?.update?.project,
            //     state?.update?.api?.id,
            //     "edit-project",
            //     "El emprendimiento se ha eliminado con éxito"
            //   )
            // }
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
          deleteProject={() => console.log("deleting project")}
          onClose={() => {
            dispatch(
              setModal({
                name: "delete",
                value: false,
              })
            );
          }}
        />
      </UseModal>
    </Dashboard>
  );
};

export default Ventures;
