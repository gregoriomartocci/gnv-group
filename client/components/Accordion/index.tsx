import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";

type IAccordion = {
  name: string;
  content?: any;
  
};

const UseAccordion = ({ name, content }: IAccordion) => {
  return (
    <Box sx={{ margin: "15px" }}>
      <Accordion
        sx={{
          boxShadow: "rgba(0, 0, 0, 0.15) 0px 2px 6px",
          margin: "25px 0",
        }}
      >
        <AccordionSummary
          sx={{ padding: "0px 25px" }}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          component="span"
        >
          <Typography
            sx={{
              fontFamily: "'Poppins', sans-serif",
              color: "#757575",
              fontWeight: 600,
              fontSize: "15px",
            }}
          >
            {name}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>{content && content()}</AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default UseAccordion;
