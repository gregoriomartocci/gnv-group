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
import { IGallery } from "../../../../../redux/slices/gallery";

const Content = (galleryItem: IGallery) => {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const state = useSelector((state: IState) => state?.gallery);

  const { modal, galleryItemSelected } = state;

  // id: 1,
  // gallery: "Galería Nora Fisch | Buenos Aires",
  // artist: " Juan Becú",
  // title: "B Bros",
  // image:
  //   "https://res.cloudinary.com/gregomartocci/image/upload/v1663022483/tsbljhahckdrg6rewpkb.jpg",
  // technique: "Oleo sobre tela",
  // measures: "265 x 195 cm",
  // date: "2013",
  // published: true,

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

  const CellTable: SxProps<Theme> = {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",

    img: {
      width: "100px",
      height: "100px",
      borderRadius: "5px",
      objectFit: "cover",
      margin: "0 20px 0 0",
    },
  };

  const match = galleryItem?.id === galleryItemSelected?.id;

  return (
    <Fragment>
      <TableCell align="left">
        <Box sx={CellTable}>
          <img src={(galleryItem && galleryItem?.image) ?? ""} alt="" />
        </Box>
        <Typography>{galleryItem?.gallery}</Typography>
      </TableCell>
      <TableCell align="left">
        <Typography>{galleryItem?.artist}</Typography>
      </TableCell>
      <TableCell align="left">
        <Typography>{galleryItem?.title}</Typography>
      </TableCell>
      <TableCell align="left">
        <Typography>{galleryItem?.image}</Typography>
      </TableCell>
      <TableCell align="left">
        <Typography>{galleryItem?.technique}</Typography>
      </TableCell>
      <TableCell align="left">
        <Typography>{galleryItem?.measures}</Typography>
      </TableCell>
      <TableCell align="left">
        <Typography>{galleryItem?.date}</Typography>
      </TableCell>
      <TableCell align="left">
        <Typography style={{ fontFamily: "Montserrat" }}>
          {galleryItem?.published ? (
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
        <IconButton onClick={(e) => handleClickActionsMenu(e, galleryItem)}>
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
