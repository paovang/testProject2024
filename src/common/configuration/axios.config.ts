export default axios;
import type { AxiosInstance } from "axios";
import axios from "axios";
import { singleton } from "tsyringe";

@singleton()
export class AxiosApi {
  public axios: AxiosInstance;
  constructor() {
    this.axios = axios.create({
      baseURL: import.meta.env.VITE_APP_BASE_API_URL,
    });

    this.axios.interceptors.request.use(
      async (config: any) => {
        const accessToken =
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzI5NTA2MzA2LCJpYXQiOjE3Mjg5MDE1MDYsImp0aSI6ImYwZGZlYTI0NWQ3NDQ5MjliYjQ3MWU3ZGZhYjNkMzkyIiwidXNlcl9pZCI6MywiZW1haWwiOiJ0ZXN0MUBnbWFpbC5jb20ifQ.kCphzOKE3T7QNoEco0vSFowuEYlUa95JqWrzwYJ_EPE";
        config.headers["Authorization"] = `Bearer ${accessToken}`;

        return config;
      },
      (error: any) => Promise.reject(error)
    );
  }
}
