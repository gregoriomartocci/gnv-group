import React, { Fragment } from "react";
import { Box, Typography } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { SxProps, Theme } from "@mui/material";
import UseModal from "../../../../../components/Modal";
import Image from "next/image";
import { RiCloseCircleLine } from "react-icons/ri";
import { Reorder } from "framer-motion";

type Props = {
  items: any[];
  create: any;
  updateSelected: any;
  deleteSelected: any;
  reOrderItems: any;
};

const Highlights = ({
  items,
  create,
  updateSelected,
  deleteSelected,
  reOrderItems,
}: Props) => {
  return (
    <Fragment>
      <Box
        sx={{
          display: "flex",
        }}
      >
        <Reorder.Group
          axis="x"
          values={items}
          onReorder={reOrderItems}
          style={{
            display: "flex",
            listStyle: "none",
            overflowX: "auto",
          }}
          layoutScroll
        >
          {items?.map((item, index) => (
            <Reorder.Item
              value={item}
              id={item}
              key={item?.img?.length ? item?.img[0]?.name + index : index}
            >
              <Box
                key={index}
                sx={{
                  margin: "0 10px 0",
                  position: "relative",
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
                
                {item?.img?.length && (
                  <Image
                    src={item?.img?.length && (item?.img[0]?.src ?? "")}
                    alt={item?.name}
                    width={150}
                    height={150}
                    objectFit="cover"
                    onClick={() => updateSelected({ ...item, id: index })}
                  />
                )}

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
                    {item?.name}
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
                    {item?.description}
                  </Typography>
                </Box>
              </Box>
            </Reorder.Item>
          ))}
        </Reorder.Group>
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
            margin: "0 15px",
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
