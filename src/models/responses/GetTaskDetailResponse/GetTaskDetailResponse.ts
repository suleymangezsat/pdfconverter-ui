export interface ConvertingTaskDetail {
  id: string;
  convertingResult: ConvertingResult;
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

type Payload = {
  readonly data: ConvertingTaskDetail;
};

export class GetTaskDetailResponse {
  public readonly data: ConvertingTaskDetail;

  constructor(payload: Payload) {
    this.data = payload.data;
  }
}
