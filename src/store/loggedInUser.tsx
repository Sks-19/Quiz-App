import { createSlice } from "@reduxjs/toolkit";

const LoggedInUser = createSlice({
  name: "currentUser",
  initialState: { currUser: [], score: 0 },
  reducers: {
    onUserLogin(state, action) {
      state.currUser = action.payload;
    },
    onCorrect(state) {
      state.score += 1;
    },
    onReset(state) {
      state.score = 0;
    },
  },
});

export const currUserAction = LoggedInUser.actions;

export default LoggedInUser;
