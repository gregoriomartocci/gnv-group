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

const SelectorB = () => {
  const [active, setActive] = useState(1);
  const dispatch = useDispatch();
  const state = useSelector((state: IState) => state?.projects);
  const { projects_filter, projects } = state;
  const [selectOptions, setSelectOptions] = useState([
    "Estado",
    "En desarrollo",
    "Finalizado",
  ]);

  const [input, setInput] = useState({
    status: "",
  });

  const filterVentures = (name: String) => {
    console.log(name, "name");

    console.log("COMPARACION", typeof projects_filter[0].status, typeof name)
    const filtered = projects.filter(
      (p:IProject) => String(p.status) === String(name)
    );
    dispatch(setFilter(filtered));
  };

  const selectTab = (number: number): void => {
    setActive(number);
  };

  return (
    <Box sx={SelectorContainer}>
      <Box sx={SelectorWrapper}>
        <Box sx={SelectorFilters}>
          <Box sx={SelectorFiltersLeft}>
            {/* <UseButton type="Primary">todos</UseButton> */}

            <Box sx={SelectorFilter}>
              <BasicSelect
                options={selectOptions}
                width="100%"
                value={input}
                setValue={setInput}
                name="status"
                placeholder="estado"
                filter={filterVentures}
              />
            </Box>
          </Box>
          <Box>
            <SearchBar />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SelectorB;
