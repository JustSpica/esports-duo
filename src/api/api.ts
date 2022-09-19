import axios, { AxiosRequestConfig, AxiosInstance } from 'axios';

const config: AxiosRequestConfig = {
  baseURL: import.meta.env.VITE_API_ESPORTS,
}

export const api: AxiosInstance = axios.create(config);