import { useSelector } from "react-redux";
import { RootState } from "../../store/state";
import { useDispatch } from "react-redux";
import { BoundFileActions, useBoundFileActions } from "../../store/actions";
import { FilesState } from "../../store/state/files";

/**
 * A hook that provides file store object containing file actions and state
 * @return {FileStore} containing file actions and state
 *
 */

export function useFileStore(): FileStore {
  const files: FilesState = useSelector((state: RootState) => state.files);

  const useFileActions = (): BoundFileActions => {
    const dispatch = useDispatch();
    return useBoundFileActions(dispatch);
  };

  return {
    files,
    ...useFileActions(),
  };
}

export type FileStore = Pick<RootState, "files"> & BoundFileActions;
