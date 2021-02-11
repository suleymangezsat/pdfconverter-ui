import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

const baseAxios = axios.create({
  baseURL: apiUrl,
});

export default class Api {
  public static async post<T>(
    path: string,
    payload: any,
    headers: any
  ): Promise<T> {
    const { data } = await baseAxios.post(path, payload, { headers });
    return data;
  }

  public static async get<T>(path: string): Promise<T> {
    const { data } = await baseAxios.get(path);
    return data;
  }
}
