import { createSlice } from "@reduxjs/toolkit";
import { UploadingActions } from "../actions/uploading";
import { UploadingState } from "../state/uploading";

const initialState: UploadingState = {
  data: {},
  loading: false,
  error: false,
};

const uploadingSlice = createSlice({
  name: "uploading",
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
    builder.addCase(UploadingActions.uploadFile.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = false;
    });
    builder.addCase(UploadingActions.uploadFile.pending, (state) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(UploadingActions.uploadFile.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });
  },
});

export const uploadingReducer = uploadingSlice.reducer;
