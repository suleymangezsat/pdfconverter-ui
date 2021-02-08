import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { Dispatch, bindActionCreators } from "redux";
import taskAPI from "../../services/API/TaskAPI";
import { ConvertingTask } from "../state/tasks";
import { GetTasksResponse } from "../../models/responses/GetTasksResponse";
import { mapToConvertingTaskState } from "../mappers/tasks";

const fetchAll = createAsyncThunk("tasks/fetchAll", async () => {
  const response: GetTasksResponse = await taskAPI.fetchAll();
  return response.data.map((convertingTask) =>
    mapToConvertingTaskState(convertingTask)
  );
});

const fetchByIdList = createAsyncThunk(
  "tasks/fetchByIdList",
  async (ids: string[]) => {
    const response: GetTasksResponse = await taskAPI.fetchByIdList(ids);
    return response.data.map((convertingTask) =>
      mapToConvertingTaskState(convertingTask)
    );
  }
);

const addTask = createAction<ConvertingTask[]>("tasks/add");

export const TaskActions = { fetchByIdList, fetchAll, addTask };
export type BoundTaskActions = typeof TaskActions;

export const useBoundTaskActions = (dispatch: Dispatch) => {
  const { ...actions } = TaskActions;
  return useMemo(() => bindActionCreators(actions as any, dispatch), [
    actions,
    dispatch,
  ]) as BoundTaskActions;
};
