import { useSelector } from "react-redux";
import { RootState } from "../../store/state";
import { useDispatch } from "react-redux";
import { BoundTaskActions, useBoundTaskActions } from "../../store/actions";

/**
 * A hook that provides task store object containing task actions and state
 * @return {TaskStore} containing task actions and state
 *
 */

export function useTaskStore(): TaskStore {
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

export type TaskStore = Pick<RootState, "tasks"> & BoundTaskActions;
