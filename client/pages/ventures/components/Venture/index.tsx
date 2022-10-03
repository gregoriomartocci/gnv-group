import { Box, Typography } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import parse from "html-react-parser";
import { SxProps, Theme } from "@mui/material";
import { Fragment } from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { setProject } from "../../../../redux/slices/projects";
import { sliceText } from "../../../../components/Article";

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

// const getFormat = (file: string) => {
//   const result = file?.split(".")?.pop()?.toUpperCase();
//   return result;
// };

// const filterFormat = (array: string[]) => {
//   if (array) {
//     const newArray = [...array];

//     const updateArray = newArray.find(
//       ({ src }) => getFormat(src) === "PNG" || getFormat(src) === "JPG"
//     );

//     return updateArray;
//   }
//   return;
// };

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

const Venture = (venture: any) => {
  const dispatch = useDispatch();

  const santize = (string: string) => {
    if (string) {
      const reactElement = parse(string);
      return reactElement;
    }
    return;
  };

  const handleClick = (venture) => {
    dispatch(setProject(venture));
  };

  return (
    <Fragment>
      {venture?.id ? (
        <Link href={venture?.link ? venture?.link : `/venture/${venture._id}`}>
          <a target="_blank">
            <Box sx={CardContainer}>
              <img
                src={venture?.images[0]?.src ?? ""}
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
                    textAlign: "justify !important",
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
                      onClick={() => handleClick(venture)}
                    >
                      Ver Proyecto
                      <KeyboardArrowRightIcon sx={{ color: "#9e9e9e" }} />
                    </Box>
                  </a>
                </Link>
              </Box>
            </Box>
          </a>
        </Link>
      ) : null}
    </Fragment>
  );
};

export default Venture;
