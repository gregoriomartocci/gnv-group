import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

interface IUseAutocomplete {
  items: any;
  label?: string;
  placeholder: string;
}

export default function UseAutocomplete({
  items,
  label,
  placeholder,
}: IUseAutocomplete) {
  return (
    <React.Fragment>
      {label ? (
        <span
          style={{
            fontSize: "13px",
            color: "#212121",
            fontWeight: "700",
            margin: "10px 0",
          }}
        >
          {label}
        </span>
      ) : null}
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={items}
        fullWidth
        renderInput={(params) => (
          <TextField
            {...params}
            sx={{ width: "100%", color: "#eeeeee" }}
            placeholder={placeholder}
          />
        )}
      />
    </React.Fragment>
  );
}
