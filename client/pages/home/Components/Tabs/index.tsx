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
            padding: { xs: "15px 0 5px 0", md: "20px 28px" },
            width: { xs: "min-content", md: "max-content" },
            height: "120px",
            margin: { xs: "25px", md: "0 10px" },
            borderBottom: tab === id ? "3px solid #212121" : "",
            color: tab === id ? "#212121" : "#bdbdbd",
            cursor: "pointer",
          }}
          onClick={() => onClickHandler(id)}
        >
          <Typography
            sx={{
              fontSize: { xs: "25px", md: "30px" },
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
