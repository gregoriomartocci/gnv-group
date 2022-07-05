import React, { Fragment, useState } from "react";
import { Box, CircularProgress } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import UseButton from "../../../Button";
import api from "../../../../hooks/Api";
import Toast from "../../../Alert";

interface IDelete {
  path: string;
  id: string;
}

const Delete = ({ path, id }: IDelete) => {
  const [error, setError] = useState({ process: "", message: "" });
  const [loading, setLoading] = useState<boolean>(false);

  console.log(path, id, "BUENOOOO");

  const remove = async () => {
    setError({ process: "", message: "" });
    setLoading(true);
    try {
      const data = await api({
        method: "delete",
        path: `/${path}/${id}`,
      });
      console.log("Dateushh", data);
      setLoading(false);
      if (data?.error) {
        setError({ process: "failed", message: data?.error });
      } else {
        setError({ ...error, process: "success" });
        // dispatch(setProjects(data));
      }
    } catch (err) {
      setError({ process: "failed", message: "Something went wrong" });
      setLoading(false);
    }
  };

  return (
    <Fragment>
      {error?.process === "success" && (
        <Toast
          message="El emprendimiento se eliminó con éxito"
          type="success"
        />
      )}
      {error?.process === "failed" && (
        <Toast message={error.message} type="error" />
      )}

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
            <UseButton type="Delete" onClickHandler={remove}>
              {loading ? (
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
