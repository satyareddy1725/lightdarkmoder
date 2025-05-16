import { configureStore } from "@reduxjs/toolkit";
import lightDarkModeReducer from "../features/lightdarkmode/lightDarkMode";
export const store = configureStore({
  reducer: {
    lightDarkMode: lightDarkModeReducer,
  },
});
