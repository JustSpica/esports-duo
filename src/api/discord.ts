import axios, { AxiosRequestConfig, AxiosInstance, AxiosError } from 'axios';

const config: AxiosRequestConfig = {
  baseURL: import.meta.env.VITE_API_DISCORD,
};

export const discordAPI: AxiosInstance = axios.create(config);

discordAPI.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError) => {
    if(error.response?.status === 401) {
      localStorage.removeItem('auth');
    }
  }
);