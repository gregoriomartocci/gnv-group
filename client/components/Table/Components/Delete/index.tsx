import React from "react";
import { Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import UseButton from "../../../Button";

const Delete = () => {
  return (
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
          <UseButton type="Paper"> Cancelar </UseButton>
        </Box>
        <Box
          style={{
            margin: "0 0 0 7.5px",
          }}
        >
          <UseButton type="Delete"> Eliminar </UseButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Delete;
