import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { makeStyles } from "@mui/material";
import clsx from "clsx";
interface ISelect {
  options: string[];
  width: string;
  value: any;
  setValue: any;
  label?: string;
  name: string;
  placeholder: string;
}

const BasicSelect = ({
  options,
  width,
  value,
  setValue,
  label,
  name,
  placeholder,
}: ISelect) => {
  const handleChange = (event: SelectChangeEvent) => {
    setValue({ ...value, [name]: event.target.value });
  };

  React.useEffect(() => {
    value[name] === "" ? setValue({ ...value, [name]: placeholder }) : null;
  }, []);

  return (
    <Box sx={{ width }}>
      {label ? (
        <span
          style={{
            fontSize: "13px",
            color: "#9e9e9e",
            fontWeight: "600",
            margin: "10px 0",
          }}
        >
          {label}
        </span>
      ) : null}
      <FormControl style={{ width }}>
        <Select
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            width: "100%",
            border: "1px solid #e0e0e0",
            borderRadius: "5px",
            fontFamily: "'Montserrat', sans-serif",
            margin: "5px 0",
            fontSize: "13px",
          }}
          value={value[name]}
          onChange={handleChange}
        >
          {options.map((element: string, index: number) => {
            {
              return index !== 0 ? (
                <MenuItem
                  key={index}
                  sx={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "13px",
                  }}
                  value={element}
                >
                  {element}
                </MenuItem>
              ) : (
                <MenuItem
                  key={index}
                  sx={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "13px",
                  }}
                  value={element}
                  disabled
                >
                  {element}
                </MenuItem>
              );
            }
          })}
        </Select>
      </FormControl>
    </Box>
  );
};

export default BasicSelect;
