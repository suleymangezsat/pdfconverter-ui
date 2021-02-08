import { createSlice } from "@reduxjs/toolkit";
import { TaskActions } from "../actions/tasks";
import { ConvertingTask, TasksState } from "../state/tasks";

const initialState: TasksState = {
  data: [],
  initialized: false,
  loading: false,
  error: false,
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    add(state, action) {
      state.data = action.payload.concat(state.data);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(TaskActions.fetchAll.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = false;
      state.initialized = true;
    });
    builder.addCase(TaskActions.fetchAll.pending, (state) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(TaskActions.fetchAll.rejected, (state) => {
      state.loading = false;
      state.error = true;
      state.initialized = true;
    });
    builder.addCase(TaskActions.fetchByIdList.fulfilled, (state, action) => {
      state.data = state.data.map((existing: ConvertingTask) => {
        let toBeUpdated = action.payload.find(
          (item) => item.id === existing.id
        );
        return toBeUpdated ? { ...existing, ...toBeUpdated } : existing;
      });
    });
  },
});

export const tasksReducer = tasksSlice.reducer;
