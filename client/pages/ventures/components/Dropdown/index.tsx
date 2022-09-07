import { Box, Typography } from "@mui/material";
import React, { useCallback, useEffect, useRef, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import OutsideAlerter from "../../../../hooks/ClickListener";

type Type = {
  items: any[];
  placeholder: string;
  action: any;
  width: string;
};

const Dropdown = ({ items, placeholder, action, width }: Type) => {
  const [active, setActive] = useState(false);
  const [selected, setSelected] = useState(placeholder);

  const handleClick = () => {
    setActive(!active);
  };

  const onChangeHandler = (element) => {
    setSelected(element), action(element);
  };

  return (
    <OutsideAlerter action={setActive} value={false}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width,
          position: "relative",
          justifyContent: "space-between",
          padding: "15px 25px",
          borderRadius: "5px",
          cursor: "pointer",
          border: "2px solid #f5f5f5",

          "&:hover": {
            border: "2px solid #eeeeee",
          },
        }}
        onClick={handleClick}
      >
        <Typography
          sx={{ fontSize: "17px", fontWeight: 500, color: "#9e9e9e" }}
        >
          {selected}
        </Typography>

        <KeyboardArrowDownIcon
          sx={{
            color: "#bdbdbd",
            transform: `${active && "rotate(180deg)"}`,
            transition: "0.25s ease all",
          }}
        />

        {active && (
          <Box
            sx={{
              display: "flex",
              position: "absolute",
              backgroundColor: "#fff",
              flexDirection: "column",
              borderRadius: "5px",
              width: `${width ? width : "200px"}`,
              boxShadow: "rgba(0, 0, 0, 0.25) 0px 1.5px 4px",
              top: "calc(100% + 10px)",
              left: 0,
            }}
          >
            {items?.map((element, key) => {
              return (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    textAlign: "left",
                    padding: "15px 22.5px",
                    borderRadius: "5px",
                    "&:hover": {
                      backgroundColor: "#fafafa",
                    },
                  }}
                  key={key}
                  onClick={() => onChangeHandler(element)}
                >
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontWeight: 500,
                      color: "#9e9e9e",
                    }}
                  >
                    {element}
                  </Typography>
                </Box>
              );
            })}
          </Box>
        )}
      </Box>
    </OutsideAlerter>
  );
};

export default Dropdown;
