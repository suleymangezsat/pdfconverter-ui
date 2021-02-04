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
    builder.addCase(ConvertingActions.upload.fulfilled, (state) => {
      state.loading = false;
      state.error = null;
    });
    builder.addCase(ConvertingActions.upload.pending, (state, action) => {
      debugger;
      state.loading = true;
      state.error = null;
    });
    builder.addCase(ConvertingActions.upload.rejected, (state, action) => {
      state.loading = false;
      state.error = "error";
    });
  },
});

export const convertingReducer = convertingSlice.reducer;
