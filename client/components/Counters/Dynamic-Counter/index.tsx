import { Typography } from "@mui/material";
import { animate } from "framer-motion";
import { Box } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

export default function DynamicCounter({ from, to, duration }) {
  const [increase, setIncrease] = useState(to);

  useEffect(() => {

    const controls = animate(from, to, {
      duration,
      onUpdate(value) {
        setIncrease(value.toFixed(0));
      },
    });

    return () => controls.stop();
  }, []);

  return <Box>{increase}</Box>;
}
