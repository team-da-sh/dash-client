import axios, { InternalAxiosRequestConfig } from 'axios';
import { useNavigate } from 'react-router-dom';

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_DEV_BASE_URL,
});

const navigate = useNavigate();

// 요청 전 header에 accesstoken 입력
axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const accessToken = localStorage.getItem('ACCESS_TOKEN');

    if (accessToken) {
      const newConfig = { ...config };
      newConfig.headers.Authorization = `Bearer ${accessToken}`;
      return newConfig;
    }

    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const statusCode = error.response?.status;
    if (statusCode === 401) {
      error.response.statuesText = 'Unauthorized';
      error.response.status = 401;
      navigate('/login');
    }
    return Promise.reject(error);
  }
);
