import { Box, Divider } from "@mui/material";
import { AccountBottom, MenuContainer, MenuItem } from "./Styles";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IState } from "../../../Menu";

interface IActions {
  path: string;
  id: string;

  stateHandler: any;
}

const Actions = ({ path, id, stateHandler }: IActions) => {
  const state = useSelector((state: IState) => state?.projects);

  return (
    <Box sx={MenuContainer}>
      <Box
        sx={MenuItem}
        component="span"
        onClick={() =>
          stateHandler({ method: "update", payload: { modal: true }, state })
        }
      >
        <EditIcon sx={{ fontSize: "18px", margin: "0 5px" }} />
        <span style={{ fontSize: "14px", margin: "0 5px" }}>Editar</span>
      </Box>
      <Box
        sx={MenuItem}
        component="span"
        onClick={() =>
          stateHandler({ method: "delete", payload: { modal: true }, state })
        }
      >
        <DeleteIcon
          sx={{ fontSize: "18px", margin: "0 5px", color: "#E77F8B" }}
        />
        <span style={{ fontSize: "14px", margin: "0 5px", color: "#E77F8B" }}>
          Eliminar
        </span>
      </Box>
    </Box>
  );
};

export default Actions;
