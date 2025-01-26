import { createSlice } from "@reduxjs/toolkit";
import { getData } from "./getData";

const initialState = { data: [] };

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    filterData(state, action) {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(getData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { filterData } = dataSlice.actions;
export default dataSlice.reducer;
