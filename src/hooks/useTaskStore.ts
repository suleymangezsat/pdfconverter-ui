import { useSelector } from "react-redux";
import { RootState } from "../store/state";
import { useDispatch } from "react-redux";
import { BoundTaskActions, useBoundTaskActions } from "../store/actions";

export function useTaskStore() {
  const tasks = useSelector((state: RootState) => state.tasks);

  const useTaskActions = (): BoundTaskActions => {
    const dispatch = useDispatch();
    return useBoundTaskActions(dispatch);
  };

  return {
    tasks,
    ...useTaskActions(),
  };
}
