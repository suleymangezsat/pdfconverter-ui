import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { Dispatch, bindActionCreators } from "redux";
import fileAPI from "../../services/API/FileAPI";
import { FileUploadResponse } from "../../models/responses/FileUploadResponse";
import { UploadingFile } from "../state/uploading";
import { RootState } from "../state";
import { ConvertingActions } from "./converting";
import { mapResponseToState as mapResponseToUploadingState } from "../mappers/uploading";
import { mapResponseToState as mapResponseToConvertingState } from "../mappers/converting";

const uploadFile = createAsyncThunk<
  DictionaryOf<UploadingFile>,
  File[],
  { state: RootState }
>(
  "uploading/upload",
  async (
    files: File[],
    { getState, dispatch }
  ): Promise<DictionaryOf<UploadingFile>> => {
    const response: FileUploadResponse = await fileAPI.upload(files);
    response.data.length > 0 &&
      dispatch(
        ConvertingActions.add(
          response.data.map((item) => mapResponseToConvertingState(item))
        )
      );
    return mapResponseToUploadingState(getState().uploading, response.errors);
  }
);

const addFiles = createAction<File[]>("uploading/add");
const deleteFile = createAction<string>("uploading/delete");

export const UploadingActions = { uploadFile, addFiles, deleteFile };
export type BoundUploadingActions = typeof UploadingActions;
export const useBoundUploadingActions = (dispatch: Dispatch) => {
  const { ...actions } = UploadingActions;
  return useMemo(() => bindActionCreators(actions as any, dispatch), [
    actions,
    dispatch,
  ]) as BoundUploadingActions;
};
