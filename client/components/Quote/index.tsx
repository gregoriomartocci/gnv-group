import React from "react";
import { Box } from "@mui/material";
import { QuoteContainer } from "./Styles";
import { motion } from "framer-motion";

type TAuthor = {
  name: string;
  position: string;
};
interface IQuote {
  text: string;
  img: string;
  author: TAuthor;
  rounded?: boolean;
}

const Quote = ({ img, text, author: { name, position }, rounded }: IQuote) => {
  const FadeFromBottom = {
    offscreen: { y: 75, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: { duration: 2 },
    },
  };

  const FadeFromTop = {
    offscreen: { y: -75, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: { duration: 2 },
    },
  };

  return (
    <Box
      sx={{
        img: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "400px",
          height: "400px",
          borderRadius: `${rounded ? "50%" : 0} `,
          objectFit: "cover",
          transform: "scale(1.025)",
        },
      }}
      style={QuoteContainer}
    >
      <motion.div
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: false, amount: 0 }}
        variants={FadeFromTop}
      >
        <Box>
          <img src={img} alt={name} />
        </Box>
      </motion.div>

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
        <motion.div
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{ once: false, amount: 0 }}
          variants={FadeFromBottom}
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
        </motion.div>
      </Box>
    </Box>
  );
};

export default Quote;
