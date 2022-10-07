import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type IUser = {
  id: string;
  name: string;
  email: string;
  role: string;
};

export type TModal = {
  actions: boolean;
  update: boolean;
  delete: boolean;
  create: boolean;
};

export type TModalPayload = {
  name: string;
  value: boolean;
};

export type TAlert = {
  message: string;
  status: string;
};
export interface initialState {
  users: IUser[];
  user: IUser | {};
  userSelected: IUser | {};
  modal: TModal;
  alert: { message: string; status: string }[];
}

const initialState: initialState = {
  user: {},
  users: [],
  userSelected: {},
  modal: { actions: false, update: false, delete: false, create: false },
  alert: [],
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<IUser[]>) => {
      state.users = [...action.payload];
    },
    setModal: (state, action: PayloadAction<TModalPayload>) => {
      const { name, value } = action?.payload;
      state.modal = { ...state.modal, [name]: value };
    },
    setUser: (state, action: PayloadAction<TModalPayload>) => {
      state.userSelected = { ...action.payload };
    },
    setAlert: (state, action: PayloadAction<TAlert>) => {
      state.alert = [...state.alert, action?.payload];
    },
    closeAlert: (state, action: PayloadAction<number>) => {
      state.alert = [...state.alert].splice(action?.payload, 1);
    },
    setSelected: (state, action: PayloadAction<IUser>) => {
      state.userSelected = { ...action.payload };
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setUser,
  setModal,
  setUsers,
  setAlert,
  closeAlert,
  setSelected,
} = usersSlice.actions;

export default usersSlice.reducer;
