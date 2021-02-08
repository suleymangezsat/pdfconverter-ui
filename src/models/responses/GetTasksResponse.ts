import { ConvertingTask } from "./UploadFilesResponse";

type Payload = {
  readonly data: ConvertingTask[];
  readonly errors: Error[];
};

export class GetTasksResponse {
  public readonly data: ConvertingTask[];
  public readonly errors: Error[];

  constructor(payload: Payload) {
    this.data = payload.data;
    this.errors = payload.errors;
  }
}
