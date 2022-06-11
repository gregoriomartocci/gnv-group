import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface initialState {
  data: {
    user: {};
    token: {};
  };
}

type auth = {
  user: {};
  token: {};
};

const initialState: initialState = { data: { user: {}, token: {} } };

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<auth>) => {
      const { user, token } = action.payload;
      state.data = { user: user, token: token };
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAuth } = authSlice.actions;

export default authSlice.reducer;
