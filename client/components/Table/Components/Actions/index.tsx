import { Box, Divider } from "@mui/material";
import { AccountBottom, MenuContainer, MenuItem } from "./Styles";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";


interface IActions {
  path: string;
  id: string;
  row: any;
}

const Actions = ({ path, id, row }: IActions) => {
  const dispatch = useDispatch();
  const state = useSelector((state: IState) => state?.projects);

  console.log(row, "Tamos Chelo");



  return (
    <Box sx={MenuContainer}>
      <Box sx={MenuItem} component="span" onClick={OpenUpdateModal}>
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
