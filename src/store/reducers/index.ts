import { combineReducers } from "redux";
import { RootState } from "../state";
import { tasksReducer } from "./tasks";
import { filesReducer } from "./files";
import { pagesReducer } from "./pages";

export const rootReducer = combineReducers<RootState>({
  tasks: tasksReducer,
  files: filesReducer,
  pages: pagesReducer,
});
