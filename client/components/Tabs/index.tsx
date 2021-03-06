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
}

export default function UseTabs({ value, setValue, options }: IChildren) {
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          variant="fullWidth"
          sx={{
            outline: "none",
            "&:active": {
              outline: "none",
            },
            "&:focus": {
              outline: "none",
            },
          }}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          {options.map((item) => {
            return (
              <Tab
                sx={{
                  textTransform: "none",
                  color: "#9BA5B3",
                  fontFamily: "'Poppins'",
                }}
                label={item}
              />
            );
          })}
        </Tabs>
      </Box>
    </Box>
  );
}
