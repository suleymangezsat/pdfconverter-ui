import { useSelector } from "react-redux";
import { RootState } from "../store/state";
import { useDispatch } from "react-redux";
import { BoundPageActions, useBoundPageActions } from "../store/actions";

export function usePageStore() {
  const state = useSelector((state: RootState) => state.pages);

  const usePageActions = (): BoundPageActions => {
    const dispatch = useDispatch();
    return useBoundPageActions(dispatch);
  };

  return {
    pages: state,
    ...usePageActions(),
  };
}
