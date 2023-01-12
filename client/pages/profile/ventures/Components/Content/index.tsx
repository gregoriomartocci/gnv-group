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
import {
  IProject,
  setModal,
  setSelected,
} from "../../../../../redux/slices/projects";
import Actions from "../../../../../components/Table/Components/Actions";

const Content = (project: IProject) => {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const state = useSelector((state: IState) => state?.projects);

  const { modal, projectSelected } = state;

  const handleCloseActionsMenu = () => {
    dispatch(setModal({ name: "actions", value: false }));
    setAnchorEl(null);
  };

  const handleClickActionsMenu = (
    event: React.MouseEvent<HTMLButtonElement>,
    project: IProject
  ) => {
    dispatch(setSelected(project));
    dispatch(setModal({ name: "actions", value: true }));
    setAnchorEl(event.currentTarget);
  };

  const match = project?._id === projectSelected?._id;

  return (
    <Fragment>
      <TableCell align="center">
        <Typography>{project?.order}</Typography>
      </TableCell>
      <TableCell align="left">
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",

            img: {
              width: "85px",
              height: "85px",
              borderRadius: "5px",
              objectFit: "cover",
              margin: "0 20px 0 0",
            },
          }}
        >
          <img
            src={(project && project?.images && project?.images[0]?.src) ?? ""}
            alt=""
          />
          <Typography>{project?.name}</Typography>
        </Box>
      </TableCell>
      <TableCell align="left">
        <Typography>{sanitize(sliceText(project?.description, 30))}</Typography>
      </TableCell>
      <TableCell align="left">
        <Typography>{sliceText(project?.link, 30)}</Typography>
      </TableCell>
      <TableCell align="left">
        <Typography>{project?.status}</Typography>
      </TableCell>
      <TableCell align="left">
        <Typography>{project?.type}</Typography>
      </TableCell>
      <TableCell align="left">
        <Typography style={{ fontFamily: "Montserrat" }}>
          {project?.published ? (
            <Box
              sx={{
                width: "min-content",
                display: "flex",
                alignItems: "center",
                padding: "10px",
                borderRadius: "10px",
                border: "1px solid #E0E0E0",
              }}
            >
              <FiberManualRecordIcon
                sx={{
                  margin: "0px 6px",
                  color: "#30D18D",
                  fontSize: "12.5px",
                  fontWeight: "600",
                }}
              />
              Activa
            </Box>
          ) : (
            <Box>
              <FiberManualRecordIcon /> Pausada
            </Box>
          )}
        </Typography>
      </TableCell>
      <TableCell align="left">
        <IconButton onClick={(e) => handleClickActionsMenu(e, project)}>
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
