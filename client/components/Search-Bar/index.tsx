import React from "react";
import { Box, TextField } from "@mui/material";
import { Search } from "@mui/icons-material";
import { GridSearchIcon } from "@mui/x-data-grid";
import InputBase from "@mui/material/InputBase";
import { SearchInput } from "./Styles";

const SearchBar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "7px",
        border: "2px solid #e0e0e0",
        borderRadius: "50px",
      }}
    >
      <Search sx={{ margin: "0 10px", fontSize: "20px", color: "#bdbdbd" }} />
      <InputBase sx={SearchInput} placeholder="búsqueda por nombre" />
    </Box>
  );
};

export default SearchBar;
