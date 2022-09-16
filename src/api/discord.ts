import axios, { AxiosRequestConfig, AxiosInstance } from 'axios';

const config: AxiosRequestConfig = {
  baseURL: import.meta.env.VITE_API_DISCORD,
};

export const discordAPI: AxiosInstance = axios.create(config);