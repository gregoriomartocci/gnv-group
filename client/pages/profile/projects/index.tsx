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
  setProjects,
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

export const santize = (string: string) => {
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

export const ProjectsContent = (project: ITableContent) => {
  const dispatch = useDispatch();
  const [size, setSize] = useState<number>(60);
  const [rounded, setRounded] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [actual, setActual] = React.useState<string>("");
  const [rowSelected, setRowSelected] = React.useState<any>();
  const state = useSelector((state: IState) => state?.projects);

  const openActionsMenu = Boolean(anchorEl && state?.actions?.modal);

  const stateHandler = ({ method, payload, state }) => {
    const update_state = {
      ...state,
      [method]: { ...state[method], ...payload },
    };
    dispatch(setState({ ...update_state }));
  };

  const handleCloseActionsMenu = () => {
    setAnchorEl(null);
  };

  const resetCreate = (string: keyof resetParams) => {
    const ok = state[string];
    dispatch(
      setCreate({
        ...ok,
        status: "",
        message: "",
      })
    );
  };

  const handleClickActionsMenu = (
    event: React.MouseEvent<HTMLButtonElement>,
    id: string
  ) => {
    setActual(id);
    setAnchorEl(event.currentTarget);
    stateHandler({ method: "actions", payload: { modal: true }, state });
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

  return (
    <Fragment>
      <TableCell align="left">
        <Box sx={CellTable}>
          <img src={project?.images[0]?.src ?? ""} alt="" />
          <Typography style={{ fontFamily: "Montserrat" }}>
            {project?.name}
          </Typography>
        </Box>
      </TableCell>
      <TableCell align="left">
        <Typography style={{ fontFamily: "Montserrat" }}>
          {santize(sliceText(project?.description, 30))}
        </Typography>
      </TableCell>
      <TableCell align="left">
        <Typography style={{ fontFamily: "Montserrat" }}>
          {sliceText(project?.link, 30)}
        </Typography>
      </TableCell>
      <TableCell align="left">
        <Typography style={{ fontFamily: "Montserrat" }}>
          {project?.status}
        </Typography>
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
        <IconButton onClick={(e) => handleClickActionsMenu(e, project?.id)}>
          <MoreVertIcon />
        </IconButton>
        <Dropdown
          open={openActionsMenu}
          handleClose={handleCloseActionsMenu}
          anchorEl={anchorEl}
        >
          <Actions
            path="project"
            id={actual}
            row={rowSelected}
            stateHandler={(props) => stateHandler(props)}
          />
        </Dropdown>
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

const Posts = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<errorType>({ projects: "", message: "" });
  const state = useSelector((state: IState) => state?.projects);

  const stateHandler = ({ method, payload, state }) => {
    const update_state = {
      ...state,
      [method]: { ...state[method], ...payload },
    };
    dispatch(setState({ ...update_state }));
  };

  console.log(state, "stateeee");

  // const { create } = state;

  const reset = (string: keyof resetParams) => {
    const ok = state[string];
    dispatch(
      setUpdate({
        ...ok,
        status: "",
        message: "",
      })
    );
  };

  const getProjects = async () => {
    setError({ projects: "", message: "" });
    setLoading(true);
    try {
      const data = await api({
        method: "get",
        path: "/projects",
      });
      console.log("Dateushh", data);
      setLoading(false);
      if (data?.error) {
        setError({ projects: "failed", message: data?.error });
      } else {
        setError({ ...error, projects: "success" });
        dispatch(setProjects(data));
      }
    } catch (err) {
      setError({ projects: "failed", message: "Something went wrong" });
      setLoading(false);
    }
  };

  // Update Project
  const updateProject = async () => {
    dispatch(setUpdate({ ...update, status: "", message: "", loading: true }));

    try {
      const data = await api({
        method: "post",
        path: `/${path}/${id}`,
        payload: input,
      });

      dispatch(setUpdate({ ...update, loading: false }));
      const { error } = data;
      console.log(error, "<== mensaje error");
      if (error) {
        dispatch(setUpdate({ ...update, status: "failed", message: error }));
      } else {
        const updateProjects = articles?.map((p) =>
          p?._id?.toString() === id?.toString() ? data : p
        );

        dispatch(setArticles(updateProjects));

        dispatch(
          setUpdate({
            ...update,
            status: "success",
            message: "La noticia se actualizó con éxito",
          })
        );
      }
    } catch (err) {
      setUpdate({
        ...update,
        status: "failed",
        message: "Algo salió mal, intente nuevamente!",
        loading: false,
      });
    }
  };

  const createProject = async () => {
    dispatch(setCreate({ ...create, status: "", message: "", loading: true }));

    try {
      const data = await api({
        method: "post",
        path: `/project`,
        payload: input,
      });

      dispatch(setCreate({ ...create, loading: false }));
      const { error } = data;
      console.log(error, "<== mensaje error");
      if (error) {
        dispatch(setCreate({ ...create, status: "failed", message: error }));
      } else {
        const updateProjects = [...projects, data];
        dispatch(setProjects(updateProjects));
        dispatch(
          setCreate({
            ...create,
            status: "success",
            message: "La noticia se agregó con éxito",
          })
        );
      }
    } catch (err) {
      setCreate({
        ...create,
        status: "failed",
        message: "Algo salió mal, intente nuevamente!",
        loading: false,
      });
    }
  };

  const { create, update } = state;
  const projects = state?.projects;

  const resetDelete = (string: keyof resetParams) => {
    const ok = state[string];
    dispatch(
      setDelete({
        ...ok,
        status: "",
        message: "",
      })
    );
  };

  const resetCreate = (string: keyof resetParams) => {
    const ok = state[string];
    dispatch(
      setCreate({
        ...ok,
        status: "",
        message: "",
      })
    );
  };

  const openDeleteModal = () => {
    dispatch(
      setDelete({
        ...state?.delete,
        status: "",
        message: "",
        modal: true,
      })
    );
  };

  const closeModal = () => {
    dispatch(
      setDelete({
        status: "",
        message: "",
        loading: false,
        modal: false,
        api: { path: "", id: 0 },
      })
    );
  };

  const deleteProject = async () => {
    dispatch(
      setDelete({
        ...state?.delete,
        status: "",
        message: "",
        loading: true,
      })
    );

    try {
      const data = await api({
        method: "delete",
        path: `/${path}/${id}`,
      });
      // console.log("Dateushh", data);
      dispatch(
        setDelete({
          ...state?.delete,
          loading: false,
        })
      );
      if (data?.error) {
        dispatch(
          setDelete({
            ...state?.delete,
            status: "failed",
            message: data?.error,
          })
        );
      } else {
        dispatch(
          setDelete({
            ...state?.delete,
            status: "success",
            modal: false,
          })
        );
        const updateArticles = state.articles.filter(
          (p) => p?._id.toString() !== id.toString()
        );
        dispatch(setActions(false));
        dispatch(setArticles(updateArticles));
      }
    } catch (err) {
      dispatch(
        setDelete({
          ...state?.delete,
          status: "failed",
          message: "Something went wrong",
          loading: false,
        })
      );
    }
  };

  const openCreateModal = () => {
    dispatch(setCreate({ ...create, status: "", message: "", modal: true }));
  };

  const openUpdateModal = () => {
    dispatch(setCreate({ ...update, status: "", message: "", modal: true }));
  };

  const closeCreateModal = () => {
    dispatch(
      setCreate({
        ...state?.create,
        loading: false,
        modal: false,
      })
    );
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <Dashboard>
      {state?.delete?.status === "success" && (
        <Toast
          message="El emprendimiento se eliminó con éxito"
          type="success"
          action={() => resetDelete("delete")}
        />
      )}
      {state?.delete?.status === "failed" && (
        <Toast
          message={state?.delete.message}
          type="error"
          action={() => resetDelete("delete")}
        />
      )}
      {create?.status === "success" && (
        <Toast
          message={create?.message}
          type="success"
          action={() => reset("create")}
        />
      )}
      {create?.status === "failed" && (
        <Toast
          message={create?.message}
          type="error"
          action={() => reset("create")}
        />
      )}

      <UseTable
        title="Emprendimientos"
        api="project"
        name="projects"
        headCells={headCells}
        rows={projects}
        content={(project: IProject) => <ProjectsContent {...project} />}
        stateHandler={(props) => stateHandler(props)}
      />

      <UseModal
        open={create?.modal}
        handleClose={() =>
          stateHandler({
            method: "create",
            payload: { modal: false },
            state,
          })
        }
      >
        <Create
          items={projects}
          path="project"
          publish={createProject}
          reset={resetCreate}
          loading={create?.loading}
        />
      </UseModal>
      <UseModal
        open={state?.delete?.modal}
        handleClose={() =>
          stateHandler({
            method: "delete",
            payload: { modal: false },
            state,
          })
        }
      >
        <Delete
          path="project"
          id={state?.delete?.api?.id}
          name="projects"
          stateHandler={(props) => stateHandler(props)}
        />
      </UseModal>
      <UseModal
        open={state?.update?.modal}
        handleClose={() =>
          stateHandler({ method: "update", payload: { modal: false }, state })
        }
      >
        <Update
          items={projects}
          path="project"
          id={state?.update?.api?.id}
          stateHandler={(props) => stateHandler(props)}
        />
      </UseModal>
    </Dashboard>
  );
};

export default Posts;
