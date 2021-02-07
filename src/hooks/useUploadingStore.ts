import { useSelector } from "react-redux";
import { RootState } from "../store/state";
import { useDispatch } from "react-redux";
import {
  BoundUploadingActions,
  useBoundUploadingActions,
} from "../store/actions/";

export function useUploadingStore() {
  const state = useSelector((state: RootState) => state.uploading);

  const useUploadingActions = (): BoundUploadingActions => {
    const dispatch = useDispatch();
    return useBoundUploadingActions(dispatch);
  };

  return {
    state,
    ...useUploadingActions(),
  };
}
