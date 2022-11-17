import { IconButton, SxProps, TableCell, Typography } from "@mui/material";
import { Theme } from "@mui/system";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Dashboard from "../../../components/Dashboard";
import {
  closeAlert,
  initialState,
  ITimeline,
  setAlert,
  setModal,
  setTimelineItems,
  setSelected,
} from "../../../redux/slices/timeline";
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
  CreateTimelineItem,
  DeleteTimelineItem,
  ReadTimeline,
  UpdateTimelineItem,
} from "../../../api/timeline";
import Content from "./Components/Content";
import { THighlight } from "../../../redux/slices/timeline";
import Form from "./Components/Form";

const Editor = dynamic(() => import("../../../components/Editor"), {
  ssr: false,
});

export interface Data {
  id: number;
  _id: number;
  year: string;
  published: string;
  highlights: THighlight[];
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
  project: ITimeline;
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
    id: "year",
    numeric: true,
    disablePadding: false,
    label: "Año",
  },
  {
    id: "highlights",
    numeric: true,
    disablePadding: false,
    label: "Emprendimientos",
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
  const state = useSelector((state) => state?.timeline);
  const { alert, modal, timelineItemSelected } = state;
  const [selectedTimelineItem, setSelectedTimelineItem] =
    useState(timelineItemSelected);

  const [input, setInput] = useState({
    year: "",
    highlights: [],
    published: true,
  });

  const queryClient = useQueryClient();

  useEffect(() => {
    setSelectedTimelineItem(timelineItemSelected);
  }, [timelineItemSelected]);

  const {
    isFetching: loading,
    isError,
    error,
    data: allTimelineItems,
  } = useQuery("timeline", ReadTimeline);

  const { mutateAsync: createTimelineItemMutation, isLoading: createLoading } =
    useMutation(CreateTimelineItem, {
      onSuccess: (data) => {
        const { error } = data;
        if (error) {
          dispatch(
            setAlert({
              message: error,
              status: "error",
            })
          );
        } else {
          queryClient.invalidateQueries("timeline");
          dispatch(
            setAlert({
              message: "El año se creó con éxito.",
              status: "success",
            })
          );
        }
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

  const { mutateAsync: updateTimelineItemMutation, isLoading: updateLoading } =
    useMutation(UpdateTimelineItem, {
      onSuccess: (data) => {
        const { error } = data;
        if (error) {
          dispatch(
            setAlert({
              message: error,
              status: "error",
            })
          );
        } else {
          queryClient.invalidateQueries("timeline");
          dispatch(
            setAlert({
              message: "El año se actualizó con éxito.",
              status: "success",
            })
          );
        }
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

  const { mutateAsync: deleteTimelineItemMutation, isLoading: deleteLoading } =
    useMutation(DeleteTimelineItem, {
      onSuccess: () => {
        queryClient.invalidateQueries("timeline");
        dispatch(
          setAlert({
            message: "El año se eliminó con éxito.",
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

  const createContent = [<Form key={0} input={input} setInput={setInput} />];

  const updateContent = [
    <Form
      key={0}
      input={selectedTimelineItem}
      setInput={setSelectedTimelineItem}
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

      {/* Create */}

      <UseModal
        open={modal.create}
        handleClose={() => dispatch(setModal({ name: "create", value: false }))}
      >
        <Create
          content={createContent}
          title="Año"
          create={() => createTimelineItemMutation({ ...input })}
          loading={createLoading}
        />
      </UseModal>

      {/* Update */}

      <UseModal
        open={modal?.update}
        handleClose={() => dispatch(setModal({ name: "update", value: false }))}
      >
        {timelineItemSelected?.id && (
          <Update
            title="Año"
            content={updateContent}
            update={() =>
              updateTimelineItemMutation({ ...selectedTimelineItem })
            }
            loading={updateLoading}
          />
        )}
      </UseModal>

      {/* Delete */}

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
          title="Año"
          deleteElement={() =>
            deleteTimelineItemMutation(timelineItemSelected?._id)
          }
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

      <UseTable
        title="Linea del Tiempo"
        name="timeline"
        headCells={headCells}
        rows={allTimelineItems?.length ? allTimelineItems : []}
        content={(timeline: ITimeline) => <Content {...timeline} />}
        openCreateModal={() =>
          dispatch(
            setModal({
              name: "create",
              value: true,
            })
          )
        }
      />
    </Dashboard>
  );
};

export default Ventures;
