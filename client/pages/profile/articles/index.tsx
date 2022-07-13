import { IconButton, SxProps, TableCell, Typography } from "@mui/material";
import { Theme } from "@mui/system";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Dashboard from "../../../components/Dashboard";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IState } from "../../../components/Menu";
import api from "../../../hooks/Api";
import {
  setCreate,
  setDelete,
  setArticles,
  setUpdate,
  IArticle,
  setActions,
} from "../../../redux/slices/articles";

import UseTable from "../../../components/Table";
import Box from "@mui/material/Box";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

import Dropdown from "../../../components/Dropdown";
import UseModal from "../../../components/Modal";
import Toast from "../../../components/Alert";
import Update from "./components/Update";
import parse from "html-react-parser";
import { IImagetoUpload } from "../../../components/Image-Uploader";
import Create from "./components/Create";
import Actions from "./components/Actions";
import Delete from "./components/Delete";

export interface Data {
  id: number;
  _id: string;
  title: string;
  source: string;
  images: IImagetoUpload[];
  date: string;
  published: boolean;
  link: string;
  description: string;
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
  article: any;
}

interface ISanitize {
  string: string;
}

export const ArticlesContent = ({ article }: ITableContent) => {
  const [size, setSize] = useState<number>(50);
  const [rounded, setRounded] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [actual, setActual] = React.useState<string>("");
  const state = useSelector((state: IState) => state?.articles);
  const [rowSelected, setRowSelected] = React.useState<any>();
  const dispatch = useDispatch();

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

  const openActionsMenu = Boolean(anchorEl && state?.actions);

  const handleCloseActionsMenu = () => {
    setAnchorEl(null);
  };

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

  const sanitize = (string: string) => {
    const reactElement = parse(string);
    return reactElement;
  };

  const sliceText = (text: any, limit: number) => {
    const string =
      text.length > limit ? text.toString().substring(0, limit) + "..." : text;
    return string;
  };

  return (
    <Fragment>
      <TableCell align="left">
        <Box sx={CellTable}>
          <img src={article?.images[0]?.src} alt="" />
          <Typography style={{ fontFamily: "Montserrat" }}>
            {sliceText(article?.title, 40)}
          </Typography>
        </Box>
      </TableCell>
      <TableCell align="left">
        <Typography style={{ fontFamily: "Montserrat" }}>
          {article?.source}
        </Typography>
      </TableCell>
      <TableCell align="left">
        <Typography style={{ fontFamily: "Montserrat" }}>
          {sliceText(article?.link, 40)}
        </Typography>
      </TableCell>
      <TableCell align="left">
        <Typography style={{ fontFamily: "Montserrat" }}>
          {sanitize(sliceText(article?.description ?? "", 40))}
        </Typography>
      </TableCell>
      <TableCell align="left">
        <Typography style={{ fontFamily: "Montserrat" }}>
          {article?.published ? (
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
            handleClickActionsMenu(e, article?._id.toString(), article)
          }
        >
          <MoreVertIcon />
        </IconButton>
        <Dropdown
          open={openActionsMenu}
          handleClose={handleCloseActionsMenu}
          anchorEl={anchorEl}
        >
          <Actions path="article" id={actual} row={rowSelected} />
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
    id: "title",
    numeric: true,
    disablePadding: false,
    label: "Título",
  },
  {
    id: "source",
    numeric: true,
    disablePadding: false,
    label: "Fuente",
  },
  {
    id: "link",
    numeric: true,
    disablePadding: false,
    label: "Enlace",
  },
  {
    id: "description",
    numeric: true,
    disablePadding: false,
    label: "Descripción",
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
  articles: string;
  message: any;
};

const Posts = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<errorType>({ articles: "", message: "" });
  const state = useSelector((state: IState) => state?.articles);
  const { articles } = state;

  const getArticles = async () => {
    setError({ articles: "", message: "" });
    setLoading(true);
    try {
      const data = await api({
        method: "get",
        path: "/articles",
      });
      console.log("Dateushh", data);
      setLoading(false);
      if (data?.error) {
        setError({ articles: "failed", message: data?.error });
      } else {
        setError({ ...error, articles: "success" });
        dispatch(setArticles(data));
      }
    } catch (err) {
      setError({ articles: "failed", message: "Something went wrong" });
      setLoading(false);
    }
  };

  const { create, update } = state;

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
    getArticles();
  }, []);

  return (
    <Dashboard>
      {state?.delete?.status === "success" && (
        <Toast
          message="La Noticia se eliminó con éxito"
          type="success"
          action={() => reset("delete")}
        />
      )}

      {state?.delete?.status === "failed" && (
        <Toast
          message={state?.delete?.message}
          type="error"
          action={() => reset("delete")}
        />
      )}

      <UseTable
        title="Noticias"
        api="article"
        headCells={headCells}
        rows={articles}
        openModals={[openCreateModal, openUpdateModal]}
      />

      <UseModal open={state?.delete?.modal} handleClose={closeDeleteModal}>
        <Delete path={state?.delete?.api?.path} id={state?.delete?.api?.id} />
      </UseModal>

      <UseModal open={state?.update?.modal} handleClose={closeUpdateModal}>
        <Update
          articles={articles}
          path={state?.update?.api?.path}
          id={state?.update?.api?.id}
        />
      </UseModal>

      <UseModal open={create?.modal} handleClose={closeCreateModal}>
        <Create articles={articles} />
      </UseModal>
    </Dashboard>
  );
};

export default Posts;
