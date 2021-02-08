import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { Dispatch, bindActionCreators } from "redux";
import fileAPI from "../../services/API/FileAPI";
import { UploadFilesResponse } from "../../models/responses/UploadFilesResponse";
import { UploadingFile } from "../state/files";
import { RootState } from "../state";
import { TaskActions } from "./tasks";
import { mapToUploadingFileState } from "../mappers/files";
import { mapToConvertingTaskState } from "../mappers/tasks";

const uploadFile = createAsyncThunk<
  DictionaryOf<UploadingFile>,
  File[],
  { state: RootState }
>(
  "files/upload",
  async (
    files: File[],
    { getState, dispatch }
  ): Promise<DictionaryOf<UploadingFile>> => {
    const response: UploadFilesResponse = await fileAPI.upload(files);
    response.data.length > 0 &&
      dispatch(
        TaskActions.addTask(
          response.data.map((item) => mapToConvertingTaskState(item))
        )
      );
    return mapToUploadingFileState(getState().files, response.errors);
  }
);

const addFiles = createAction<File[]>("files/add");
const deleteFile = createAction<string>("files/delete");

export const FileActions = { uploadFile, addFiles, deleteFile };
export type BoundFileActions = typeof FileActions;
export const useBoundFileActions = (dispatch: Dispatch) => {
  const { ...actions } = FileActions;
  return useMemo(() => bindActionCreators(actions as any, dispatch), [
    actions,
    dispatch,
  ]) as BoundFileActions;
};
