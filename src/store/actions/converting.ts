import { createAsyncThunk } from "@reduxjs/toolkit";
import { ConvertingTask as ConvertingTaskResponse } from "../../models/responses/FileUploadResponse";
import fileAPI from "../../services/API/FileAPI";
import { ConvertingTask } from "../state/converting";
import { GetFilesResponse } from "../../models/responses/GetFilesResponse";

export const fetchAll = createAsyncThunk("converting/fetchAll", async () => {
  debugger;
  const response: GetFilesResponse = await fileAPI.fetchAll();
  return response.data.map((convertingTask) => mapToPayload(convertingTask));
});

export const update = createAsyncThunk(
  "converting/update",
  async (ids: string[]) => {
    const response: GetFilesResponse = await fileAPI.fetch(ids);
    return response.data.map((convertingTask) => mapToPayload(convertingTask));
  }
);

const mapToPayload = (
  convertingTaskResponse: ConvertingTaskResponse
): ConvertingTask => {
  const payload: ConvertingTask = {
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
  return payload;
};
