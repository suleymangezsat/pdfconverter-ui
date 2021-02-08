import { ConvertingTaskDetail } from "../state/pages";
import { ConvertingTaskDetail as ConvertingTaskDetailResponse } from "../../models/responses/GetTaskDetailResponse";

export const mapToConvertingResultState = (
  response: ConvertingTaskDetailResponse
): ConvertingTaskDetail => {
  return {
    id: response.id,
    pages: response.convertingResult?.textPages,
    messages: response.convertingResult?.errorMessages,
    status: response.convertingResult?.status,
  };
};
