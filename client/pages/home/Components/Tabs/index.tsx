import React from "react";
import { Box, Typography } from "@mui/material";
import { sanitize } from "../../../company";

const UseTabs = ({ tab, setTab }) => {
  const items = [
    { title: "GNV Argentina", id: 1 },
    { title: "GNV Uruguay", id: 2 },
  ];

  const onClickHandler = (id: number) => {
    setTab(id);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "0 10%",
      }}
    >
      {items?.map(({ title, id }) => (
        <Box
          key={id}
          sx={{
            display: "flex",
            padding: "25px 15px",
            width: "160px",
            margin: "0 10px",
            borderBottom: tab === id ? "2px solid #212121" : "",
            color: tab === id ? "#212121" : "#9e9e9e",
          }}
          onClick={() => onClickHandler(id)}
        >
          <Typography
            sx={{
              fontSize: "25px",
              fontWeight: 700,
              lineHeight: "40px",
              textAlign: "center",
            }}
          >
            {title}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default UseTabs;
