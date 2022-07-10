import { IconButton, SxProps, TableCell, Typography } from "@mui/material";
import { Theme } from "@mui/system";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Dashboard from "../../../components/Dashboard";
import { IState } from "../../../components/Menu";
import api from "../../../hooks/Api";
import {
  initialState,
  setCreate,
  setDelete,
  setProjects,
  setUpdate,
} from "../../../redux/slices/projects";
import CreateProject from "./components/Create";
import UseTable from "../../../components/Table";
import { CellTable } from "./Styles";
import Box from "@mui/material/Box";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import Actions from "../../../components/Table/Components/Actions";
import Dropdown from "../../../components/Dropdown";
import UseModal from "../../../components/Modal";
import Toast from "../../../components/Alert";
import Update from "./components/Update";
import parse from "html-react-parser";

export interface Data {
  id: number;
  name: string;
  description: string;
  images: string[];
  type: string;
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

export const ProjectsContent = ({ project }: ITableContent) => {
  const CellTable: SxProps<Theme> = {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",

    img: {
      width: "32px",
      height: "32px",
      borderRadius: "50%",
      objectFit: "cover",
      margin: "0px 10px",
    },
  };

  const santize = (string: string) => {
    const reactElement = parse(string);
    return reactElement;
  };

  const sliceText = (text: any, limit: number) => {
    const string =
      text.length > limit ? text.toString().substring(0, limit) + "..." : text;
    console.log(string);
    return string;
  };

  return (
    <Fragment>
      <TableCell align="left">
        <Box sx={CellTable}>
          <img src={project?.images[0]?.src} alt="" />
          <Typography style={{ fontFamily: "Montserrat" }}>
            {project?.name}
          </Typography>
        </Box>
      </TableCell>
      <TableCell align="left">
        <Typography style={{ fontFamily: "Montserrat" }}>
          {santize(sliceText(project?.description, 45))}
        </Typography>
      </TableCell>
      <TableCell align="left">
        <Typography style={{ fontFamily: "Montserrat" }}>
          {project?.type}
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
    id: "type",
    numeric: true,
    disablePadding: false,
    label: "Tipo",
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

  const { create } = state;
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
      />

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
