import { createSlice } from "@reduxjs/toolkit";
import { UploadingActions } from "../actions";
import { UploadingState } from "../state/uploading";

const initialState: UploadingState = {
  data: {},
  loading: false,
  error: null,
};

const uploadingSlice = createSlice({
  name: "uploading",
  initialState,
  reducers: {
    add(state, action) {
      debugger;
      const files: File[] = action.payload;
      files.forEach((file) => {
        debugger;
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
      state.error = null;
    });
    builder.addCase(UploadingActions.uploadFile.pending, (state) => {
      debugger;
      state.loading = true;
      state.error = null;
    });
    builder.addCase(UploadingActions.uploadFile.rejected, (state) => {
      state.loading = false;
      state.error = "error";
    });
  },
});

export const uploadingReducer = uploadingSlice.reducer;
