import axios from "axios";

export async function get<T>(path: string): Promise<T> {
  const { data } = await axios.get(path);
  return data;
}

const baseAxios = axios.create({
  baseURL: "http://localhost:8080/",
});

const api = (() => {
  const post = async function post<T>(
    path: string,
    payload: any,
    headers: any
  ): Promise<T> {
    const { data } = await baseAxios.post(path, payload, { headers });
    return data;
  };

  const get = async function get<T>(path: string): Promise<T> {
    const { data } = await baseAxios.get(path);
    return data;
  };

  return {
    post,
    get,
  };
})();

export default api;
