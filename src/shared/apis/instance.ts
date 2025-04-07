import type { InternalAxiosRequestConfig } from 'axios';
import axios from 'axios';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import { HTTP_STATUS_CODE } from '@/shared/constants/api';
import { getAccessToken } from '@/shared/utils/handleToken';

export const instance = axios.create({
  baseURL: import.meta.env.VITE_DEV_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

//요청 전 header에 accesstoken 입력
instance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const accessToken = getAccessToken();

    if (accessToken) {
      const newConfig = { ...config };
      newConfig.headers.Authorization = `Bearer ${accessToken}`;
      return newConfig;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 401 권한 에러시 로그인 페이지로 이동
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const statusCode = error.response?.status;

    if (statusCode === HTTP_STATUS_CODE.UNAUTHORIZED) {
      error.response.statusText = 'Unauthorized';
      error.response.status = HTTP_STATUS_CODE.UNAUTHORIZED;

      window.location.replace(ROUTES_CONFIG.login.path);
    }
    return Promise.reject(error);
  }
);
