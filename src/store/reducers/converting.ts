import { createSlice } from "@reduxjs/toolkit";
import { ConvertingActions } from "../actions";
import { ConvertingState } from "../state/converting";

const initialState: ConvertingState = {
  data: [],
  loading: false,
  error: null,
};

const convertingSlice = createSlice({
  name: "converting",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(ConvertingActions.fetchAll.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(ConvertingActions.fetchAll.pending, (state) => {
      debugger;
      state.loading = true;
      state.error = null;
    });
    builder.addCase(ConvertingActions.fetchAll.rejected, (state) => {
      state.loading = false;
      state.error = "error";
    });
    builder.addCase(ConvertingActions.update.fulfilled, (state, action) => {
      state.data = state.data.map((existing) => {
        let updated = action.payload.find((item) => item.id === existing.id);
        return updated ? { ...existing, ...updated } : existing;
      });
    });
  },
});

export const convertingReducer = convertingSlice.reducer;
