export enum Status {
  SUCCESS = "SUCCESS",
  FAILED = "FAILED",
  RETRY = "RETRY",
  INIT = "INIT",
}

export enum ConvertingResultStatus {
  CONVERTED_SUCCESS = "CONVERTED_SUCCESS",
  CONVERTED_PARTIALLY = "CONVERTED_PARTIALLY",
  CONVERTING_FAIL = "CONVERTING_FAIL",
  CLIENT_FAIL = "CLIENT_FAIL",
  UNKNOWN = "UNKNOWN",
}
export interface ConvertingResult {
  textPages: string[];
  status: ConvertingResultStatus;
  errorMessages: string[];
}

export interface ConvertingTask {
  id: string;
  status: Status;
  message: string;
  originalFile: OriginalFile;
  convertingResult: ConvertingResult;
  createdAt: Date;
}

export interface FileError {
  originalFile: OriginalFile;
  errorMessages: string[];
}

export interface OriginalFile {
  name: string;
  size: number;
  contentType: string;
}

type Payload = {
  readonly data: ConvertingTask[];
  readonly errors: FileError[];
};
export class UploadFilesResponse {
  public readonly data: ConvertingTask[];
  public readonly errors: FileError[];

  constructor(payload: Payload) {
    this.data = payload.data;
    this.errors = payload.errors;
  }
}
