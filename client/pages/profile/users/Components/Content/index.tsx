import { Theme } from "@emotion/react";
import { SxProps, TableCell, Typography, IconButton, Box } from "@mui/material";
import React from "react";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sanitize, sliceText } from "../..";
import Dropdown from "../../../../../components/Dropdown";
import { IState } from "../../../../../components/Menu";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

import Actions from "../../../../../components/Table/Components/Actions";
import {
  IUser,
  setModal,
  setSelected,
} from "../../../../../redux/slices/users";

const Content = (user: IUser) => {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const state = useSelector((state: IState) => state?.users);

  const { modal, userSelected } = state;

  const handleCloseActionsMenu = () => {
    dispatch(setModal({ name: "actions", value: false }));
    setAnchorEl(null);
  };

  const handleClickActionsMenu = (
    event: React.MouseEvent<HTMLButtonElement>,
    user: IUser
  ) => {
    dispatch(setSelected(user));
    dispatch(setModal({ name: "actions", value: true }));
    setAnchorEl(event.currentTarget);
  };

  // const CellTable: SxProps<Theme> = {
  //   display: "flex",
  //   justifyContent: "flex-start",
  //   alignItems: "center",

  //   img: {
  //     width: "80px",
  //     height: "80px",
  //     borderRadius: "5px",
  //     objectFit: "cover",
  //     margin: "0 20px 0 0",
  //   },
  // };

  const match = user?.id === userSelected?.id;

  return (
    <Fragment>
      <TableCell align="left">
        <Typography>{user?.id}</Typography>
      </TableCell>
      <TableCell align="left">
        <Typography>{user?.name}</Typography>
      </TableCell>
      <TableCell align="left">
        <Typography>{user?.email}</Typography>
      </TableCell>
      <TableCell align="left">
        <IconButton onClick={(e) => handleClickActionsMenu(e, user)}>
          <MoreVertIcon />
        </IconButton>
        {match && (
          <Dropdown
            open={modal.actions}
            handleClose={handleCloseActionsMenu}
            anchorEl={anchorEl}
          >
            <Actions
              openUpdateModal={() =>
                dispatch(setModal({ name: "update", value: true }))
              }
              openDeleteModal={() =>
                dispatch(setModal({ name: "delete", value: true }))
              }
            />
          </Dropdown>
        )}
      </TableCell>
    </Fragment>
  );
};

export default Content;
