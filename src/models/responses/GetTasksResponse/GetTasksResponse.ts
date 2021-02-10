import { ConvertingTask } from "../UploadFilesResponse";

type Payload = {
  readonly data: ConvertingTask[];
};

export class GetTasksResponse {
  public readonly data: ConvertingTask[];

  constructor(payload: Payload) {
    this.data = payload.data;
  }
}
