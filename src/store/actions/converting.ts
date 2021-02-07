import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { Dispatch, bindActionCreators } from "redux";
import fileAPI from "../../services/API/FileAPI";
import { ConvertingTask } from "../state/converting";
import { GetFilesResponse } from "../../models/responses/GetFilesResponse";
import { mapResponseToState } from "../mappers/converting";

const fetchAll = createAsyncThunk("converting/fetchAll", async () => {
  const response: GetFilesResponse = await fileAPI.fetchAll();
  return response.data.map((convertingTask) =>
    mapResponseToState(convertingTask)
  );
});

const update = createAsyncThunk("converting/update", async (ids: string[]) => {
  const response: GetFilesResponse = await fileAPI.fetch(ids);
  return response.data.map((convertingTask) =>
    mapResponseToState(convertingTask)
  );
});

const add = createAction<ConvertingTask[]>("converting/add");

export const ConvertingActions = { update, fetchAll, add };
export type BoundConvertingActions = typeof ConvertingActions;

export const useBoundConvertingActions = (dispatch: Dispatch) => {
  const { ...actions } = ConvertingActions;
  return useMemo(() => bindActionCreators(actions as any, dispatch), [
    actions,
    dispatch,
  ]) as BoundConvertingActions;
};
