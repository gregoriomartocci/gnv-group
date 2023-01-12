import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IAuth {
  data: AuthType;
  alert: { message: string; status: string }[];
}

export type AuthType = {
  user: {};
  token: {};
};

export type TAlert = {
  message: string;
  status: string;
};

const initialState: IAuth = { data: { user: {}, token: {} }, alert: [] };

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<AuthType>) => {
      const { user, token } = action.payload;
      state.data = { user: user, token: token };
    },
    setAlert: (state, action: PayloadAction<TAlert>) => {
      state.alert = [...state.alert, action?.payload];
    },
    closeAlert: (state, action: PayloadAction<number>) => {
      state.alert = [...state.alert].splice(action?.payload, 1);
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAuth, setAlert, closeAlert } = authSlice.actions;

export default authSlice.reducer;
