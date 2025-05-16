import { createSlice } from "@reduxjs/toolkit";

export const showOrHideSlice = createSlice({
  name: "showOrHide",
  initialState: {
    showFirstName: false,
    showLastName: false,
  },
  reducers: {
    showOrHideFirstName: (state) => {
      if (!state.showFirstName) {
        state.showFirstName = true;
      } else {
        state.showFirstName = false;
      }
    },
    showOrHideLastName: (state) => {
      if (!state.showLastName) {
        state.showLastName = true;
      } else {
        state.showLastName = false;
      }
    },
  },
});

export const { showOrHideFirstName, showOrHideLastName } =
  showOrHideSlice.actions;

export default showOrHideSlice.reducer;
