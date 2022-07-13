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
  setActions,
  setCreate,
  setDelete,
  setProjects,
  setUpdate,
} from "../../../redux/slices/projects";
import CreateProject from "./components/Create";
import UseTable from "../../../components/Table";
import Box from "@mui/material/Box";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import Actions from "./components/Actions";
import Dropdown from "../../../components/Dropdown";
import UseModal from "../../../components/Modal";
import Toast from "../../../components/Alert";
import Update from "./components/Update";
import parse from "html-react-parser";
import Delete from "./components/Delete";

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
  project: any;
}

interface ISanitize {
  string: string;
}

export const santize = (string: string) => {
  const reactElement = parse(string);
  return reactElement;
};

export const sliceText = (text: any, limit: number) => {
  const string =
    text?.length && text?.length > limit
      ? text.toString().substring(0, limit) + "..."
      : text;
  return string;
};

export const ProjectsContent = ({ project }: ITableContent) => {
  const [size, setSize] = useState<number>(60);
  const [rounded, setRounded] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [actual, setActual] = React.useState<string>("");
  const [rowSelected, setRowSelected] = React.useState<any>();
  const state = useSelector((state: IState) => state?.projects);

  const openActionsMenu = Boolean(anchorEl && state?.actions);

  const handleCloseActionsMenu = () => {
    setAnchorEl(null);
  };

  const dispatch = useDispatch();

  const handleClickActionsMenu = (
    event: React.MouseEvent<HTMLButtonElement>,
    id: string,
    row: any
  ) => {
    setActual(id);
    setRowSelected(row);
    dispatch(setActions(true));
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
        <IconButton
          onClick={(e) =>
            handleClickActionsMenu(e, project?._id.toString(), project)
          }
        >
          <MoreVertIcon />
        </IconButton>
        <Dropdown
          open={openActionsMenu}
          handleClose={handleCloseActionsMenu}
          anchorEl={anchorEl}
        >
          <Actions path="project" id={actual} row={rowSelected} />
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

  const { create, update } = state;
  const projects = state?.projects;

  const reset = (string: keyof resetParams) => {
    const ok = state[string];
    dispatch(
      setDelete({
        ...ok,
        status: "",
        message: "",
      })
    );
  };

  const closeDeleteModal = () => {
    dispatch(
      setDelete({
        ...state?.delete,
        loading: false,
        modal: false,
      })
    );
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

  const closeUpdateModal = () => {
    dispatch(
      setUpdate({
        ...state?.update,
        status: "",
        message: "",
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
          action={() => reset("delete")}
        />
      )}

      {state?.delete?.status === "failed" && (
        <Toast
          message={state?.delete.message}
          type="error"
          action={() => reset("delete")}
        />
      )}

      <UseTable
        title="Emprendimientos"
        api="project"
        headCells={headCells}
        rows={projects}
        openModals={[openCreateModal, openUpdateModal]}
      />

      <UseModal open={state?.delete?.modal} handleClose={closeDeleteModal}>
        <Delete path={state?.delete?.api?.path} id={state?.delete?.api?.id} />
      </UseModal>

      <UseModal open={state?.update?.modal} handleClose={closeUpdateModal}>
        <Update
          projects={projects}
          path={state?.update?.api?.path}
          id={state?.update?.api?.id}
        />
      </UseModal>

      <UseModal open={create?.modal} handleClose={closeCreateModal}>
        <CreateProject projects={projects} />
      </UseModal>
    </Dashboard>
  );
};

export default Posts;
