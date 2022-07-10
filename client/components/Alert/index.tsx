import * as React from "react";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import { ToastContainer } from "./Styles";

export type Type = {
  success: "success";
  error: "error";
  info: "info";
  warning: "warning";
};

export interface IToast {
  message: string;
  type: keyof Type;
  action?: any;
}

export default function Toast({ message, type, action }: IToast) {

  const [open, setOpen] = React.useState(true);

  const onClickHandler = () => {
    action()
    setOpen(false);
  };

  return (
    <Box sx={ToastContainer}>
      <Collapse in={open}>
        <Alert
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontFamily: "'Poppins', sans-serif",
          }}
          variant="filled"
          severity={type}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={onClickHandler}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          {message}
        </Alert>
      </Collapse>
    </Box>
  );
}
