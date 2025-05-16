import { createSlice } from "@reduxjs/toolkit";

export const lightDarkModeSlice = createSlice({
  name: "lightDarkMode",
  initialState: {
    btnName: "DarkMode",
    ClassName: "lightTheme",
    headingClassName: "h1ForlightTheme",
  },
  reducers: {
    changeTheme: (state) => {
      if (state.btnName === "DarkMode") {
        state.btnName = "LightMode";
        state.ClassName = "darkTheme";
        state.headingClassName = "h1ForDarkTheme";
      } else {
        state.btnName = "DarkMode";
        state.ClassName = "LightMode";
        state.headingClassName = "h1ForlightTheme";
      }
    },
  },
});

export const { changeTheme } = lightDarkModeSlice.actions;

export default lightDarkModeSlice.reducer;
