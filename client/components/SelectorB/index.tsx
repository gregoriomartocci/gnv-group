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

const SelectorB = () => {
  const [active, setActive] = useState(1);
  const selectTab = (number: number): void => {
    setActive(number);
  };

  const types = ["Local Comercial", "Departamento", "Casa"];
  const status = ["En desarrollo", "Finalizado"];

  return (
    <Box sx={SelectorContainer}>
      <Box sx={SelectorWrapper}>
        <Box sx={SelectorFilters}>
          <Box sx={SelectorFiltersLeft}>
            {/* <UseButton type="Primary">todos</UseButton> */}
            <Box sx={SelectorFilter}>
              <UseAutocomplete items={types} placeholder="tipo" />
            </Box>
            <Box sx={SelectorFilter}>
              <UseAutocomplete items={status} placeholder="estado" />
            </Box>
          </Box>
          <Box>
           <SearchBar/>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SelectorB;
