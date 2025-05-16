import { configureStore } from "@reduxjs/toolkit";
import showOrHideReducer from "../features/showorhide/showOrHideSlice";
export const store = configureStore({
  reducer: {
    showOrHide: showOrHideReducer,
  },
});
