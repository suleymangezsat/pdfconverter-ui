import { useMemo } from "react";
import { Dispatch, bindActionCreators } from "redux";
import * as ConvertingActions from "./converting";
import * as UploadingActions from "./uploading";

export type BoundUploadingActions = Omit<typeof UploadingActions, "Type">;
export type BoundConvertingActions = Omit<typeof ConvertingActions, "Type">;

export const useBoundUploadingActions = (dispatch: Dispatch) => {
  const { ...actions } = UploadingActions;
  return useMemo(() => bindActionCreators(actions as any, dispatch), [
    actions,
    dispatch,
  ]) as BoundUploadingActions;
};

export const useBoundConvertingActions = (dispatch: Dispatch) => {
  const { ...actions } = ConvertingActions;
  return useMemo(() => bindActionCreators(actions as any, dispatch), [
    actions,
    dispatch,
  ]) as BoundConvertingActions;
};

export { UploadingActions, ConvertingActions };
