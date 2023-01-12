import React from "react";
import Box from "@mui/material/Box";
import Image from "next/image";

const Licence = ({ item }: any) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: { xs: "100%", sm: "auto" },
      }}
    >
      {item?.map(({ img, width }, index) => {
        return (
          <Box
            key={index}
            sx={{
              width,
              margin: "30px 10px",
            }}
          >
            <Image src={img} alt="Licence" objectFit="cover" />
          </Box>
        );
      })}
    </Box>
  );
};

export default Licence;
