import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

interface ITabPanel {
  children?: React.ReactNode;
  index: number;
  value: number;
}

interface IChildren {
  value: number;
  setValue: any;
  options: string[];
  border?: boolean;
  width?: string;
  fontSize?: string;
  fontWeight?: string;
  color?: string;
  p?: string;
}

export default function UseTabs({
  value,
  setValue,
  options,
  border,
  width,
  fontSize,
  fontWeight,
  color,
  p,
}: IChildren) {
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: `${width ? width : "100%"}` }}>
      <Box sx={`${border ? { borderBottom: 1, borderColor: "divider" } : {}}`}>
        <Tabs
          value={value}
          variant="fullWidth"
          sx={{
            outline: "none",
            "&:active": {
              outline: "none",
              color: "#757575",
            },
            "&:focus": {
              outline: "none",
            },
            "& .css-1253nat-MuiButtonBase-root-MuiTab-root.Mui-selected": {
              color: "#424242",
              fontWeight: 600,
            },
          }}
          onChange={handleChange}
          aria-label="tabs"
        >
          {options.map((item, key) => {
            return (
              <Tab
                sx={{
                  textTransform: "none",
                  color: `${color ? `${color} !important` : ""}`,
                  opacity: `${value === key ? 1 : 0.5}`,
                  fontSize: `${fontSize ? fontSize : ""}`,
                  fontWeight: `${fontWeight ? fontWeight : ""}`,
                  p: `${p ? p : ""}`,
                }}
                key={key}
                label={item}
              />
            );
          })}
        </Tabs>
      </Box>
    </Box>
  );
}
