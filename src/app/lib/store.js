import { configureStore } from "@reduxjs/toolkit";
import trelloDataSliceReducer from "./features/trelloDataSlice";
export const store = configureStore({
  reducer: trelloDataSliceReducer,
});
