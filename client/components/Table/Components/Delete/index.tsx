import React, { Fragment, useEffect, useState } from "react";
import { Box, CircularProgress } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import { IState } from "../../../Menu";
import UseButton from "../../../Button";

interface IDelete {
  path: string;
  id: number;
  name: "projects" | "articles" | "users";
  stateHandler: any;
}

const Delete = ({ path, id, name, stateHandler }: IDelete) => {
  const state = useSelector((state: IState) => state[name]);
  const dispatch = useDispatch();

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
            <UseButton
              type="Paper"
              onClickHandler={() => {
                stateHandler({
                  method: "delete",
                  payload: { modal: false },
                  state,
                }),
                  stateHandler({
                    method: "actions",
                    payload: { modal: false },
                    state,
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
            <UseButton
              type="Delete"
              onClickHandler={() =>
                stateHandler({
                  method: "delete",
                  payload: { message: "", success: "", failed: "" },
                  state,
                })
              }
            >
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
