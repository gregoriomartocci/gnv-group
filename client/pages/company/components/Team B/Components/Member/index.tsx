import React from "react";
import { Box, Typography } from "@mui/material";
import { SxProps, Theme } from "@mui/material";

const ImageContainer: SxProps<Theme> = {
  position: "relative",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  textAlign: "center",
  borderRadius: "50",
  fontSize: "20px",
  height: "700px",
  width: "100%",
  maxWidth: "800px",

  img: {
    position: "absolute",
    top: 0,
    left: 0,
    display: "flex",
    height: "100%",
    width: "100%",
    objectFit: "cover",
  },
};

const CardContainer: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  position: "relative",
  alignItems: "flex-start",
  textAlign: "center",
  fontSize: "20px",

  cursor: "pointer",
};

const BodyContainer: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  padding: "15px 0",
  alignItems: "flex-start",
  textAlign: "left",
  fontSize: "20px",
  height: "100%",
};

type TMemberProps = {
  img: string;
  name: string;
  role: string;
};

const Member = ({ img, name, role }: TMemberProps) => {
  return (
    <Box sx={CardContainer}>
      <Box sx={ImageContainer}>
        <img src={img} alt={name}></img>
      </Box>

      <Box sx={BodyContainer}>
        <Typography
          sx={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: "20px",
            margin: "5px 0 0 0",
            fontWeight: "700",
            color: "#424242",
          }}
        >
          {name}
        </Typography>
        <Typography
          sx={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: "16px",
            margin: "2.5px 0 0 0",
            fontWeight: "600",
            color: "#bdbdbd",
          }}
        >
          {role}
        </Typography>
      </Box>
    </Box>
  );
};

export default Member;
