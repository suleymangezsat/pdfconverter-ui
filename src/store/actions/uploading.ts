import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import fileAPI from "../../services/API/FileAPI";
import {
  FileUploadResponse,
  Error,
} from "../../models/responses/FileUploadResponse";
import { UploadingFile } from "../state/uploading";
import { RootState } from "../state";

export const uploadFile = createAsyncThunk<
  DictionaryOf<UploadingFile>,
  File[],
  { state: RootState }
>(
  "uploading/upload",
  async (files: File[], { getState }): Promise<DictionaryOf<UploadingFile>> => {
    debugger;
    const response: FileUploadResponse = await fileAPI.upload(files);
    return mapToPayload(getState(), response.errors);
  }
);

export const addFiles = createAction<File[]>("uploading/add");
export const deleteFile = createAction<string>("uploading/delete");

const mapToPayload = (
  state: RootState,
  errors: Error[]
): DictionaryOf<UploadingFile> => {
  debugger;
  let payload: DictionaryOf<UploadingFile> = {};
  errors.forEach((error) => {
    payload[error.originalFile.name] = {
      ...state.uploading.data[error.originalFile.name],
      hasError: true,
      errorMessages: error.errorMessages,
    };
  });
  console.log("payload : " + JSON.stringify(payload));
  return payload;
};
