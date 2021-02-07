import { useSelector } from "react-redux";
import { RootState } from "../store/state";
import { useDispatch } from "react-redux";
import {
  BoundConvertingActions,
  useBoundConvertingActions,
} from "../store/actions/";

export function useConvertingStore() {
  debugger;
  const state = useSelector((state: RootState) => state.converting);

  const useConvertingActions = (): BoundConvertingActions => {
    const dispatch = useDispatch();
    return useBoundConvertingActions(dispatch);
  };

  return {
    state,
    ...useConvertingActions(),
  };
}
