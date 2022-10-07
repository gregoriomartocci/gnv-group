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
import { setModal, setSelected } from "../../../../../redux/slices/articles";
import Actions from "../../../../../components/Table/Components/Actions";
import { IArticle } from "../../../../../redux/slices/articles";

const Content = (article: IArticle) => {
  
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const state = useSelector((state: IState) => state?.articles);

  const { modal, articleSelected } = state;

  const handleCloseActionsMenu = () => {
    dispatch(setModal({ name: "actions", value: false }));
    setAnchorEl(null);
  };

  const handleClickActionsMenu = (
    event: React.MouseEvent<HTMLButtonElement>,
    article: IArticle
  ) => {
    dispatch(setSelected(article));
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

  const match = article?.id === articleSelected?.id;

  return (
    <Fragment>
      <TableCell sx={{ width: "500px" }} align="left">
        <Box sx={CellTable}>
          <img
            src={(article && article?.images && article?.images[0]?.src) ?? ""}
            alt=""
          />
          <Typography>{article?.title}</Typography>
        </Box>
      </TableCell>
      <TableCell sx={{ width: "150px" }} align="left">
        <Typography>{article?.source}</Typography>
      </TableCell>
      <TableCell sx={{ width: "200px" }} align="left">
        <Typography>{article?.date}</Typography>
      </TableCell>
      <TableCell sx={{ width: "175px" }} align="left">
        <Typography>{sanitize(sliceText(article?.description, 30))}</Typography>
      </TableCell>
      <TableCell sx={{ width: "200px" }} align="left">
        <Typography>{sliceText(article?.link, 30)}</Typography>
      </TableCell>
      <TableCell align="left">
        <Typography style={{ fontFamily: "Montserrat" }}>
          {article?.published ? (
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
        <IconButton onClick={(e) => handleClickActionsMenu(e, article)}>
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
