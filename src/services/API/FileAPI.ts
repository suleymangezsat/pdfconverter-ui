import { UploadFilesResponse } from "../../models/responses/UploadFilesResponse";
import api from "./APIClient";

const fileAPI = {
  async upload(files: File[]): Promise<UploadFilesResponse> {
    const formData = new FormData();
    files.forEach((file) => formData.append("file", file));
    const headers = {
      "Content-Type": "multipart/form-data",
    };
    return await api.post("/file", formData, headers);
  },
};

export default fileAPI;
