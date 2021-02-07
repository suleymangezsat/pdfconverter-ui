import { Error } from "./index";

export type UploadingFile = {
  file: File;
  hasError: boolean;
  errorMessages?: string[];
};

export type UploadingFileList = {
  data: DictionaryOf<UploadingFile>;
};

export type UploadingState = UploadingFileList & Error;
