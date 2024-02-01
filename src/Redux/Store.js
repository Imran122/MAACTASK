// store.js
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Features/AuthSlice/AuthSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;
