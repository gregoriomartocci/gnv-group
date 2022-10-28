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
  ITimeline,
  setModal,
  setSelected,
} from "../../../../../redux/slices/timeline";
import Actions from "../../../../../components/Table/Components/Actions";

const Content = (timelineItem: ITimeline) => {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const state = useSelector((state: IState) => state?.timeline);

  const { modal, timelineItems, timelineItemSelected } = state;

  const handleCloseActionsMenu = () => {
    dispatch(setModal({ name: "actions", value: false }));
    setAnchorEl(null);
  };

  const handleClickActionsMenu = (
    event: React.MouseEvent<HTMLButtonElement>,
    timeline: ITimeline
  ) => {
    dispatch(setSelected(timeline));
    dispatch(setModal({ name: "actions", value: true }));
    setAnchorEl(event.currentTarget);
  };

  const CellTable: SxProps<Theme> = {
    display: "flex",
    justifyContent: "flex-start",
    marginLeft: "10px",
    width: "125px",

    img: {
      width: "85px",
      height: "85px",
      borderRadius: "5px",
      objectFit: "cover",
      margin: "0 20px 0 0",
    },
  };

  const match = timelineItem?._id === timelineItemSelected?._id;

  return (
    <Fragment>
      <TableCell sx={{ maxWidth: "max-content" }} align="center">
        <Box>
          <Typography sx={{ fontSize: "15px", fontWeight: "500" }}>
            {timelineItem?.year}
          </Typography>
        </Box>
      </TableCell>
      <TableCell align="left">
        <Box sx={{ display: "flex" }}>
          {timelineItem?.highlights?.map(
            ({ name, description, img }, index) => {
              return (
                <Box
                  sx={CellTable}
                  style={{ flexDirection: "column", alignItems: "flex-start" }}
                  key={index}
                >
                  <img src={(img && img[0]?.src) ?? ""} alt="" />
                  <Typography
                    sx={{
                      fontSize: "12px",
                      fontWeight: 600,
                      marginTop: "5px",
                      maxWidth: "120px",
                    }}
                  >
                    {name}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "10px",
                      fontWeight: 500,
                      maxWidth: "120px",
                    }}
                  >
                    {description}
                  </Typography>
                </Box>
              );
            }
          )}
        </Box>
      </TableCell>
      <TableCell align="left">
        <Typography style={{ fontFamily: "Montserrat" }}>
          {timelineItem?.published ? (
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
        <IconButton onClick={(e) => handleClickActionsMenu(e, timelineItem)}>
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
