import React from "react";
import { Box, Typography } from "@mui/material";
import { string } from "yup";
import useWindowDimensions from "../../hooks/ScreenSize";

type Type = {
  value: string;
  label: string;
  name: string;
  description: string;
  onChangeHandler: any;
  height?: string;
  width?: string;
  fontSize?: string;
  labelFontSize?: string;
};

const TextArea = ({
  value,
  name,
  label,
  description,
  onChangeHandler,
  fontSize,
  labelFontSize,
}: Type) => {
  const { width, height } = useWindowDimensions();

  const xs = width && width < 600;

  return (
    <Box>
      <Typography
        sx={{
          fontSize: labelFontSize,
          color: "#212121",
          fontWeight: "600",
          margin: "5px 0",
        }}
      >
        {label}
      </Typography>
      <Box>
        <textarea
          style={{
            display: "flex",
            padding: xs ? "10px 15px" : "15px",
            width: "100%",
            height: xs ? "80px" : "120px",
            borderRadius: "5px",
            fontSize: xs ? "12px" : "15px",
            border: "1px solid #e0e0e0",
          }}
          value={value}
          name={name}
          placeholder={description}
          onChange={onChangeHandler}
        />
      </Box>
    </Box>
  );
};

export default TextArea;
