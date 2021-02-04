import { Status } from "../Status";
import { ConvertingResultStatus } from "../ConvertingResultStatus";

export interface FileUploadResponse {
  id: string;
  status: Status;
  message: string;
  convertingResult: FileUploadResponse.ConvertingResult;
  createdAt: Date;
}

export namespace FileUploadResponse {
  export interface ConvertingResult {
    textPages: string[];
    status: ConvertingResultStatus;
    errorMessages: string[];
  }
}
