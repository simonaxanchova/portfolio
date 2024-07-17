import { createSlice } from "@reduxjs/toolkit";

export const globalSlice = createSlice({
  name: "global",
  initialState: {
    openMenu: false,
  },
  reducers: {
    openMenu: (state, action) => {
      state.openMenu = action.payload;
    },
    homePageHeader: (state, action) => {
      state.homePageHeader = action.payload;
    },
    emailSent: (state, action) => {
      state.emailSent = action.payload;
    },
  },
});

export const { openMenu, homePageHeader, emailSent } = globalSlice.actions;
export default globalSlice.reducer;
