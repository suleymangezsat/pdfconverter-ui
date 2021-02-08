import { BaseState } from "./base";

export type UploadingFile = {
  file: File;
  hasError: boolean;
  errorMessages?: string[];
};

export type FilesState = BaseState<DictionaryOf<UploadingFile>>;
