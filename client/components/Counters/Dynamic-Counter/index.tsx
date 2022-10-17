import { animate } from "framer-motion";
import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

type IDynamicCounter = {
  from: number;
  to: number;
  duration: number;
  counterRef?: boolean;
  counterFontSize?: string;
};

export default function DynamicCounter({
  from,
  to,
  duration,
  counterRef,
  counterFontSize,
}: IDynamicCounter) {
  const [increase, setIncrease] = useState(to);

  const numberWithCommas = (x: number) => {
    let parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return parts.join(",");
  };

  useEffect(() => {
    if (counterRef) {
      animate(from, to, {
        duration,
        onUpdate(value) {
          setIncrease(Number(value.toFixed(0)));
        },
      });
    }
    return () => {};
  }, [counterRef]); // observer ==> counterRef

  return (
    <Box>
      <Typography sx={{ fontSize: counterFontSize }}>
        {numberWithCommas(increase)}
      </Typography>
    </Box>
  );
}
