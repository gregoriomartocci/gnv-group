import { Box, Divider } from "@mui/material";
import { AccountBottom, MenuContainer, MenuItem } from "./Styles";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IState } from "../../../Menu";
import { IProject } from "../../../../redux/slices/projects";
import { IArticle } from "../../../../redux/slices/articles";

interface IActions {
  path: string;
  selector: "projects" | "articles";
  item: IProject | IArticle;
  stateHandler: any;
}

const Actions = ({ path, selector, item, stateHandler }: IActions) => {
  const state = useSelector((state: IState) => state[selector]);

  return (
    <Box sx={MenuContainer}>
      <Box
        sx={MenuItem}
        component="span"
        onClick={() =>
          stateHandler({
            method: "update",
            payload: {
              modal: true,
              api: { id: item?.id, path },
              article: item,
            },
            state,
            keep: true,
          })
        }
      >
        <EditIcon sx={{ fontSize: "18px", margin: "0 5px" }} />
        <span style={{ fontSize: "14px", margin: "0 5px" }}>Editar</span>
      </Box>
      <Box
        sx={MenuItem}
        component="span"
        onClick={() =>
          stateHandler({
            method: "delete",
            payload: { modal: true, api: { id: item?._id } },
            state,
            keep: true,
          })
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
