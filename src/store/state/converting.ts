import { OriginalFile } from "../../models/OriginalFile";
import { Error } from "./index";
export interface ConvertingResult {
  documents: string[];
  messages: string[];
  status:
    | "CONVERTED_SUCCESS"
    | "CONVERTED_PARTIALLY"
    | "CONVERTING_FAIL"
    | "CLIENT_FAIL"
    | "UNKNOWN";
}

export type ConvertingTaskList = {
  data: ConvertingTask[];
};

export interface ConvertingTask {
  id: string;
  status: "SUCCESS" | "FAILED" | "RETRY" | "INIT";
  originalFile: OriginalFile;
  convertingResult: ConvertingResult;
  message: string;
  createdAt: Date;
}

export type ConvertingState = ConvertingTaskList & Error;
