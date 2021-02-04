import { createAsyncThunk } from "@reduxjs/toolkit";
import { FileUploadRequest } from "../../models/requests/FileUploadRequest";
import { FileUploadResponse } from "../../models/responses/FileUploadResponse";
import { ConvertingTask } from "../../models/state/ConvertingTask";
import fileAPI from "../../services/API/FileAPI";

export const upload = createAsyncThunk(
  "converting/upload",
  async ({ file }: FileUploadRequest) => {
    debugger;
    const response: FileUploadResponse = await fileAPI.upload(file);
    const payload: ConvertingTask = {
      id: response.id,
      file,
      status: response.status,
      result: {
        documents: response.convertingResult?.textPages,
        messages: response.convertingResult?.errorMessages,
        status: response.convertingResult?.status,
      },
      message: response.message,
    };
    return payload;
  }
);
