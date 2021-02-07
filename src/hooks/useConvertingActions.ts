import { useDispatch } from "react-redux";
import {
  BoundConvertingActions,
  useBoundConvertingActions,
} from "../store/actions/";

export const useConvertingActions = (): BoundConvertingActions => {
  const dispatch = useDispatch();
  return useBoundConvertingActions(dispatch);
};
