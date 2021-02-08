import { TasksState } from "./tasks";
import { FilesState } from "./files";
import { PagesState } from "./pages";
export interface RootState {
  tasks: TasksState;
  files: FilesState;
  pages: PagesState;
}
