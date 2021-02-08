import { BaseState } from "./base";

export interface ConvertingTask {
  id: string;
  status: "SUCCESS" | "FAILED" | "RETRY" | "INIT";
  originalFile: OriginalFile;
  message: string;
  createdAt: Date;
}

export interface OriginalFile {
  name: string;
  size: number;
  contentType: string;
}

export type TasksState = BaseState<ConvertingTask[]>;
