import React, { Fragment, useState } from "react";
import Dashboard from "../../../components/Dashboard";
import UseTabs from "../../../components/Tabs";
import { Box, Paper } from "@mui/material";
import UseAccordion from "../../../components/Accordion";
import HeaderSelector from "./Components/Header-Selector";

const Layout = () => {
  const [tab, setTab] = useState<number>(0);

  const tab_options = [
    "Home",
    "Compañia",
    "Emprendimientos",
    "Noticias",
    "Contacto",
  ];

  const items = [
    {
      img: "https://res.cloudinary.com/gregomartocci/image/upload/v1658450788/sdp7axfl9ouoodgh2uhs.jpg",
      name: "Ostent Tower",
      size: "1.5 MB",
    },
    {
      img: "https://res.cloudinary.com/gregomartocci/image/upload/v1657430256/wqheyeka2askuihcx9ys.jpg",
      name: "Ostent Tower",
      size: "1.5 MB",
    },
    {
      img: "https://res.cloudinary.com/gregomartocci/image/upload/v1657430355/g7yz4ndlvgjjqvtidfa6.jpg",
      name: "Ostent Tower",
      size: "1.5 MB",
    },
    {
      img: "https://res.cloudinary.com/gregomartocci/image/upload/v1657646579/hdlhr0yvuvbkyqbevrov.jpg",
      name: "Ostent Tower",
      size: "1.5 MB",
    },
  ];

  return (
    <Fragment>
      <Dashboard>
        <Paper
          sx={{
            position: "relative",
            width: "100%",
            borderRadius: "10px",
            fontFamily: "Montserrat",
            boxShadow: "unset",
            border: "1px solid #e0e0e0",
          }}
        >
          <Box
            sx={{
              borderBottom: 1,
              borderColor: "divider",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                width: "1000px",
              }}
            >
              <UseTabs value={tab} setValue={setTab} options={tab_options} />
            </Box>
          </Box>

          <Box sx={{ padding: "10px 10px 0px 10px" }}>
            <UseAccordion
              name="Header"
              content={() => <HeaderSelector items={items} />}
            />
            <UseAccordion name="Frase 1" />
            <UseAccordion name="Frase 1" />
          </Box>
        </Paper>
      </Dashboard>
    </Fragment>
  );
};

export default Layout;
