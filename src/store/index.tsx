import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./auth";
import LoggedInUser from "./loggedInUser";

const store: any = configureStore({
  reducer: {
    currUser: LoggedInUser.reducer,
    auth: AuthSlice.reducer,
  },
});

export default store;
