import React, { useState } from "react";
import { Box } from "@mui/material";
import {
  SelectorContainer,
  SelectorFilter,
  SelectorFilters,
  SelectorTab,
  SelectorTabActive,
  SelectorTabs,
  SelectorWrapper,
} from "./Styles";
import ApartmentIcon from "@mui/icons-material/Apartment";
import HomeIcon from "@mui/icons-material/Home";
import ComboBox from "../Autocomplete";
import Button from "../Button/Index";

const Selector = () => {
  const [active, setActive] = useState(1);

  const selectTab = (number: number): void => {
    setActive(number);
  };

  return (
    <Box sx={SelectorContainer}>
      <Box sx={SelectorWrapper}>
        <Box sx={SelectorTabs}>
          <Box
            sx={active === 1 ? SelectorTabActive : SelectorTab}
            onClick={() => selectTab(1)}
          >
            <HomeIcon
              style={{
                fontSize: "20px",
              }}
            />
            <span
              style={{
                margin: "0 8px",
              }}
            >
              House
            </span>
          </Box>
          <Box
            sx={active === 2 ? SelectorTabActive : SelectorTab}
            onClick={() => selectTab(2)}
          >
            <ApartmentIcon />
            <span
              style={{
                margin: "0 8px",
              }}
            >
              Appartments
            </span>
          </Box>
        </Box>
        <Box sx={SelectorFilters}>
          <Box
            style={{
              display: "flex",
              justifyContent: "flex-start",
              fontSize: "14px",
            }}
          >
            <span>Location</span>
          </Box>
          <Box
            style={{
              display: "flex",
              justifyContent: "flex-start",
              fontSize: "14px",
            }}
          >
            <span>Type</span>
          </Box>
          <Box
            style={{
              display: "flex",
              justifyContent: "flex-start",
              fontSize: "14px",
            }}
          >
            <span>Price</span>
          </Box>
          <Box sx={SelectorFilter}></Box>
          <Box sx={SelectorFilter}>
            <ComboBox />
          </Box>
          <Box sx={SelectorFilter}>
            <ComboBox />
          </Box>
          <Box sx={SelectorFilter}>
            <ComboBox />
          </Box>
          <Box sx={SelectorFilter}>
            <Button type="Blue"> Search</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Selector;
