import { ConvertingResult } from "./UploadFilesResponse";

export interface ConvertingTaskDetail {
  id: string;
  convertingResult: ConvertingResult;
}

type Payload = {
  readonly data: ConvertingTaskDetail;
};

export class GetTaskDetailResponse {
  public readonly data: ConvertingTaskDetail;

  constructor(payload: Payload) {
    this.data = payload.data;
  }
}
