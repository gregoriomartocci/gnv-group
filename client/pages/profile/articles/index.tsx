import { IconButton, SxProps, TableCell, Typography } from "@mui/material";
import { Theme } from "@mui/system";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Dashboard from "../../../components/Dashboard";
import { IState } from "../../../components/Menu";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import api from "../../../hooks/Api";
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
import Form from "./Components/Form";
import {
  IArticle,
  setArticles,
  setState,
} from "../../../redux/slices/articles";

export interface Data {
  id: number;
  title: string;
  description: string;
  source: string;
  images: string[];
  link: string;
  date: string;
  published: boolean;
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
  article: IArticle;
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

export const Content = (article: ITableContent) => {
  const dispatch = useDispatch();
  const [size, setSize] = useState<number>(60);
  const [rounded, setRounded] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [selected, setSelected] = React.useState<IArticle>({});
  const state = useSelector((state: IState) => state?.articles);
  const openActionsMenu = Boolean(anchorEl && state?.actions?.modal);

  const stateHandler = ({ method, payload, state, keep }) => {
    const update_state = {
      ...state,
      [method]: keep ? { ...state[method], ...payload } : payload,
    };
    dispatch(setState(update_state));
  };

  const handleCloseActionsMenu = () => {
    setAnchorEl(null);
  };

  const handleClickActionsMenu = (
    event: React.MouseEvent<HTMLButtonElement>,
    article: IArticle
  ) => {
    setSelected(article);
    setAnchorEl(event.currentTarget);
    stateHandler({
      method: "actions",
      payload: { modal: true },
      state,
      keep: true,
    });
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
          <img src={article?.images[0]?.src ?? ""} alt="" />
          <Typography style={{ fontFamily: "Montserrat" }}>
            {article?.title}
          </Typography>
        </Box>
      </TableCell>
      <TableCell align="left">
        <Typography style={{ fontFamily: "Montserrat" }}>
          {sliceText(article?.source, 30)}
        </Typography>
      </TableCell>
      <TableCell align="left">
        <Typography style={{ fontFamily: "Montserrat" }}>
          {santize(sliceText(article?.description, 30))}
        </Typography>
      </TableCell>
      <TableCell align="left">
        <Typography style={{ fontFamily: "Montserrat" }}>
          {sliceText(article?.link, 30)}
        </Typography>
      </TableCell>
      <TableCell align="left">
        <Typography style={{ fontFamily: "Montserrat" }}>
          {sliceText(article?.date, 30)}
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
        <IconButton onClick={(e) => handleClickActionsMenu(e, article)}>
          <MoreVertIcon />
        </IconButton>
        <Dropdown
          open={openActionsMenu}
          handleClose={handleCloseActionsMenu}
          anchorEl={anchorEl}
        >
          <Actions
            path="article"
            selector="articles"
            item={selected}
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
    id: "date",
    numeric: true,
    disablePadding: false,
    label: "Fecha",
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

  const stateHandler = ({ method, payload, state, keep }) => {
    const update_state = {
      ...state,
      [method]: keep ? { ...state[method], ...payload } : payload,
    };
    dispatch(setState(update_state));
  };

  // const { create } = state;

  const array_operations = (action, array, item) => {
    let update;

    action === "create"
      ? (update = [...array, item])
      : action === "articles"
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

      console.log(data, "TALLERES DE CORDOBA");
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
        const updated_array = array_operations(action, articles, data);
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

        dispatch(setArticles(updated_array));
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

  const articles = state?.articles;
  const { create, update } = state;

  useEffect(() => {
    // getArticles();
    request("articles", "get", {}, "", "articles", "");
  }, []);

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
        title="Noticias"
        api="article"
        name="articles"
        headCells={headCells}
        rows={articles?.length ? articles : []}
        content={(article: IArticle) => <Content {...article} />}
        stateHandler={stateHandler}
      />
      <UseModal
        open={create?.modal}
        handleClose={() =>
          stateHandler({
            method: "create",
            payload: { modal: false },
            state,
            keep: true,
          })
        }
      >
        <Create
          items={articles}
          path="article"
          object="noticia"
          stateHandler={stateHandler}
          loading={create?.loading}
          form={(props) => <Form {...props} />}
          request={request}
        />
      </UseModal>
      <UseModal
        open={update?.modal}
        handleClose={() =>
          stateHandler({
            method: "update",
            payload: { modal: false },
            state,
            keep: true,
          })
        }
      >
        <Update
          selector="articles"
          item="article"
          concept="noticia"
          form={(props) => <Form {...props} />}
          stateHandler={stateHandler}
          request={() =>
            request(
              "update",
              "post",
              state?.update?.article,
              update?.api?.id,
              "edit-article",
              "La noticia se actualizó con éxito"
            )
          }
        />
      </UseModal>
      <UseModal
        open={state?.delete?.modal}
        handleClose={() => {
          stateHandler({
            method: "delete",
            payload: { modal: false },
            state,
            keep: true,
          });
        }}
      >
        <Delete
          selector="articles"
          concept="noticia"
          stateHandler={stateHandler}
          request={() =>
            request(
              "delete",
              "delete",
              {},
              state?.delete?.api?.id,
              "article",
              "La noticia se ha eliminado con éxito"
            )
          }
        />
      </UseModal>
    </Dashboard>
  );
};

export default Posts;
