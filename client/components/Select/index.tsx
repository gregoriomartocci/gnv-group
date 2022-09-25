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
  filter?: any;
}

const BasicSelect = ({
  options,
  width,
  value,
  setValue,
  label,
  name,
  placeholder,
  filter,
}: ISelect) => {

  const handleChange = (event: SelectChangeEvent) => {
    setValue({ ...value, [name]: event.target.value });
    filter && filter(event.target.value);
  };

  React.useEffect(() => {
    typeof setValue === "function" &&
      setValue({ ...value, [name]: placeholder });
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
      <FormControl style={{ width }} variant="outlined">
        <Select
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            width: "100%",
            border: "unset",
            borderRadius: "5px",
            fontFamily: "'Poppins', sans-serif",
            margin: "5px 0",
            fontSize: "14px",
            color: "#9e9e9e",
          }}
          variant="outlined"
          inputProps={{
            classes: {
              root: "unset",
              icon: "unset",
            },
          }}
          value={value[name]}
          defaultValue={placeholder}
          onChange={(e) => handleChange(e)}
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
                  key={0}
                  sx={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "13px",
                  }}
                  value={element}
                  disabled
                  hidden
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
