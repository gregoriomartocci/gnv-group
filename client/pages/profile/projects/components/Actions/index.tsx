import { Box, Divider } from "@mui/material";
import { AccountBottom, MenuContainer, MenuItem } from "./Styles";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const Actions = () => {
  return (
    <Box sx={MenuContainer}>
      <Box sx={MenuItem}>
        <EditIcon sx={{ fontSize: "18px", margin: "0 5px" }} />
        <span style={{ fontSize: "14px", margin: "0 5px" }}>Editar</span>
      </Box>
      <Box sx={MenuItem}>
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
