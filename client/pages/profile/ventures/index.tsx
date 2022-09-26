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
import { useQuery, useMutation, useQueryClient } from "react-query";
import {
  CreateProject,
  DeleteProject,
  ReadProjects,
  UpdateProject,
} from "./Crud";

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
  const projectSelected = state?.projectSelected;
  const [selectedProject, setSelectedProject] = useState(projectSelected);

  const [input, setInput] = useState({
    name: "",
    link: "",
    images: [],
    description: "",
  });

  console.log(selectedProject, "Que onda monnoooo");

  // const { projects } = state;
  const queryClient = useQueryClient();

  useEffect(() => {
    setSelectedProject(projectSelected);
  }, [projectSelected]);

  const {
    isLoading,
    isError,
    error,
    data: allProjects,
  } = useQuery("projects", ReadProjects);

  const createProjectMutation = useMutation(CreateProject, {
    onSuccess: () => {
      queryClient.invalidateQueries("projects");
    },
  });

  const updateProjectMutation = useMutation(UpdateProject, {
    onSuccess: () => {
      queryClient.invalidateQueries("projects");
    },
  });

  const deleteProjectMutation = useMutation(DeleteProject, {
    onSuccess: () => {
      queryClient.invalidateQueries("projects");
    },
  });

  const { modal } = state;

  const stateHandler = ({ method, payload, state, keep }) => {
    const update_state = {
      ...state,
      [method]: keep ? { ...state[method], ...payload } : payload,
    };
    dispatch(setState(update_state));
  };

  const { create } = state;

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
    <Editor
      value={input}
      setValue={(string) => setInput({ ...input, description: string })}
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
    <Editor
      value={selectedProject}
      setValue={(string) =>
        setSelectedProject({ ...selectedProject, description: string })
      }
    />,
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
        rows={allProjects?.length ? allProjects : []}
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
          create={() => createProjectMutation.mutate({ ...input })}
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
            update={() => updateProjectMutation.mutate({ ...selectedProject })}
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
          deleteProject={() =>
            deleteProjectMutation.mutate(selectedProject?._id)
          }
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
