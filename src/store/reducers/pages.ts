import { createSlice } from "@reduxjs/toolkit";
import { PageActions } from "../actions";
import { PagesState } from "../state/pages";

const initialState: PagesState = {};

const pagesSlice = createSlice({
  name: "pages",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(PageActions.fetchById.fulfilled, (state, action) => {
      state[action.meta.arg] = {
        data: action.payload,
        loading: false,
        error: false,
        initialized: true,
      };
    });
    builder.addCase(PageActions.fetchById.pending, (state, action) => {
      state[action.meta.arg] = {
        loading: true,
        error: false,
      };
    });
    builder.addCase(PageActions.fetchById.rejected, (state, action) => {
      state[action.meta.arg] = {
        loading: false,
        error: true,
        initialized: true,
      };
    });
  },
});

export const pagesReducer = pagesSlice.reducer;
