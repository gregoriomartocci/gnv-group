import { animate } from "framer-motion";
import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";

type IDynamicCounter = {
  from: number;
  to: number;
  duration: number;
  counterRef: boolean;
};

export default function DynamicCounter({
  from,
  to,
  duration,
  counterRef,
}: IDynamicCounter) {
  const [increase, setIncrease] = useState(to);

  useEffect(() => {

    console.log("ME ACTUALIZO")
    
    if (counterRef) {
      animate(from, to, {
        duration,
        onUpdate(value) {
          setIncrease(Number(value.toFixed(0)));
        },
      });
    }
    return () => {};
  }, [counterRef]);

  return <Box>{increase}</Box>;
}
