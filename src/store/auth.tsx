import { createSlice } from "@reduxjs/toolkit";
const AuthSlice = createSlice({
  name: "login",
  initialState: { isLoggedIn: false },
  reducers: {
    onLogin(state) {
      state.isLoggedIn = true;
    },
    onLogOut(state) {
      state.isLoggedIn = false;
    },
  },
});

export const authAction = AuthSlice.actions;

export default AuthSlice;
