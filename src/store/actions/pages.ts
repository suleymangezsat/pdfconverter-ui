import { createAsyncThunk } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { Dispatch, bindActionCreators } from "redux";
import { GetTaskDetailResponse } from "../../models/responses/GetTaskDetailResponse";
import TaskAPI from "../../services/API/TaskAPI";
import { mapToConvertingResultState } from "../mappers/pages";

const fetchById = createAsyncThunk("pages/fetchById", async (id: string) => {
  const response: GetTaskDetailResponse = await TaskAPI.fetchById(id);
  return mapToConvertingResultState(response.data);
});

export const PageActions = { fetchById };
export type BoundPageActions = typeof PageActions;

export const useBoundPageActions = (dispatch: Dispatch) => {
  const { ...actions } = PageActions;
  return useMemo(() => bindActionCreators(actions as any, dispatch), [
    actions,
    dispatch,
  ]) as BoundPageActions;
};
