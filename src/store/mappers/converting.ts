import { ConvertingTask as ConvertingTaskResponse } from "../../models/responses/FileUploadResponse";
import { ConvertingTask } from "../state/converting";

export const mapResponseToState = (
  convertingTaskResponse: ConvertingTaskResponse
): ConvertingTask => {
  return {
    id: convertingTaskResponse.id,
    status: convertingTaskResponse.status,
    originalFile: convertingTaskResponse.originalFile,
    convertingResult: {
      documents: convertingTaskResponse.convertingResult?.textPages,
      messages: convertingTaskResponse.convertingResult?.errorMessages,
      status: convertingTaskResponse.convertingResult?.status,
    },
    message: convertingTaskResponse.message,
    createdAt: convertingTaskResponse.createdAt,
  };
};
