import { Box, Typography } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import parse from "html-react-parser";
import { SxProps, Theme } from "@mui/material";
import { Fragment } from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { setProject } from "../../../../redux/slices/projects";
import { sliceText } from "../../../../components/Article";

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
    <Box sx={{ border: "unset !important" }}>
      {venture?.id ? (
        <Link href={venture?.link ? venture?.link : `/venture/${venture._id}`}>
          <a>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                backgroundColor: "#fff",
                cursor: "pointer",
                fontFamily: "'Poppins', sans-serif",
                fontSize: "20px",
                overflow: "hidden",
                border: "unset !important",

                img: {
                  objectFit: "cover",
                  width: "100%",
                  objectPosition: "70% 0",
                  minHeight: { xs: "360px", md: "400px" },
                },
              }}
            >
              <img
                src={venture?.images[0]?.src ?? ""}
                alt={venture?.name ?? ""}
              />
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography
                  sx={{
                    color: "#212121",
                    fontWeight: 600,
                    fontSize: { xs: "24px", md: "26px" },
                    margin: "15px 0 0 0",
                  }}
                >
                  {venture?.name ?? ""}
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  border: "1px solid transparent !important",
                  flexDirection: "column",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    margin: "10px 0 10px 0",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#4f4f4f",
                      fontWeight: 700,
                      fontSize: "16px",
                    }}
                  >
                    {venture?.status ? venture?.status : ""}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    color: "#4f4f4f",
                    fontWeight: 500,
                    fontSize: "16px",
                    margin: "5px 0 0 0",
                    lineHeight: { xs: "25px", md: "22px" },
                    textAlign: "left !important",
                  }}
                >
                  {venture?.description
                    ? santize(sliceText(venture?.description, 200))
                    : ""}
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    color: "#000",
                    fontWeight: 600,
                    fontSize: "16px",
                    margin: "18px 0 0 0",
                  }}
                  onClick={() => handleClick(venture)}
                >
                  Ver Proyecto
                  <KeyboardArrowRightIcon sx={{ color: "#9e9e9e" }} />
                </Box>
              </Box>
            </Box>
          </a>
        </Link>
      ) : null}
    </Box>
  );
};

export default Venture;
