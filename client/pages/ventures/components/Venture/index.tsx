import { Box, Typography } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import parse from "html-react-parser";
import { SxProps, Theme } from "@mui/material";
import { Fragment } from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { setProject } from "../../../../redux/slices/projects";
import { sliceText } from "../../../../components/Article";
import { useRouter } from "next/router";

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
  const router = useRouter();

  const handleClick = () => {
    dispatch(setProject({}));
    router.push(venture?.link ? venture?.link : `/venture/${venture._id}`);
  };

  return (
    <Box sx={{ border: "unset !important" }} onClick={handleClick}>
      {venture?.id ? (
        // <Link href={venture?.link ? venture?.link : `/venture/${venture._id}`}>
        // <a>
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
              objectPosition: "70% center",
              // maxHeight: { xs: "200px", md: "270px" },
            },
          }}
        >
          <img src={venture?.images[0]?.src ?? ""} alt={venture?.name ?? ""} />
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography
              sx={{
                color: "#212121",
                fontWeight: 600,
                fontSize: { xs: "17px", md: "20px" },
                margin: "10px 0 0 0",
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
                margin: "5px 0 0 0",
              }}
            >
              <Typography
                sx={{
                  color: "#4f4f4f",
                  fontWeight: 700,
                  fontSize: { xs: "12px", md: "14px" },
                }}
              >
                {venture?.status ? venture?.status : ""}
              </Typography>
            </Box>
            {/* 
                <Box
                  sx={{
                    color: "#4f4f4f",
                    fontWeight: 500,
                    fontSize: { xs: "12px", md: "14px" },
                    margin: "5px 0 0 0",
                    lineHeight: { xs: "18px", md: "20px" },
                    textAlign: "left !important",
                  }}
                >
                  {venture?.description
                    ? santize(sliceText(venture?.description, 200))
                    : ""}
                </Box> */}

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                color: "#000",
                fontWeight: 600,
                fontSize: { xs: "12px", md: "14px" },
                margin: "5px 0 0 0",
              }}
              onClick={() => handleClick(venture)}
            >
              Ver Proyecto
              <KeyboardArrowRightIcon
                sx={{ color: "#9e9e9e", fontSize: "16px" }}
              />
            </Box>
          </Box>
        </Box>
      ) : // </a>
      // </Link>
      null}
    </Box>
  );
};

export default Venture;
