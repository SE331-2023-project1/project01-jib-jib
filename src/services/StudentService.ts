import axios from "axios";
import type { AxiosInstance, AxiosResponse } from "axios";
import type { StudentItem, AdviserItem } from "@/type";

const apiClient: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
export default {
  getStudent(
    perPage: number,
    page: number
  ): Promise<AxiosResponse<StudentItem[]>> {
    return apiClient.get<Array<StudentItem>>(
      "/students?_limit=" + perPage + "&_page=" + page
    );
  },
  getStudentById(id: number): Promise<AxiosResponse<StudentItem>> {
    return apiClient.get<StudentItem>("/students/" + id.toString());
  },
  getAdviser(
    perPage: number,
    page: number
  ): Promise<AxiosResponse<AdviserItem[]>> {
    return apiClient.get<Array<AdviserItem>>(
      "/professer?_limit=" + perPage + "&_page=" + page
    );
  },
  getAdviserById(id: number): Promise<AxiosResponse<AdviserItem>> {
    return apiClient.get<AdviserItem>("/professer/" + id.toString());
  },
};
