import axios from 'axios';
import {BASE_URL, NOSYA_API_KEY} from '../config/environments';

const AxiosInstance = axios.create();

AxiosInstance.defaults.baseURL = BASE_URL;
AxiosInstance.interceptors.request.use(
  async (config: any) => {
    return {
      ...config,
      headers: {
        ...config.headers,
        Authorization: 'Bearer ' + NOSYA_API_KEY,
      },
    };
  },
  error => {
    return Promise.reject(error);
  },
);
AxiosInstance.interceptors.response.use(response => {
  return response;
});
export default AxiosInstance;