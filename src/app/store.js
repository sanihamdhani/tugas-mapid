import { configureStore } from "@reduxjs/toolkit";
import mapReducer from "../features/middlewareMap/MapSlice";
export const store = configureStore({
  reducer: {
    map: mapReducer,
  },
});
