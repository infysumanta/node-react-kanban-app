import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice.js";
import boardReducer from "./features/boardSlice.js";

export const store = configureStore({
  reducer: {
    user: userReducer,
    board: boardReducer,
  },
});
