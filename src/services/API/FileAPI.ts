import { UploadFilesResponse } from "../../models/responses/UploadFilesResponse";
import Api from "./APIClient";

/**
 * @module FileAPI Api wrapper that performs server side file operations
 */
export default class FileAPI {
  public static async upload(files: File[]): Promise<UploadFilesResponse> {
    const formData = new FormData();
    files.forEach((file) => formData.append("file", file));
    const headers = {
      "Content-Type": "multipart/form-data",
    };
    return await Api.post<UploadFilesResponse>("/file", formData, headers);
  }
}
