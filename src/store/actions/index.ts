import { useMemo } from "react";
import { Dispatch, bindActionCreators } from "redux";
import * as ConvertingActions from "./converting";

export type BindedConvertingActions = Omit<typeof ConvertingActions, "Type">;

export const useConvertingActions = (dispatch: Dispatch) => {
  const { ...actions } = ConvertingActions;
  return useMemo(() => bindActionCreators(actions as any, dispatch), [
    actions,
    dispatch,
  ]) as BindedConvertingActions;
};

export { ConvertingActions };
