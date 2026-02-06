import type { AxiosError, InternalAxiosRequestConfig } from 'axios';
import { postLogout, postReissue } from '@/app/auth/apis/axios';
import { instance } from '@/shared/apis/instance';
import { HTTP_STATUS_CODE } from '@/shared/constants/api';
import { ApiError } from '@/shared/types/ApiError';

type FailedRequest = {
  resolve: (token?: string) => void;
  reject: (error?: AxiosError) => void;
};

let isRefreshing = false;
let failedRequests: FailedRequest[] = [];

const isReissueRequest = (url?: string) => url?.includes('auth/reissue') ?? false;

// BFF + HttpOnly 쿠키: 토큰은 쿠키로 자동 전송되므로 Authorization 헤더를 주입하지 않음
export const onResponse = (config: InternalAxiosRequestConfig) => config;

// 401 에러 시 /api/auth/reissue 호출 후 재시도 (BFF가 HttpOnly 쿠키로 토큰 갱신)
export const onErrorResponse = async (error: AxiosError) => {
  const originRequest = error.config;

  if (!originRequest) throw new Error('401 요청 에러');

  const statusCode = error.response?.status;

  if (statusCode === HTTP_STATUS_CODE.UNAUTHORIZED && !isReissueRequest(originRequest.url)) {
    if (isRefreshing) {
      return new Promise((resolve, reject) => {
        failedRequests.push({ resolve, reject });
      }).then(() => instance(originRequest));
    }

    isRefreshing = true;

    try {
      await postReissue();

      failedRequests.forEach((prom) => prom.resolve());
      failedRequests = [];

      return instance(originRequest);
    } catch (reissueError) {
      failedRequests.forEach((prom) => prom.reject(reissueError as AxiosError));
      failedRequests = [];

      await postLogout().catch(() => {});
      window.location.replace('/login');
    } finally {
      isRefreshing = false;
    }
  }

  return Promise.reject(error);
};

type ApiErrorResponse = { message?: string; [key: string]: unknown };

export const onErrorExpand = (error: AxiosError<ApiErrorResponse>) => {
  if (!error.response) throw error;

  throw new ApiError(error);
};
