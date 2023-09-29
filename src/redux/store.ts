import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./features/moviesSlice";

export const store = configureStore({
  reducer: {
    moviesReducer
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
