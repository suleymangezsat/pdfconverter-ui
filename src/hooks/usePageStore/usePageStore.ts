import { useSelector } from "react-redux";
import { RootState } from "../../store/state";
import { useDispatch } from "react-redux";
import { BoundPageActions, useBoundPageActions } from "../../store/actions";

/**
 * A hook that provides page store object containing page actions and state
 * @return {PageStore} containing page actions and state
 *
 */

export function usePageStore(): PageStore {
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

export type PageStore = Pick<RootState, "pages"> & BoundPageActions;
