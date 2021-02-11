import { GetTaskDetailResponse } from "../../models/responses/GetTaskDetailResponse";
import { GetTasksResponse } from "../../models/responses/GetTasksResponse";
import Api from "./APIClient";

export default class TaskAPI {
  public static async fetchAll(): Promise<GetTasksResponse> {
    return await Api.get<GetTasksResponse>("/file/all");
  }
  public static async fetchByIdList(ids: string[]): Promise<GetTasksResponse> {
    return await Api.get<GetTasksResponse>(
      `/file?${ids.map((id) => `ids=${id}`).join("&")}`
    );
  }
  public static async fetchById(id: string): Promise<GetTaskDetailResponse> {
    return await Api.get<GetTaskDetailResponse>(`/file/${id}`);
  }
}
