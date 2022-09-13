import { Box, Typography } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import parse from "html-react-parser";
import { SxProps, Theme } from "@mui/material";
import { Fragment } from "react";
import Link from "next/link";
import { sliceText } from "../../../profile/articles";

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
    objectPosition: "70% 0",
    minHeight: "400px",
    // borderRadius: "10px 10px 0 0",
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

type TVenture = {
  id: string;
  name: string;
  description: string;
  images: string[];
  link: string;
  published: boolean;
  status: string;
  type: string;
  date: string;
};

const getFormat = (file: string) => {
  const result = file?.split(".").pop()?.toUpperCase();
  return result;
};

const filterFormat = (array: string[]) => {
  const newArray = [...array];

  const updateArray = newArray.find(
    (image) => getFormat(image) === "PNG" || getFormat(image) === "JPG"
  );

  console.log(updateArray, "Roman Riquelme");
  return updateArray;
};

const Venture = (venture: TVenture) => {
  const santize = (string: string) => {
    const reactElement = parse(string);
    return reactElement;
  };

  return (
    <Fragment>
      {venture ? (
        <Box sx={CardContainer}>
          <img
            src={(venture && filterFormat(venture?.images)) ?? ""}
            alt={venture?.name ?? ""}
          />
          <Box sx={CardHeader}>
            <Typography
              sx={{
                color: "#212121",
                fontWeight: 700,
                fontSize: "30px",
                margin: "15px 0 0 0",
              }}
            >
              {venture?.name ?? ""}
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
                  fontWeight: 600,
                  fontSize: "16px",
                }}
              >
                {venture?.status ? venture?.status : ""}
              </Typography>
            </Box>

            <Box
              style={{
                color: "#9e9e9e",
                fontWeight: 500,
                fontSize: "16px",
                margin: "5px 0 0 0",
                lineHeight: "30px",
              }}
            >
              {venture?.description
                ? santize(sliceText(venture?.description, 200))
                : ""}
            </Box>

            <Link href={"/venture"}>
              <a>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    color: "#9e9e9e",
                    fontWeight: 600,
                    fontSize: "16px",
                    margin: "12.5px 0 0 0",

                    "&:hover": {
                      color: "#757575",
                    },
                  }}
                >
                  Ver Proyecto
                  <KeyboardArrowRightIcon sx={{ color: "#9e9e9e" }} />
                </Box>
              </a>
            </Link>
          </Box>
        </Box>
      ) : null}
    </Fragment>
  );
};

export default Venture;
