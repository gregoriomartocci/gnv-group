import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { TDemo } from "../..";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Link from "next/link";
import { useRouter } from "next/router";
import { setProject } from "../../../../redux/slices/projects";
import { useDispatch } from "react-redux";

const Card = (
  { img, title, link, objectPosition, sm }: TDemo,
  id: string,
  navigate: (id: string) => void
) => {
  const [hover, setHover] = useState<boolean>(false);
  const router = useRouter();
  const dispatch = useDispatch();

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  const onClickHandler = () => {
    dispatch(setProject({}));
    router.push(link ? link : "");
  };

  return (
    // <Link href={link ? link : ""}>
    //   <a>
    <Box
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClickHandler}
      sx={{
        position: "relative",
        display: "flex",
        cursor: "pointer",
        fontFamily: "'Poppins', sans-serif",
        top: 0,
        left: 0,
        width: "100%",
        height: { xs: "60vh", md: "50vh" },
        overflow: "hidden",

        img: {
          display: "flex",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition,
          transition: "all 1.25s ease",

          "&:hover ": {
            transition: "all 1.25s ease",
            transform: "scale(1.05)",
          },
        },
      }}
    >
      <img src={img ? img : ""} alt={title ? title : ""} />

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          left: 0,
          width: "100%",
          userSelect: "none",
          flexDirection: "column",
          pointerEvents: "auto",
          height: { xs: "90px", md: "90px" },
          padding: { xs: "10px", md: "65px" },
          color: "#fff",
          background: "rgba(255,255,255,0)",
          backdropFilter: "blur(5px)",
          boxShadow: "0 8px 32px rgba(31,38,135, 0.37)",
          bottom: `${sm ? 0 : hover ? 0 : "-150px"}`,
          transition: "all 1.25s ease",
          transform: "scale(1.05)",
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "18px", md: "20px" },
            fontWeight: 500,
            fontFamily: "'Poppins', sans-serif !important",
          }}
        >
          {title}
        </Typography>

        <Box
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: "18px",
            margin: "5px 0",
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 500,
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              ver emprendimiento
            </Typography>
          </Box>
          <Box sx={{ height: "100%" }}>
            <KeyboardArrowRightIcon sx={{ height: "100%" }} />
          </Box>
        </Box>
      </Box>
    </Box>
    //   </a>
    // </Link>
  );
};

export default Card;
