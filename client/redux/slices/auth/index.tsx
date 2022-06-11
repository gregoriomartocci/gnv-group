import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IAuth {
  data: {
    user: {};
    token: {};
  };
}

type Auth = {
  user: {};
  token: {};
};

const initialState: IAuth = { data: { user: {}, token: {} } };

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<Auth>) => {
      const { user, token } = action.payload;
      state.data = { user: user, token: token };
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAuth } = authSlice.actions;

export default authSlice.reducer;
