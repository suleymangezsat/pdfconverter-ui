import { GetTaskDetailResponse } from "../../models/responses/GetTaskDetailResponse";
import { GetTasksResponse } from "../../models/responses/GetTasksResponse";
import api from "./APIClient";

const taskAPI = {
  async fetchAll(): Promise<GetTasksResponse> {
    return await api.get("/file/all");
  },
  async fetchByIdList(ids: string[]): Promise<GetTasksResponse> {
    return await api.get(`/file?${ids.map((id) => `ids=${id}`).join("&")}`);
  },
  async fetchById(id: string): Promise<GetTaskDetailResponse> {
    return await api.get(`/file/${id}`);
  },
};

export default taskAPI;
