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
    <Box>
      {variant === "small" ? (
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
          <Search
            sx={{ margin: "0 10px", fontSize: "20px", color: "#bdbdbd" }}
          />
          <InputBase
            sx={SearchInput}
            placeholder="búsqueda por nombre"
            value={value.search}
            onChange={onChangeHandler}
          />
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            padding: "7px",
            border: "2px solid #e0e0e0",
            borderRadius: "50px",
          }}
        >
          Ok
        </Box>
      )}
    </Box>
  );
};

export default SearchBar;
