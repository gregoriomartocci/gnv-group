import { Box } from "@mui/material";
import React, { useCallback, useMemo, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import {
  CheckboxSelectionCallbackParams,
  ColDef,
  GridReadyEvent,
  HeaderCheckboxSelectionCallbackParams,
} from "ag-grid-community";

var checkboxSelection = function (params: CheckboxSelectionCallbackParams) {
  // we put checkbox on the name if we are not doing grouping
  return params.columnApi.getRowGroupColumns().length === 0;
};

var headerCheckboxSelection = function (
  params: HeaderCheckboxSelectionCallbackParams
) {
  // we put checkbox on the name if we are not doing grouping
  return params.columnApi.getRowGroupColumns().length === 0;
};

const Table = () => {
  const containerStyle = useMemo(() => ({ width: "100%", height: "100%" }), []);
  const gridStyle = useMemo(() => ({ height: "100%", width: "100%" }), []);
  const [rowData, setRowData] = useState<any[]>();
  const [columnDefs, setColumnDefs] = useState<ColDef[]>([
    {
      field: "athlete",
      minWidth: 170,
      checkboxSelection,
      headerCheckboxSelection,
    },
    { field: "age" },
    { field: "country" },
    { field: "year" },
    { field: "date" },
    { field: "total" },
  ]);

  const autoGroupColumnDef = useMemo<ColDef>(() => {
    return {
      headerName: "Group",
      minWidth: 170,
      field: "athlete",
      valueGetter: (params) => {
        if (params.node!.group) {
          return params.node!.key;
        } else {
          return params.data[params.colDef.field!];
        }
      },
      headerCheckboxSelection: true,
      cellRenderer: "agGroupCellRenderer",
      cellRendererParams: {
        checkbox: true,
      },
    };
  }, []);

  const defaultColDef = useMemo<ColDef>(() => {
    return {
      editable: true,
      enableRowGroup: true,
      enablePivot: true,
      enableValue: true,
      sortable: true,
      resizable: true,
      filter: true,
      flex: 1,
      minWidth: 100,
    };
  }, []);

  const onGridReady = useCallback((params: GridReadyEvent) => {
    fetch("https://www.ag-grid.com/example-assets/olympic-winners.json")
      .then((resp) => resp.json())
      .then((data: any[]) => setRowData(data));
  }, []);

  return (
    <Box style={containerStyle}>
      <Box style={gridStyle} className="ag-theme-alpine">
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          autoGroupColumnDef={autoGroupColumnDef}
          defaultColDef={defaultColDef}
          suppressRowClickSelection={true}
          groupSelectsChildren={true}
          rowSelection={"multiple"}
          rowGroupPanelShow={"always"}
          pivotPanelShow={"always"}
          enableRangeSelection={true}
          pagination={true}
          onGridReady={onGridReady}
        ></AgGridReact>
      </Box>
    </Box>
  );
};

export default Table;
