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
  variant?: "small" | "large";
}

const SearchBar = ({
  onChange,
  value,
  setValue,
  variant = "small",
}: ISearchBar) => {
  const onChangeHandler = (e: any) => {
    setValue({ ...value, search: e.target.value });
    onChange(e.target.value);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        padding: { sx: "35px 5px 0 5px", md: "25px 5px" },
        width: "100%",
      }}
    >
      <Search
        sx={{
          margin: "0  20px 0 5px",
          fontSize: { xs: "22px", md: "25px" },
          color: "#bcbcbc",
        }}
      />
      <InputBase
        sx={{
          display: "flex",
          width: "100%",
          flexDirection: "column",
          color: "#757575",
          fontSize: { sx: "14px", md: "17px" },
        }}
        placeholder="Búsqueda por nombre"
        value={value?.search}
        onChange={onChangeHandler}
      />
    </Box>
  );
};

export default SearchBar;
