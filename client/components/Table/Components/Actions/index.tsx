import { Box, Divider } from "@mui/material";
import { AccountBottom, MenuContainer, MenuItem } from "./Styles";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import { setModal } from "../../../../redux/slices/projects";

const Actions = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state?.projects);

  const { modal } = state;
  console.log(modal);

  const onClickHandler = (action: string) => {
    dispatch(setModal({ name: action, value: !modal[action] }));
  };

  return (
    <Box sx={MenuContainer}>
      <Box
        sx={MenuItem}
        component="span"
        onClick={() => onClickHandler("update")}
      >
        <EditIcon sx={{ fontSize: "18px", margin: "0 5px" }} />
        <span style={{ fontSize: "14px", margin: "0 5px" }}>Editar</span>
      </Box>
      <Box
        sx={MenuItem}
        component="span"
        onClick={() => onClickHandler("delete")}
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
