import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { BACKEND_URL, REQUEST_TEMEOUT } from '../const';

export const createApi = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TEMEOUT,
  });
  api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      if(config.headers) {
        config.headers['Authorization'] = 'Basic gfgfggnzdn';
      }
      return config;
    }
  );
  return api;
};
