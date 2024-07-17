import { configureStore } from "@reduxjs/toolkit";
import { globalSlice } from "./GlobalSlice";

const store = configureStore({
  reducer: {
    global: globalSlice.reducer,
  },
});
export default store;
