import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

interface IUseAutocomplete {
  items: any;
  label?: string;
}

export default function UseAutocomplete({ items, label }: IUseAutocomplete) {
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
        sx={{ width: "100%", border: "none", outline: "none", focus: "none" }}
        renderInput={(params) => <TextField {...params} size="small" />}
      />
    </React.Fragment>
  );
}
