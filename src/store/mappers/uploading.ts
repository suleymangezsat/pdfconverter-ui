import { UploadingFile, UploadingState } from "../state/uploading";
import { Error } from "../../models/responses/FileUploadResponse";

export const mapResponseToState = (
  state: UploadingState,
  errors: Error[]
): DictionaryOf<UploadingFile> => {
  let payload: DictionaryOf<UploadingFile> = {};
  errors.forEach((error) => {
    payload[error.originalFile.name] = {
      ...state.data[error.originalFile.name],
      hasError: true,
      errorMessages: error.errorMessages,
    };
  });
  return payload;
};
