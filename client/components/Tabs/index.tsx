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

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

interface IChildren {
  children: React.ReactNode[];
}

export default function UseTabs({ children }: IChildren) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  function TabPanel({ children, index }: ITabPanel) {
    return (
      <React.Fragment>
        {value === index && (
          <Box aria-labelledby={`simple-tab-${index}`}>
            {value === index && (
              <Box sx={{ p: "25px 0px" }}>
                <Typography>{children}</Typography>
              </Box>
            )}
          </Box>
        )}
      </React.Fragment>
    );
  }

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          variant="fullWidth"
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Información Básica" {...a11yProps(0)} />
          <Tab label="Multimedia" {...a11yProps(1)} />
          <Tab label="Descripción" {...a11yProps(2)} />
        </Tabs>
      </Box>

      <TabPanel value={value} index={0}>
        {children[value]}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {children[value]}
      </TabPanel>
      <TabPanel value={value} index={2}>
        {children[value]}
      </TabPanel>
    </Box>
  );
}
