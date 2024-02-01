// RegionSlice.js
import { createSlice } from "@reduxjs/toolkit";

const regionSlice = createSlice({
  name: "regions",
  initialState: {
    regions: [],
    status: "idle",
    error: null,
  },
  reducers: {
    addRegion: (state, action) => {
      state.regions.push(action.payload);
    },
  },
});

export const { addRegion } = regionSlice.actions;
export default regionSlice.reducer;
