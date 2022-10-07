import { Box, Divider } from "@mui/material";
import { AccountBottom, MenuContainer, MenuItem } from "./Styles";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import { setModal } from "../../../../redux/slices/projects";

type Props = {
  openUpdateModal: any;
  openDeleteModal: any;
};

const Actions = ({ openUpdateModal, openDeleteModal }: Props) => {
  return (
    <Box sx={MenuContainer}>
      <Box sx={MenuItem} component="span" onClick={() => openUpdateModal()}>
        <EditIcon sx={{ fontSize: "18px", margin: "0 5px" }} />
        <span style={{ fontSize: "14px", margin: "0 5px" }}>Editar</span>
      </Box>
      <Box sx={MenuItem} component="span" onClick={() => openDeleteModal()}>
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
