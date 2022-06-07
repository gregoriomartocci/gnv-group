import React from "react";
import { Box } from "@mui/material";
import ImageOne from "../../assets/images/Image-1.jpg";
import ImageTwo from "../../assets/images/Image-2.jpg";
import { ColumnLeft, ColumRight, Container, Reverse, SectionStyle } from "./Styles";
import { StaticImageData } from "next/image";
import Button from "../Button";

export const InfoDataOne = {
  heading: "Conozca nuestras propiedades",
  paragraphOne:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita repudiandae voluptas nemo asperiores facilis doloribus placeat. Quisquam a eos necessitatibus?",
  paragraphOTwo:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita repudiandae voluptas nemo asperiores facilis doloribus placeat. Quisquam a eos necessitatibus?",
  buttonLabel: "View Homes",
  image: ImageOne,
  reverse: false,
  delay: 100,
};

export const InfoDataTwo = {
  heading: "Diseños modernos",
  paragraphOne:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita repudiandae voluptas nemo asperiores facilis doloribus placeat. Quisquam a eos necessitatibus?",
  paragraphOTwo:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita repudiandae voluptas nemo asperiores facilis doloribus placeat. Quisquam a eos necessitatibus?",
  buttonLabel: "View Homes",
  image: ImageTwo,
  reverse: true,
  delay: 300,
};

export interface ISectionProps {
  heading: string;
  paragraphOne: string;
  paragraphOTwo?: string;
  buttonLabel: string;
  image: StaticImageData;
  reverse?: boolean;
  delay?: number;
}

const Section = ({
  heading,
  paragraphOne,
  paragraphOTwo,
  buttonLabel,
  image,
  reverse,
  delay,
}: ISectionProps) => {
  return (
    <Box sx={SectionStyle}>
      <Box sx={reverse ? Reverse : Container}>
        <Box sx={ColumnLeft}>
          <h1>{heading}</h1>
          <p>{paragraphOne}</p>
          <Box style={{ width: "150px" }}>
            <Button type={"Primary"}>View Home</Button>
          </Box>
        </Box>
        <Box sx={ColumRight}>
          <img src={image?.src} alt="home" />
        </Box>
      </Box>
    </Box>
  );
};

export default Section;
