import React from "react";
import { Box, Typography } from "@mui/material";

type Type = {
  value: string;
  label: string;
  name: string;
  description: string;
  onChangeHandler: any;
};

const TextArea = ({
  value,
  name,
  label,
  description,
  onChangeHandler,
}: Type) => {
  return (
    <Box>
      <Typography
        sx={{
          fontSize: "15px",
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
          width: "100%",
          height: "200px",
          borderRadius: "5px",
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
