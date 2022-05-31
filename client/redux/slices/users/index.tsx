import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type User = {
  id: string;
  name: string;
  email: string;
  role: string;
};

export interface initialState {
  user: User;
}

const initialState: initialState = {
  user: { id: "", name: "", email: "", role: "" },
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    getUser: (state, action: PayloadAction<User>) => {
      state.user = { ...action.payload };
    },
  },
});

// Action creators are generated for each case reducer function
export const { getUser } = usersSlice.actions;

export default usersSlice.reducer;
