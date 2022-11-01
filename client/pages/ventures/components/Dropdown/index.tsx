import { Box, Typography } from "@mui/material";
import React, { useCallback, useEffect, useRef, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import OutsideAlerter from "../../../../hooks/ClickListener";

type Type = {
  items: any[];
  placeholder: string;
  action: any;
  width: string;
  name?: string;
  optionsHeight?: string;
  border?: boolean;
};

const Dropdown = ({
  items,
  placeholder,
  action,
  width,
  optionsHeight,
  border,
}: Type) => {
  const [active, setActive] = useState(false);
  const [selected, setSelected] = useState("");

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
          padding: { xs: "12.5px 25px", sm: "15px 25px" },
          borderRadius: "5px",
          cursor: "pointer",
          border: border && "2px solid #eeeeee",
        }}
        onClick={handleClick}
      >
        <Typography
          sx={{
            fontSize: { xs: "14px", md: "16px" },
            fontWeight: 500,
            color: "#9e9e9e",
          }}
        >
          {!selected ? placeholder : selected}
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
              width,
              boxShadow: "rgba(0, 0, 0, 0.25) 0px 1.5px 4px",
              top: "calc(100% + 10px)",
              left: 0,
              zIndex: 5000,
            }}
          >
            {items?.map((element, key) => {
              return (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    textAlign: "left",
                    height: optionsHeight ?? "",
                    padding: { xs: "8.5px 22.5px", md: "10px 22.5px" },
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
                      fontSize: { xs: "13px", md: "14px" },
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
