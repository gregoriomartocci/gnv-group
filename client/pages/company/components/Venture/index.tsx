import { CardBody, CardContainer, CardHeader } from "./Styles";
import { Box } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import parse from "html-react-parser";
import { motion } from "framer-motion";

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
