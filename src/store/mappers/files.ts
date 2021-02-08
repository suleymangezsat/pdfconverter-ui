import { UploadingFile, FilesState } from "../state/files";
import { FileError } from "../../models/responses/UploadFilesResponse";

export const mapToUploadingFileState = (
  state: FilesState,
  errors: FileError[]
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
