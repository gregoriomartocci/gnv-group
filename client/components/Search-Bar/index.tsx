import React from "react";
import { Box, TextField } from "@mui/material";
import { Search } from "@mui/icons-material";
import { GridSearchIcon } from "@mui/x-data-grid";
import InputBase from "@mui/material/InputBase";
import { SearchInput } from "./Styles";

interface ISearchBar {
  onChange: any;
  value: any;
  setValue: any;
}

const SearchBar = ({ onChange, value, setValue }: ISearchBar) => {

  const onChangeHandler = (e: any) => {
    setValue({ ...value, search: e.target.value });
    onChange(e.target.value);
  };

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
      <InputBase
        sx={SearchInput}
        placeholder="búsqueda por nombre"
        value={value.search}
        onChange={onChangeHandler}
      />
    </Box>
  );
};

export default SearchBar;
