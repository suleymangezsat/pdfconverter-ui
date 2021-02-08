import { useSelector } from "react-redux";
import { RootState } from "../store/state";
import { useDispatch } from "react-redux";
import { BoundFileActions, useBoundFileActions } from "../store/actions";

export function useFileStore() {
  const files = useSelector((state: RootState) => state.files);

  const useFileActions = (): BoundFileActions => {
    const dispatch = useDispatch();
    return useBoundFileActions(dispatch);
  };

  return {
    files,
    ...useFileActions(),
  };
}
