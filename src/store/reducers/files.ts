import { createSlice } from "@reduxjs/toolkit";
import { FileActions } from "../actions/files";
import { FilesState } from "../state/files";

const initialState: FilesState = {
  data: {},
  loading: false,
  error: false,
};

const filesSlice = createSlice({
  name: "files",
  initialState,
  reducers: {
    add(state, action) {
      const files: File[] = action.payload;
      files.forEach((file) => {
        state.data[file.name] = { file, hasError: false };
      });
    },
    delete(state, action) {
      const fileName: string = action.payload;
      delete state.data[fileName];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(FileActions.uploadFile.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = false;
    });
    builder.addCase(FileActions.uploadFile.pending, (state) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(FileActions.uploadFile.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });
  },
});

export const filesReducer = filesSlice.reducer;
