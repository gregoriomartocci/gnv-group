import React from "react";
import { Box, Typography } from "@mui/material";
import { string } from "yup";

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
  height,
  width,
  fontSize,
  labelFontSize,
}: Type) => {
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
      <textarea
        style={{
          display: "flex",
          padding: "15px",
          width,
          height,
          borderRadius: "5px",
          fontSize,
          border: "1px solid #e0e0e0",
        }}
        value={value}
        name={name}
        placeholder={description}
        onChange={onChangeHandler}
      />
    </Box>
  );
};

export default TextArea;
