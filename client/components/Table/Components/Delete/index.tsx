import React, { Fragment, useEffect, useState } from "react";
import { Box, CircularProgress } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import { IState } from "../../../Menu";
import { setActions, setDelete, setProjects } from "../../../../redux/slices/projects";
import UseButton from "../../../Button";
import api from "../../../../hooks/Api";

interface IDelete {
  path: string;
  id: number;
}

const Delete = ({ path, id }: IDelete) => {
  const state = useSelector((state: IState) => state?.projects);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      setDelete({
        ...state?.delete,
        api: { path, id },
      })
    );
  }, []);

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

  const remove = async () => {
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
        const updateProjects = state.projects.filter(
          (p) => p._id.toString() !== id.toString()
        );
        dispatch(setActions(false));
        dispatch(setProjects(updateProjects));
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

  return (
    <Fragment>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: "25px",
          fontFamily: "'Poppins'",
        }}
      >
        <DeleteIcon
          sx={{
            color: "#e0e0e0",
          }}
        />

        <span
          style={{
            fontSize: "17px",
            margin: "15px 0 0 0",
            fontWeight: "600",
            color: "#1D2D3E",
          }}
        >
          Eliminar emprendimiento
        </span>
        <span
          style={{
            fontSize: "13px",
            margin: "5px 0",
            fontWeight: "500",
            color: "#A1A7A9",
          }}
        >
          Esta acción no se puede revertir
        </span>

        <Box sx={{ display: "flex", margin: "15px 0 0 0" }}>
          <Box
            style={{
              margin: "0 7.5px 0 0",
            }}
          >
            <UseButton type="Paper" onClickHandler={closeModal}>
              Cancelar
            </UseButton>
          </Box>
          <Box
            style={{
              margin: "0 0 0 7.5px",
            }}
          >
            <UseButton type="Delete" onClickHandler={() => remove()}>
              {state?.delete.loading ? (
                <CircularProgress style={{ color: "#fff" }} />
              ) : (
                "Eliminar"
              )}
            </UseButton>
          </Box>
        </Box>
      </Box>
    </Fragment>
  );
};

export default Delete;
