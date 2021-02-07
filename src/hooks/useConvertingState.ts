import { useSelector } from "react-redux";
import { RootState } from "../store/state";
import { ConvertingState } from "../store/state/converting";

export const useConvertingState = (): ConvertingState => {
  return useSelector((state: RootState) => state.converting);
};
