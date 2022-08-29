
import { Box } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import parse from "html-react-parser";
import { motion } from "framer-motion";

import { SxProps, Theme } from "@mui/material";

const CardContainer: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#fff",
  borderRadius: "20px",
  cursor: "pointer",
  fontFamily: "'Poppins', sans-serif",
  fontSize: "20px",
  "&:hover": {
    boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
  },
  padding: "20px",
  margin: "15px",

  img: {
    objectFit: "cover",
    width: "100%",
    borderRadius: "15px",
  },
};

const CardHeader: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  fontFamily: "'Poppins', sans-serif",
};

 const CardBody: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  fontFamily: "'Poppins', sans-serif",
};


const Venture = ({ images, name, status, description }: any) => {
  const santize = (string: string) => {
    const reactElement = parse(string);
    return reactElement;
  };

  return (
    <Box sx={CardContainer}>
      <img src={images[0]?.src ?? ""} alt={name} />
      <Box sx={CardHeader}>
        <span
          style={{
            color: "#212121",
            fontWeight: 600,
            fontSize: "25px",
            margin: "15px 0",
          }}
        >
          {name}
        </span>
      </Box>

      <Box sx={CardBody}>
        <Box style={{ display: "flex", alignItems: "center" }}>
          <span
            style={{
              color: "#212121",
              fontWeight: 600,
              fontSize: "12px",
            }}
          >
            {status}
          </span>
        </Box>

        <Box
          style={{
            color: "#424242",
            fontWeight: 600,
            fontSize: "12px",
            margin: "10px 0",
          }}
        >
          {santize(description ?? "")}
        </Box>

        <Box
          style={{
            display: "flex",
            alignItems: "center",
            color: "#424242",
            fontWeight: 600,
            fontSize: "12px",
            margin: "10px 0",
          }}
        >
          Ver Proyecto
          <KeyboardArrowRightIcon />
        </Box>
      </Box>
    </Box>
  );
};

export default Venture;
