import React, { useState } from "react";
import { Box } from "@mui/material";
import {
  SelectorContainer,
  SelectorFilter,
  SelectorFilters,
  SelectorFiltersLeft,
  SelectorWrapper,
} from "./Styles";
import ApartmentIcon from "@mui/icons-material/Apartment";
import HomeIcon from "@mui/icons-material/Home";
import Button from "../Button";
import UseAutocomplete from "../Autocomplete";
import UseButton from "../Button";
import SearchBar from "../Search-Bar";
import BasicSelect from "../Select";
import { useDispatch, useSelector } from "react-redux";
import { IProject, setFilter } from "../../redux/slices/projects";
import { IState } from "../Menu";

type TSelector = {
  selectOptions: any;
  input: any;
  setInput: any;
  filterVentures: any;
  width: string;
};

const Selector = ({
  selectOptions,
  input,
  setInput,
  filterVentures,
  width,
}: TSelector) => {
  return (
    <Box sx={SelectorContainer}>
      <BasicSelect
        options={selectOptions}
        width={width}
        value={input}
        setValue={setInput}
        name="status"
        placeholder="estado"
        filter={filterVentures}
      />
    </Box>
  );
};

export default Selector;
