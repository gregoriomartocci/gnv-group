import React, { Fragment } from "react";
import { Box, Typography } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { SxProps, Theme } from "@mui/material";
import UseModal from "../../../../../components/Modal";
import Image from "next/image";
import { RiCloseCircleLine } from "react-icons/ri";

type Props = {
  items: any[];
  create: any;
  updateSelected: any;
  deleteSelected: any;
};

const Highlights = ({
  items,
  create,
  updateSelected,
  deleteSelected,
}: Props) => {
  return (
    <Fragment>
      <Box
        sx={{
          display: "flex",
          overflowX: "auto",
          padding: "5px 0 15px 0",
        }}
      >
        {items?.length
          ? items?.map(({ name, description, img }, index) => {
              return (
                <Box
                  key={index}
                  component="span"
                  sx={{
                    position: "relative",
                    margin: "0 10px 0",
                    img: {
                      borderRadius: "7.5px",
                    },
                    cursor: "pointer",
                  }}
                >
                  <Box
                    component="span"
                    sx={{
                      position: "absolute",
                      top: "10px",
                      right: "10px",
                      color: "#fff",
                      fontSize: "25px",
                      zIndex: 50,
                      cursor: "pointer",

                      "&:hover": {
                        color: "red",
                      },
                    }}
                    onClick={() => deleteSelected(index)}
                  >
                    <RiCloseCircleLine />
                  </Box>

                  <Image
                    src={img[0]?.src ?? ""}
                    alt={name}
                    width={150}
                    height={150}
                    objectFit="cover"
                    onClick={() =>
                      updateSelected({ name, description, img, id: index })
                    }
                  />
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
          onClick={create}
        >
          {/* <img src={img} alt={name} /> */}
          <AddCircleOutlineIcon sx={{ fontSize: "40px", color: "#e0e0e0" }} />
        </Box>
      </Box>
    </Fragment>
  );
};

export default Highlights;
