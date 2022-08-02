import React, { Fragment } from "react";
import { Box, Typography } from "@mui/material";
import { ImageContainer } from "./Styles";


type IImageSelector = {
  items: any[];
};

const ImageSelector = ({ items }: IImageSelector) => {
  return (
    <Fragment>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          width: "100%",
          margin: "10px",
        }}
      >
        {items.map(({ img, name, size }) => {
          return (
            <Box sx={ImageContainer}>
              <img src={img} alt={name} />
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
                  {size}
                </Typography>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Fragment>
  );
};

export default ImageSelector;
