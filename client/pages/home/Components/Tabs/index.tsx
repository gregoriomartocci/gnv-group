import React from "react";
import { Box, Typography } from "@mui/material";
import { sanitize } from "../../../company";

interface IUseTabs {
  tab: number;
  items: IMapItem[];
  setTab: React.Dispatch<React.SetStateAction<number>>;
}

interface IMapItem {
  title: string;
  id: number;
  coordinates?: number[];
}

const UseTabs = ({ items, tab, setTab }: IUseTabs) => {
  const onClickHandler = (id: number) => {
    setTab(id);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        flexDirection: { xs: "row", sm: "row" },
      }}
    >
      {items?.map(({ title, id }: IMapItem) => (
        <Box
          key={id}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px 30px",
            width: "max-content",
            height: "120px",
            margin: "0 10px",
            borderBottom: tab === id ? "3px solid #212121" : "",
            color: tab === id ? "#212121" : "#bdbdbd",
            cursor: "pointer",
          }}
          onClick={() => onClickHandler(id)}
        >
          <Typography
            sx={{
              fontSize: { xs: "22.5px", md: "26px" },
              fontWeight: 600,
              textAlign: "center",
              width: "100%",
              whiteSpace: "no-wrap",
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
