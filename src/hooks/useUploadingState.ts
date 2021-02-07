import { useSelector } from "react-redux";
import { RootState } from "../store/state";
import { UploadingState } from "../store/state/uploading";

export const useUploadingState = (): UploadingState => {
  return useSelector((state: RootState) => state.uploading);
};
