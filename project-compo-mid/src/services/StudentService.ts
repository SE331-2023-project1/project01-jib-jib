import axios from 'axios'
import type { AxiosInstance, AxiosResponse } from 'axios'
import type { StudentItem } from '@/type'

const apiClient: AxiosInstance = axios.create({
  baseURL: 'http://localhost:3006',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})
export default {
  getStudent(perPage: number, page: number): Promise<AxiosResponse<StudentItem[]>> {
    return apiClient.get<Array<StudentItem>>('/students?_limit=' + perPage + '&_page=' + page)
  }
}
