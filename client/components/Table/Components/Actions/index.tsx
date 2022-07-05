import { Box, Divider } from "@mui/material";
import { AccountBottom, MenuContainer, MenuItem } from "./Styles";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import UseModal from "../../../Modal";
import Delete from "../Delete";
import { useState } from "react";

interface IActions {
  api: string;
  id: string;
}

const Actions = ({ api, id }: IActions) => {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const handleCloseDeleteModal = () => {
    setOpenDeleteModal(false);
  };

  const handleOpenDeleteModal = () => {
    setOpenDeleteModal(true);
  };

  return (
    <Box sx={MenuContainer}>
      <UseModal open={openDeleteModal} handleClose={handleCloseDeleteModal}>
        <Delete path={api} id={id} />
      </UseModal>
      <Box sx={MenuItem}>
        <EditIcon sx={{ fontSize: "18px", margin: "0 5px" }} />
        <span style={{ fontSize: "14px", margin: "0 5px" }}>Editar</span>
      </Box>
      <Box sx={MenuItem} component="span" onClick={handleOpenDeleteModal}>
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
