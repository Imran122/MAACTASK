import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  _id: null,
  employeeId: null,
  email: null,
  name: null,
  phone: null,
  address: null,
  role: null,
  isLoading: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userAdded: (state, { payload }) => {
      state._id = payload._id;
      state.employeeId = payload.employeeId;
      state.email = payload.email;
      state.name = payload.name;
      state.phoneNumber = payload.phoneNumber;
      state.role = payload.role;
    },
    isLoading: (state, { payload }) => {
      state.isLoading = payload;
    },
  },
});

export const { userAdded, isLoading } = authSlice.actions;

export default authSlice.reducer;
