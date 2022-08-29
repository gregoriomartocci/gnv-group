import { Box } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import parse from "html-react-parser";
import { SxProps, Theme } from "@mui/material";
import { Fragment } from "react";

const CardContainer: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#fff",
  borderRadius: "20px",
  cursor: "pointer",
  fontFamily: "'Poppins', sans-serif",
  fontSize: "20px",

  img: {
    objectFit: "cover",
    width: "100%",
    minHeight: "350px",
    maxHeight: "1000px",
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

const Venture = (item: any) => {
  const santize = (string: string) => {
    const reactElement = parse(string);
    return reactElement;
  };

  return (
    <Fragment>
      {item ? (
        <Box sx={CardContainer}>
          <img
            src={(item?.images && item?.images[0]?.src) ?? ""}
            alt={item?.name ?? ""}
          />
          <Box sx={CardHeader}>
            <span
              style={{
                color: "#212121",
                fontWeight: 600,
                fontSize: "30px",
                margin: "15px 0 0 0",
              }}
            >
              {item?.name ?? ""}
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
                {item?.status && item?.status.toUpperCase()}
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
              {item?.description && santize(item?.description)}
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
      ) : null}
    </Fragment>
  );
};

export default Venture;
