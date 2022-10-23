import React, { Fragment } from "react";
import { Box, Typography } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { SxProps, Theme } from "@mui/material";
import UseModal from "../../../../../components/Modal";

const ImageContainer: SxProps<Theme> = {
  margin: "0 10px",
  img: {
    width: "200px",
    height: "200px",
    objectFit: "cover",
    borderRadius: "7.5px",
  },
};

type Props = {
  items: any[];
  onClick: any;
};

const Highlights = ({ items, onClick }: Props) => {
  return (
    <Fragment>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          width: "100%",
        }}
      >
        {items?.length
          ? items?.map(({ name, description, img }) => {
              return (
                <Box sx={ImageContainer}>
                  <img src={img[0]} alt={name} />
                  <Box sx={{ padding: "0 5px" }}>
                    <Typography
                      sx={{
                        fontFamily: "'Poppins', sans-serif",
                        margin: "5px 0 0 0",
                        fontSize: "15px",
                        color: "#424242",
                        fontWeight: 600,
                      }}
                    >
                      {name}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "'Poppins', sans-serif",
                        margin: "2px 0 0 0",
                        fontSize: "11px",
                        color: "#9e9e9e",
                        fontWeight: 500,
                      }}
                    >
                      {description}
                    </Typography>
                  </Box>
                </Box>
              );
            })
          : null}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "150px",
            height: "150px",
            backgroundColor: "#fafafa",
            border: "3px dashed #e0e0e0",
            borderRadius: "7.5px",

            "&:hover": {
              backgroundColor: "#f5f5f5",
              cursor: "pointer",
            },
          }}
          component="span"
          onClick={onClick}
        >
          {/* <img src={img} alt={name} /> */}
          <AddCircleOutlineIcon sx={{ fontSize: "40px", color: "#e0e0e0" }} />
        </Box>
      </Box>
    </Fragment>
  );
};

export default Highlights;
