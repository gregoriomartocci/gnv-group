import { Box, Typography } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import parse from "html-react-parser";
import { SxProps, Theme } from "@mui/material";
import { Fragment } from "react";

const CardContainer: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#fff",
  // borderRadius: "10px",
  cursor: "pointer",
  fontFamily: "'Poppins', sans-serif",
  fontSize: "20px",
  overflow: "hidden",

  img: {
    objectFit: "cover",
    width: "100%",
    objectPosition: "65% 0",
    // borderRadius: "10px 10px 0 0",
    minHeight: "400px",
  },
};

const CardHeader: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
};

const CardBody: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
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
            <Typography
              sx={{
                color: "#212121",
                fontWeight: 700,
                fontSize: "28px",
                margin: "15px 0 0 0",
              }}
            >
              {item?.name ?? ""}
            </Typography>
          </Box>

          <Box sx={CardBody}>
            <Box
              style={{
                display: "flex",
                alignItems: "center",
                margin: "7.5px 0 0 0",
              }}
            >
              <Typography
                sx={{
                  color: "#9e9e9e",
                  fontWeight: 500,
                  fontSize: "16px",
                }}
              >
                {item?.status && item?.status}
              </Typography>
            </Box>

            <Box
              style={{
                color: "#9e9e9e",
                fontWeight: 500,
                fontSize: "17px",
                margin: "10px 0 0 0",
                lineHeight: "30px",
              }}
            >
              {item?.description && santize(item?.description)}
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                color: "#757575",
                fontWeight: 600,
                fontSize: "16px",
                margin: "17.5px 0 0 0",

                "&:hover": {
                  color: "#616161",
                },
              }}
            >
              Ver Proyecto
              <KeyboardArrowRightIcon sx={{ color: "#9e9e9e" }} />
            </Box>
          </Box>
        </Box>
      ) : null}
    </Fragment>
  );
};

export default Venture;
