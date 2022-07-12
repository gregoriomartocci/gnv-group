import * as React from "react";
import { Box } from "@mui/material";
import { StaticImageData } from "next/image";
import { IProject } from "../../pages/profile/news";
import parse from "html-react-parser";
import { CardContainer } from "./Styles";

const Card = ({ children }: any) => {
  const santize = (string: string) => {
    const reactElement = parse(string);
    return reactElement;
  };

  return <Box sx={CardContainer}>{children}</Box>;
};

export default Card;
