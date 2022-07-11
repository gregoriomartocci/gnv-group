import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { ModalContainer, ModalWrapper } from "./Styles";

export interface IUseModalProps {
  open: boolean;
  handleClose: any;
  children: any;
}

const UseModal = ({ open, handleClose, children }: IUseModalProps) => {

  return (
    <Modal
      sx={ModalContainer}
      open={open}
      onClose={handleClose}
      disableScrollLock
    >
      <Box sx={ModalWrapper}>{children}</Box>
    </Modal>
  );
};

export default UseModal;
