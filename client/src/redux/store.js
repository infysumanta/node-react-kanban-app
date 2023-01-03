import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice.js";
import boardReducer from "./features/boardSlice.js";
import favouriteReducer from "./features/favouriteSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    board: boardReducer,
    favourites: favouriteReducer,
  },
});
