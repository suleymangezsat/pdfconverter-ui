import { FileUploadResponse } from "../../models/responses/FileUploadResponse";
import { GetFilesResponse } from "../../models/responses/GetFilesResponse";
import api from "./APIClient";

const fileAPI = {
  async upload(files: File[]): Promise<FileUploadResponse> {
    const formData = new FormData();
    files.forEach((file) => formData.append("file", file));
    const headers = {
      "Content-Type": "multipart/form-data",
    };
    return await api.post("/file", formData, headers);
  },
  async fetchAll(): Promise<GetFilesResponse> {
    return await api.get("/file/all");
  },
  async fetch(ids: string[]): Promise<GetFilesResponse> {
    return await api.get(
      `/file?${ids
        .map((id) => {
          return {
            ids: id,
          };
        })
        .join("&")}`
    );
  },
};

export default fileAPI;
