import React from "react";
import { Box } from "@mui/material";
import { QuoteContainer } from "./Styles";

type TAuthor = {
  name: string;
  position: string;
};
interface IQuote {
  text: string;
  img: string;
  author: TAuthor;
}

const Quote = ({ img, text, author: { name, position } }: IQuote) => {
  return (
    <Box sx={QuoteContainer}>
      <Box>
        <img src={img} alt={name} />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "100%",
          width: "100%",
          padding: "0 7.5%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            margin: "0 0 35px 0",
            fontSize: "32px",
            color: "#424242",
            fontWeight: 500,
            fontFamily: "'Poppins'",
            fontStyle: "italic",
          }}
        >
          {text}
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              fontSize: "24px",
              color: "#424242",
              fontWeight: 500,
              margin: "0 0 7.5px 0",
            }}
          >
            {name}
          </Box>
          <Box
            sx={{
              fontSize: "15px",
              fontWeight: 400,
              color: "#9e9e9e",
            }}
          >
            {position}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Quote;
