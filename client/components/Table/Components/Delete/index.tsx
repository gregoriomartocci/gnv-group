import React, { Fragment, useEffect, useState } from "react";
import { Box, CircularProgress } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import { IState } from "../../../Menu";
import UseButton from "../../../Button/cacona";

interface IDelete {
  concept: string;
  selector: "projects" | "articles" | "users";
  stateHandler: any;
  request: any;
}

const Delete = ({ concept, stateHandler, request, selector }: IDelete) => {
  const state = useSelector((state: IState) => state[selector]);

  const handleDelete = () => {
    request();
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
          Eliminar {concept}
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
            <UseButton
              type="Paper"
              onClickHandler={() => {
                stateHandler({
                  method: "delete",
                  payload: { modal: false },
                  state,
                  keep: true,
                });
              }}
            >
              Cancelar
            </UseButton>
          </Box>
          <Box
            style={{
              margin: "0 0 0 7.5px",
            }}
          >
            <UseButton type="Delete" onClickHandler={handleDelete}>
              {false ? (
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
