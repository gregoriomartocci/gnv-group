import { Box } from "@mui/system";
import React from "react";

export type Props = {
  url: string;
  padding?: string;
  children?: any;
};

const Parallax = ({ url, children, padding }: Props) => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${url})`,
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        padding,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        display: "block",
      }}
    >
      {children}
    </Box>
  );
};

export default Parallax;
