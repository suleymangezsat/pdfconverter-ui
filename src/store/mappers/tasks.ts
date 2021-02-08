import { ConvertingTask as ConvertingTaskResponse } from "../../models/responses/UploadFilesResponse";
import { ConvertingTask } from "../state/tasks";

export const mapToConvertingTaskState = (
  convertingTaskResponse: ConvertingTaskResponse
): ConvertingTask => {
  return {
    id: convertingTaskResponse.id,
    status: convertingTaskResponse.status,
    originalFile: convertingTaskResponse.originalFile,
    message: convertingTaskResponse.message,
    createdAt: convertingTaskResponse.createdAt,
  };
};
