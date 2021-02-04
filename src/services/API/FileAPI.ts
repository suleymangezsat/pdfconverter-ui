import { FileUploadResponse } from "../../models/responses/FileUploadResponse";
import api from "./APIClient";

const fileAPI = {
  async upload(file: File): Promise<FileUploadResponse> {
    const formData = new FormData();
    formData.append("file", file);
    const headers = {
      "Content-Type": "multipart/form-data",
    };
    return await api.post("/file", formData, headers);
  },
};

export default fileAPI;
