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
import UseButton from "../Button";
import UseModal from "../Modal";
import CreateUser from "../../pages/profile/users/components/Create";
import { CellTable, GrayBackground } from "./Styles";
import { ProjectsContent } from "../../pages/profile/projects";
import Delete from "./Components/Delete";
import Dropdown from "../Dropdown";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Actions from "./Components/Actions";
import { create } from "domain";
import { useDispatch, useSelector } from "react-redux";
import { setCreate, setActions } from "../../redux/slices/projects";
import { IState } from "../Menu";

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
  title: string;
  api: string;
  headCells: any;
  rows: any;
}

export default function UseTable({ title, api, headCells, rows }: IUseTable) {
  const [order, setOrder] = React.useState<Order>("asc");
  const [orderBy, setOrderBy] = React.useState<any>("name");
  const [selected, setSelected] = React.useState<readonly number[]>([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [actual, setActual] = React.useState<string>("");
  const state = useSelector((state: IState) => state?.projects);
  const { create } = state;
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const openActionsMenu = Boolean(anchorEl && state?.actions);

  const handleClickActionsMenu = (
    event: React.MouseEvent<HTMLButtonElement>,
    id: string
  ) => {
    setActual(id);
    dispatch(setActions(true));
    setAnchorEl(event.currentTarget);
  };

  const handleCloseActionsMenu = () => {
    setAnchorEl(null);
  };

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
    dispatch(setCreate({ ...create, status: "", message: "", modal: true }));
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
      const newSelecteds = rows.map((n: any) => n.id);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event: React.MouseEvent<unknown>, id: number) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected: readonly number[] = [];

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

  const isSelected = (id: number) => selected.indexOf(id) !== -1;

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
            sx={{ flex: "1 1 100%", fontFamily: "'Montserrat'" }}
            color="inherit"
            variant="subtitle1"
          >
            {numSelected} seleccionados
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
          <Tooltip title="Eliminar">
            <IconButton>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        ) : (
          <React.Fragment>
            <UseButton type="Primary" onClickHandler={handleOpen}>
              agregar
            </UseButton>
          </React.Fragment>
        )}
      </Toolbar>
    );
  };

  return (
    <Box sx={{ width: "100%" }}>
      {/* <UseModal open={openModal} handleClose={handleCloseModal}>
        <Auth auth={selectAuth} img={AuthImage} />
      </UseModal> */}

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
                    const isItemSelected = isSelected(Number(row?.id));
                    const labelId = `enhanced-table-checkbox-${index}`;

                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={row?.id}
                        selected={isItemSelected}
                        // sx={index % 2 === 1 ? GrayBackground : null}
                      >
                        <TableCell padding="checkbox">
                          <Checkbox
                            color="primary"
                            checked={isItemSelected}
                            inputProps={{
                              "aria-labelledby": labelId,
                            }}
                            onClick={(event: any) =>
                              handleClick(event, Number(row?.id))
                            }
                          />
                        </TableCell>

                        <TableCell
                          component="th"
                          id={labelId}
                          scope="row"
                          padding="none"
                        >
                          <Typography style={{ fontFamily: "Montserrat" }}>
                            {row.id}
                          </Typography>
                        </TableCell>

                        {title === "Emprendimientos" ? (
                          <ProjectsContent project={row} />
                        ) : title === "Usuarios" ? (
                          <span>usuarios</span>
                        ) : // <UsersContent />
                        title === "Noticias" ? (
                          <span>noticias</span>
                        ) : // <NewsContent />
                        null}

                        <TableCell align="left">
                          <IconButton
                            onClick={(e) =>
                              handleClickActionsMenu(e, row?._id.toString())
                            }
                          >
                            <MoreVertIcon />
                          </IconButton>
                          <Dropdown
                            open={openActionsMenu}
                            handleClose={handleCloseActionsMenu}
                            anchorEl={anchorEl}
                          >
                            <Actions path={api} id={actual} />
                          </Dropdown>
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
