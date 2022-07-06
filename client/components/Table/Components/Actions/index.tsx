import { Box, Divider } from "@mui/material";
import { AccountBottom, MenuContainer, MenuItem } from "./Styles";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import UseModal from "../../../Modal";
import Delete from "../../../../pages/profile/projects/components/Delete";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IState } from "../../../Menu";
import { setDelete } from "../../../../redux/slices/projects";

interface IActions {
  path: string;
  id: string;
}

const Actions = ({ path, id }: IActions) => {
  const dispatch = useDispatch();
  const state = useSelector((state: IState) => state?.projects);

  const OpenDeleteModal = () => {
    dispatch(
      setDelete({
        ...state?.delete,
        status: "",
        message: "",
        modal: true,
        api: { path, id },
      })
    );
  };

  const OpenUpdateModal = () => {
    dispatch(
      setUpdate({
        ...state?.update,
        status: "",
        message: "",
        modal: true,
        api: { path, id },
      })
    );
  };

  return (
    <Box sx={MenuContainer}>
      <Box sx={MenuItem} onClick={OpenDeleteModal}>
        <EditIcon sx={{ fontSize: "18px", margin: "0 5px" }} />
        <span style={{ fontSize: "14px", margin: "0 5px" }}>Editar</span>
      </Box>
      <Box sx={MenuItem} component="span" onClick={OpenDeleteModal}>
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
