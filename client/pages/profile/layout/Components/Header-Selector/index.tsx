import React, { Fragment } from "react";
import { Box, Typography } from "@mui/material";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { SxProps, Theme } from "@mui/material";

const ImageContainer: SxProps<Theme> = {
  margin: "0 10px",

  img: {
    width: "200px",
    height: "200px",
    objectFit: "cover",
    borderRadius: "7.5px",
  },
};

const AddImage: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 10px",
  width: "200px",
  height: "200px",
  backgroundColor: "#fafafa",
  border: "3px dashed #e0e0e0",
  borderRadius: "7.5px",

  "&:hover": {
    backgroundColor: "#f5f5f5",
    cursor: "pointer",
  },
};

type IImageSelector = {
  items: any[];
  uploadImage: any;
};

const ImageSelector = ({ items, uploadImage }: IImageSelector) => {
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
        {items?.length
          ? items?.map(({ src, name, size }, index) => {
              return (
                <Box sx={ImageContainer} key={index}>
                  <img src={src} alt={name} />
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
            })
          : null}
        <Box sx={AddImage} component="span" onClick={uploadImage}>
          {/* <img src={img} alt={name} /> */}
          <FileUploadIcon sx={{ fontSize: "40px", color: "#e0e0e0" }} />
        </Box>
      </Box>
    </Fragment>
  );
};

export default ImageSelector;
