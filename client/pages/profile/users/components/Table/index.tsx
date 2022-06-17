import * as React from "react";
import { Box } from "@mui/material";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { columns, rows } from "../../data";


export default function DataTable() {

  const actionColumn = [{field: "action", headerName:"Action", width: 200, renderCell: () => {
    return (

      <Box></Box>

    )
  }}]

  return (
    <Box style={{ width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </Box>
  );
}
