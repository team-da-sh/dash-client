import type { AxiosError, InternalAxiosRequestConfig } from 'axios';
import type { ErrorResponse } from 'react-router-dom';
import { postReissue } from '@/pages/auth/apis/axios';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import { instance } from '@/shared/apis/instance';
import { HTTP_STATUS_CODE } from '@/shared/constants/api';
import { API_URL } from '@/shared/constants/apiURL';
import { ApiError } from '@/shared/types/ApiError';
import { clearStorage, getAccessToken, getRefreshToken, setStorage } from '@/shared/utils/handleToken';

type FailedRequest = {
  resolve: (token?: string) => void;
  reject: (error?: AxiosError) => void;
};

let isRefreshing = false;
let failedRequests: FailedRequest[] = [];

// 요청 전 header에 accesstoken 입력
export const onResponse = (config: InternalAxiosRequestConfig) => {
  // reissue의 경우 헤더에 refresh 토큰 넣어주기
  if (config.url === API_URL.AUTH_REISSUE) {
    config.headers.Authorization = `Bearer ${getRefreshToken()}`;

    return config;
  }

  // 로그인을 해서 accessToken이 있는 경우
  const accessToken = getAccessToken();
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
    return config;
  }

  // 로그인을 안한 경우
  return config;
};

// 401 에러시 token 갱신 로직
export const onErrorResponse = async (error: AxiosError) => {
  const originRequest = error.config;

  if (!originRequest) throw new Error('401 요청 에러');

  const statusCode = error.response?.status;

  if (statusCode === HTTP_STATUS_CODE.UNAUTHORIZED && originRequest.url !== API_URL.AUTH_REISSUE) {
    // 토큰 갱신중인 경우
    if (isRefreshing) {
      return new Promise((resolve, reject) => {
        failedRequests.push({ resolve, reject });
      }).then(() => instance(originRequest));
    }

    // 토큰 갱신을 안하고 있는 경우
    isRefreshing = true;

    try {
      const { accessToken, refreshToken } = await postReissue();
      setStorage(accessToken, refreshToken);

      // 대기열 실행 및 초기화
      failedRequests.forEach((prom) => prom.resolve());
      failedRequests = [];

      return instance(originRequest);
    } catch (reissueError) {
      failedRequests.forEach((prom) => prom.reject(reissueError as AxiosError));
      failedRequests = [];

      window.location.replace(ROUTES_CONFIG.login.path);

      clearStorage();
    } finally {
      // 요청 완료 후 상태 초기화
      isRefreshing = false;
    }
  }

  return Promise.reject(error);
};

export const onErrorExpand = (error: AxiosError<ErrorResponse>) => {
  if (!error.response) throw error;

  throw new ApiError(error);
};
