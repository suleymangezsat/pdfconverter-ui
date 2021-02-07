import { createSlice } from "@reduxjs/toolkit";
import { ConvertingActions } from "../actions/converting";
import { ConvertingState } from "../state/converting";

const initialState: ConvertingState = {
  data: [],
  initialized: false,
  loading: false,
  error: false,
};

const convertingSlice = createSlice({
  name: "converting",
  initialState,
  reducers: {
    add(state, action) {
      state.data = action.payload.concat(state.data);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(ConvertingActions.fetchAll.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = false;
      state.initialized = true;
    });
    builder.addCase(ConvertingActions.fetchAll.pending, (state) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(ConvertingActions.fetchAll.rejected, (state) => {
      state.loading = false;
      state.error = true;
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
