import { CardBody, CardContainer, CardHeader } from "./Styles";
import { Box } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import parse from "html-react-parser";

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
            fontSize: "30px",
            margin: "15px 0 0 0",
          }}
        >
          {name}
        </span>
      </Box>

      <Box sx={CardBody}>
        <Box
          style={{
            display: "flex",
            alignItems: "center",
            margin: "5px 0 0 0",
          }}
        >
          <span
            style={{
              color: "#212121",
              fontWeight: 700,
              fontSize: "16px",
            }}
          >
            {status.toUpperCase()}
          </span>
        </Box>

        <Box
          style={{
            color: "#757575",
            fontWeight: 500,
            fontSize: "17px",
            margin: "10px 0 0 0",
          }}
        >
          {santize(description ?? "")}
        </Box>
        <Box
          style={{
            display: "flex",
            alignItems: "center",
            color: "#212121",
            fontWeight: 600,
            fontSize: "17px",
            margin: "10px 0 0 0",
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
