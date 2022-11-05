import { IconButton, SxProps, TableCell, Typography } from "@mui/material";
import { Theme } from "@mui/system";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Dashboard from "../../../components/Dashboard";
import { IState } from "../../../components/Menu";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import api from "../../../hooks/Api";
import {
  closeAlert,
  initialState,
  IGallery,
  setAlert,
  setModal,
  setGallery,
  setSelected,
  setState,
} from "../../../redux/slices/gallery";
import UseTable from "../../../components/Table";
import Box from "@mui/material/Box";

import UseModal from "../../../components/Modal";
import Toast from "../../../components/Alert";
import parse from "html-react-parser";
import Actions from "../../../components/Table/Components/Actions";
import Delete from "../../../components/Table/Components/Delete";
import Update from "../../../components/Table/Components/Update";
import Create from "../../../components/Table/Components/Create";
import ImageUploader from "../../../components/Image-Uploader";
import dynamic from "next/dynamic";
import { useQuery, useMutation, useQueryClient } from "react-query";
import GalleryForm from "./Components/Form";
import Content from "./Components/Content";
import {
  CreateGalleryItem,
  DeleteGalleryItem,
  ReadGalleryItems,
  UpdateGalleryItem,
} from "../../../api/gallery";

export interface Data {
  id: number;
  title: string;
  gallery: string;
  artist: string;
  technique: string;
  measures: boolean;
  date: string;
  images: [];
  published: boolean;
  createdAt: string;
  updatedAt: string;
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
  gallery: IGallery;
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
    id: "title",
    numeric: true,
    disablePadding: false,
    label: "Titulo",
  },
  {
    id: "artist",
    numeric: false,
    disablePadding: false,
    label: "Artista",
  },
  {
    id: "gallery",
    numeric: true,
    disablePadding: false,
    label: "Galeria",
  },
  {
    id: "technique",
    numeric: true,
    disablePadding: false,
    label: "Tecnica",
  },
  {
    id: "measures",
    numeric: true,
    disablePadding: false,
    label: "Medidas",
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
  projects: string;
  message: any;
};

const Gallery = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state?.gallery);
  const galleryItemSelected = state?.galleryItemSelected;
  const [selectedGalleryItem, setGalleryItem] =
    useState(galleryItemSelected);

  const { alert, modal } = state;

  const [input, setInput] = useState({
    title: "",
    gallery: "",
    artist: "",
    technique: "",
    measures: "",
    images: [],
    date: "",
    published: true,
  });

  const queryClient = useQueryClient();

  useEffect(() => {
    setGalleryItem(galleryItemSelected);
  }, [galleryItemSelected]);

  const {
    isFetching: loading,
    isError,
    error,
    data: allGalleryItems,
  } = useQuery("gallery", ReadGalleryItems);

  const { mutateAsync: createGalleryItemMutation, isLoading: createLoading } =
    useMutation(CreateGalleryItem, {
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
          queryClient.invalidateQueries("gallery");
          dispatch(
            setAlert({
              message: "La obra de arte se creó con éxito.",
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

  const { mutateAsync: updateGalleryItemMutation, isLoading: updateLoading } =
    useMutation(UpdateGalleryItem, {
      onSuccess: () => {
        queryClient.invalidateQueries("gallery");
        dispatch(
          setAlert({
            message: "La obra de arte se actualizó con éxito.",
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

  const { mutateAsync: deleteGalleryItemMutation, isLoading: deleteLoading } =
    useMutation(DeleteGalleryItem, {
      onSuccess: () => {
        queryClient.invalidateQueries("gallery");
        dispatch(
          setAlert({
            message: "La obra de arte se eliminó con éxito",
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

  const createContent = [
    <GalleryForm input={input} setInput={setInput} key={0} />,
    <ImageUploader
      value={input?.images}
      addImage={(file: any) => {
        setInput({ ...input, images: [...input.images, file] });
      }}
      removeImage={(array: any) => {
        setInput({ ...input, images: array });
      }}
      reOrderImages={(images) => setInput({ ...input, images: images })}
      key={1}
    />,
  ];

  const updateContent = [
    <GalleryForm
      input={selectedGalleryItem}
      setInput={setGalleryItem}
      key={0}
    />,
    <ImageUploader
      value={selectedGalleryItem?._id ? selectedGalleryItem?.images : []}
      addImage={(file: any) => {
        setGalleryItem({
          ...selectedGalleryItem,
          images: [...selectedGalleryItem?.images, file],
        });
      }}
      removeImage={(array: any) => {
        setGalleryItem({ ...selectedGalleryItem, images: array });
      }}
      reOrderImages={(images) => setGalleryItem({ ...selectedGalleryItem, images: images })}
      key={1}
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

      <UseTable
        title="Galería de Arte"
        name="galley"
        headCells={headCells}
        rows={allGalleryItems?.length ? allGalleryItems : []}
        content={(gallery: IGallery) => <Content {...gallery} />}
        openCreateModal={() =>
          dispatch(
            setModal({
              name: "create",
              value: true,
            })
          )
        }
      />
      <UseModal
        open={modal.create}
        handleClose={() => dispatch(setModal({ name: "create", value: false }))}
      >
        <Create
          content={createContent}
          title="obra"
          create={() => createGalleryItemMutation({ ...input })}
          loading={createLoading}
          tabOptions={["Información Básica", "Imágenes"]}
        />
      </UseModal>
      <UseModal
        open={modal.update}
        handleClose={() => dispatch(setModal({ name: "update", value: false }))}
      >
        {selectedGalleryItem?._id && (
          <Update
            title="obra"
            content={updateContent}
            update={() => updateGalleryItemMutation({ ...selectedGalleryItem })}
            loading={updateLoading}
            tabOptions={["Información Básica", "Imágenes"]}
          />
        )}
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
          title="obra"
          deleteElement={() =>
            deleteGalleryItemMutation(selectedGalleryItem?._id)
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
    </Dashboard>
  );
};

export default Gallery;
