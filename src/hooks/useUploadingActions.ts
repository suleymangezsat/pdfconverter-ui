import { useDispatch } from "react-redux";
import {
  BoundUploadingActions,
  useBoundUploadingActions,
} from "../store/actions/";

export const useUploadingActions = (): BoundUploadingActions => {
  const dispatch = useDispatch();
  return useBoundUploadingActions(dispatch);
};
