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
}

export default function Toast({ message, type }: IToast) {
  const [open, setOpen] = React.useState(true);

  return (
    <Box sx={{ width: "100%" }}>
      <Collapse in={open}>
        <Alert
          sx={ToastContainer}
          variant="filled"
          severity={type}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
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
