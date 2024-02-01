// store.js
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Features/AuthSlice/AuthSlice";
import regionReducer from "./Features/RegionSlice/RegionSlice";
const store = configureStore({
  reducer: {
    auth: authReducer,
    regions: regionReducer,
  },
});

export default store;
