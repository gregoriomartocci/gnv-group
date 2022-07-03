import { SxProps, TableCell, Typography } from "@mui/material";
import { Theme } from "@mui/system";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Dashboard from "../../../components/Dashboard";
import { IState } from "../../../components/Menu";
import api from "../../../hooks/Api";
import { setProjects } from "../../../redux/slices/projects";
import CreateProject from "./components/Create";
import UseTable from "../../../components/Table";
import { CellTable } from "./Styles";
import Box from "@mui/material/Box";

export interface Data {
  id: string;
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

interface HeadCell {
  disablePadding: boolean;
  id: keyof Data;
  label: string;
  numeric: boolean;
}

interface ITableContent {
  project: any;
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

  return (
    <Fragment>
      <TableCell align="left">
        <Box sx={CellTable}>

          {console.log(project?.name === "TUCO" && project, "IMAGENES")}
          <img src={project?.images[0]} alt="" />
          <Typography style={{ fontFamily: "Montserrat" }}>
            {project?.name}
          </Typography>
        </Box>
      </TableCell>
      <TableCell align="left">
        <Typography style={{ fontFamily: "Montserrat" }}>
          {project?.description}
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
          {project?.published}
        </Typography>
      </TableCell>
    </Fragment>
  );
};

const headCells: readonly HeadCell[] = [
  {
    id: "id",
    numeric: false,
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
    label: "Publicado",
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
  const { projects } = useSelector((state: IState) => state?.projects);

  useEffect(() => {
    const onSubmitHandler = async () => {
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

    onSubmitHandler();
  }, []);

  return (
    <Dashboard>
      {projects.length && (
        <UseTable
          title="Emprendimientos"
          headCells={headCells}
          rows={projects && projects}
        >
          <CreateProject />
        </UseTable>
      )}
    </Dashboard>
  );
};

export default Posts;
