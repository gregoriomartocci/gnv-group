import * as React from "react";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import DeleteIcon from "@mui/icons-material/Delete";
import { visuallyHidden } from "@mui/utils";
import UseButton from "../../../../../components/Button";
import UseModal from "../../../../../components/Modal";
import CreateUser from "../../../users/components/Create";
import { CellTable, GrayBackground } from "./Styles";

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

type Order = "asc" | "desc";

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string }
) => number {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort<T>(
  array: readonly T[],
  comparator: (a: T, b: T) => number
) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

interface EnhancedTableProps {
  numSelected: number;
  onRequestSort: (event: React.MouseEvent<unknown>, property: any) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}

interface EnhancedTableToolbarProps {
  numSelected: number;
  title: string;
}

interface IUseTable {
  children: React.ReactNode;
  title: string;
  headCells: any;
  rows: any;
}

export default function UseTable({
  title,
  headCells,
  rows,
  children,
}: IUseTable) {
  const [order, setOrder] = React.useState<Order>("asc");
  const [orderBy, setOrderBy] = React.useState<any>("name");
  const [selected, setSelected] = React.useState<readonly string[]>([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(9);
  const [openModal, setOpenModal] = React.useState(false);

  function EnhancedTableHead(props: EnhancedTableProps) {
    const {
      onSelectAllClick,
      order,
      orderBy,
      numSelected,
      rowCount,
      onRequestSort,
    } = props;
    const createSortHandler =
      (property: keyof any) => (event: React.MouseEvent<unknown>) => {
        onRequestSort(event, property);
      };

    return (
      <TableHead>
        <TableRow style={{ borderRadius: "15px" }}>
          <TableCell padding="checkbox" sx={GrayBackground}>
            <Checkbox
              color="primary"
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={rowCount > 0 && numSelected === rowCount}
              onChange={onSelectAllClick}
              inputProps={{
                "aria-label": "select all desserts",
              }}
            />
          </TableCell>
          {headCells.map((headCell: any) => (
            <TableCell
              key={headCell.id}
              align="left"
              padding={headCell.disablePadding ? "none" : "normal"}
              sortDirection={orderBy === headCell.id ? order : false}
              sx={GrayBackground}
            >
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : "asc"}
                onClick={createSortHandler(headCell.id)}
              >
                <Typography style={{ fontFamily: "Montserrat" }}>
                  {headCell.label}
                </Typography>
                {orderBy === headCell.id ? (
                  <Box component="span" sx={visuallyHidden}>
                    {order === "desc"
                      ? "sorted descending"
                      : "sorted ascending"}
                  </Box>
                ) : null}
              </TableSortLabel>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  }

  const handleOpen = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof any
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n: any) => n._id);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event: React.MouseEvent<unknown>, id: string) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected: readonly string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (id: string) => selected.indexOf(id) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const EnhancedTableToolbar = (props: EnhancedTableToolbarProps) => {
    const { numSelected } = props;

    return (
      <Toolbar
        sx={{
          pl: { sm: 2 },
          pr: { xs: 1, sm: 1 },
          ...(numSelected > 0 && {
            bgcolor: (theme) =>
              alpha(
                theme.palette.primary.main,
                theme.palette.action.activatedOpacity
              ),
          }),
        }}
      >
        {numSelected > 0 ? (
          <Typography
            sx={{ flex: "1 1 100%" }}
            color="inherit"
            variant="subtitle1"
          >
            {numSelected} selected
          </Typography>
        ) : (
          <Typography
            sx={{ flex: "1 1 100%", fontFamily: "Montserrat" }}
            variant="h6"
            id="tableTitle"
          >
            {title}
          </Typography>
        )}
        {numSelected > 0 ? (
          <Tooltip title="Delete">
            <IconButton>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        ) : (
          <React.Fragment>
            <UseButton type="Primary" onClickHandler={handleOpen}>
              agregar
            </UseButton>

            <UseModal open={openModal} handleClose={handleCloseModal}>
              {children}
            </UseModal>
          </React.Fragment>
        )}
      </Toolbar>
    );
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Paper
        sx={{
          width: "100%",
          height: "100%",
          borderRadius: "10px",
          padding: "15px",
          fontFamily: "Montserrat",
          boxShadow: "unset",
          border: "1px solid #e0e0e0",
        }}
      >
        <EnhancedTableToolbar title={title} numSelected={selected.length} />
        <TableContainer
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
            position: "relative",
          }}
        >
          <Box>
            <Table
              sx={{ minWidth: 750, fontFamily: "Montserrat" }}
              aria-labelledby="tableTitle"
              size={"medium"}
            >
              <EnhancedTableHead
                numSelected={selected.length}
                order={order}
                orderBy={orderBy}
                onSelectAllClick={handleSelectAllClick}
                onRequestSort={handleRequestSort}
                rowCount={rows?.length}
              />
              <TableBody>
                {stableSort(rows, getComparator(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    const isItemSelected = isSelected(row?._id.toString());
                    const labelId = `enhanced-table-checkbox-${index}`;
                    return (
                      <TableRow
                        hover
                        onClick={(event: any) =>
                          handleClick(event, row?._id.toString())
                        }
                        role="checkbox"
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={row.name}
                        selected={isItemSelected}
                        // sx={index % 2 === 0 ? GrayBackground : null}
                      >
                        <TableCell padding="checkbox">
                          <Checkbox
                            color="primary"
                            checked={isItemSelected}
                            inputProps={{
                              "aria-labelledby": labelId,
                            }}
                          />
                        </TableCell>

                        <TableCell
                          component="th"
                          id={labelId}
                          scope="row"
                          padding="none"
                        >
                          <Typography style={{ fontFamily: "Montserrat" }}>
                            {row._id}
                          </Typography>
                        </TableCell>

                        <TableCell align="left">
                          <Box sx={CellTable}>
                            <img src={row?.images[0]} />
                            <Typography style={{ fontFamily: "Montserrat" }}>
                              {row.name}
                            </Typography>
                          </Box>
                        </TableCell>
                        <TableCell align="left">
                          <Typography style={{ fontFamily: "Montserrat" }}>
                            {row?.description}
                          </Typography>
                        </TableCell>
                        <TableCell align="left">
                          <Typography style={{ fontFamily: "Montserrat" }}>
                            {row?.type}
                          </Typography>
                        </TableCell>
                        <TableCell align="left">
                          <Typography style={{ fontFamily: "Montserrat" }}>
                            {row?.status}
                          </Typography>
                        </TableCell>
                        <TableCell align="left">
                          <Typography style={{ fontFamily: "Montserrat" }}>
                            {row?.published}
                          </Typography>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                {emptyRows > 0 && (
                  <TableRow
                    style={{
                      height: 53 * emptyRows,
                    }}
                  >
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </Box>
          <Box>
            <TablePagination
              component="span"
              count={rows?.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Box>
        </TableContainer>
      </Paper>
    </Box>
  );
}
