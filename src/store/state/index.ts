import { ConvertingState } from "./converting";
import { UploadingState } from "./uploading";

export interface RootState {
  converting: ConvertingState;
  uploading: UploadingState;
}

export type Error = {
  loading: boolean;
  error: string | null;
};
