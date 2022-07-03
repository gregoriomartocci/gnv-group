import { IconButton, SxProps, TableCell, Typography } from "@mui/material";
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
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import Actions from "./components/Actions";
import Dropdown from "../../../components/Dropdown";

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
  id: keyof Data | "actions";
  label: string;
  numeric: boolean;
}

interface ITableContent {
  project: any;
}

export const ProjectsContent = ({ project }: ITableContent) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const openBasicMenu = Boolean(anchorEl);

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

  const handleClickBasicMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseBasicMenu = () => {
    setAnchorEl(null);
  };

  return (
    <Fragment>
      <TableCell align="left">
        <Box sx={CellTable}>
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
        <Dropdown
          open={openBasicMenu}
          handleClose={handleCloseBasicMenu}
          anchorEl={anchorEl}
        >
          <Actions />
        </Dropdown>
        <IconButton onClick={handleClickBasicMenu}>
          <MoreVertIcon />
        </IconButton>
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
