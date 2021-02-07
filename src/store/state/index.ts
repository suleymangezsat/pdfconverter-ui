import { ConvertingState } from "./converting";
import { UploadingState } from "./uploading";

export interface RootState {
  converting: ConvertingState;
  uploading: UploadingState;
}

export type BaseState = {
  loading: boolean;
  error: boolean;
  initialized?: boolean;
};
