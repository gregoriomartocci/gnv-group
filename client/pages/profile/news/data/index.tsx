import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { CellStatus, CellTable } from "./Styles";

export const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <Box sx={CellTable}>
          <img src={params.row.img} alt="avatar" />
          {params.row.username}
        </Box>
      );
    },
  },
  { field: "email", headerName: "Email", width: 230 },
  { field: "age", headerName: "Age", width: 100 },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return <Box sx={CellStatus}>{params.row.status}</Box>;
    },
  },
];

export const rows = [
  {
    id: 1,
    username: "Snow",
    img: "https://thumbs.dreamstime.com/z/default-avatar-profile-icon-vector-user-image-179582665.jpg",
    age: 35,
    email: "12snow@gmail.com",
    status: "12snow@gmail.com",
  },
  {
    id: 2,
    username: "Lannister",
    img: "https://thumbs.dreamstime.com/z/default-avatar-profile-icon-vector-user-image-179582665.jpg",
    age: 42,
    email: "12snow@gmail.com",
    status: "12snow@gmail.com",
  },
  {
    id: 3,
    username: "Lannister",
    img: "https://thumbs.dreamstime.com/z/default-avatar-profile-icon-vector-user-image-179582665.jpg",
    age: 45,
    email: "12snow@gmail.com",
    status: "12snow@gmail.com",
  },
  {
    id: 4,
    username: "Stark",
    img: "https://thumbs.dreamstime.com/z/default-avatar-profile-icon-vector-user-image-179582665.jpg",
    age: 16,
    email: "12snow@gmail.com",
    status: "12snow@gmail.com",
  },
  {
    id: 5,
    username: "Targaryen",
    img: "https://thumbs.dreamstime.com/z/default-avatar-profile-icon-vector-user-image-179582665.jpg",
    age: 28,
    email: "12snow@gmail.com",
    status: "12snow@gmail.com",
  },
  {
    id: 6,
    username: "Melisandre",
    img: "https://thumbs.dreamstime.com/z/default-avatar-profile-icon-vector-user-image-179582665.jpg",
    age: 150,
    email: "12snow@gmail.com",
    status: "12snow@gmail.com",
  },
  {
    id: 7,
    username: "Clifford",
    img: "https://thumbs.dreamstime.com/z/default-avatar-profile-icon-vector-user-image-179582665.jpg",
    age: 44,
    email: "12snow@gmail.com",
    status: "12snow@gmail.com",
  },
  {
    id: 8,
    username: "Frances",
    img: "https://thumbs.dreamstime.com/z/default-avatar-profile-icon-vector-user-image-179582665.jpg",
    age: 36,
    email: "12snow@gmail.com",
    status: "12snow@gmail.com",
  },
  {
    id: 9,
    username: "Roxie",
    img: "https://thumbs.dreamstime.com/z/default-avatar-profile-icon-vector-user-image-179582665.jpg",
    age: 65,
    email: "12snow@gmail.com",
    status: "12snow@gmail.com",
  },
];
