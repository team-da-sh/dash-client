import { AxiosError, InternalAxiosRequestConfig } from 'axios';
import { postReissue } from '@/pages/auth/apis/axios';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import { instance } from '@/shared/apis/instance';
import { HTTP_STATUS_CODE } from '@/shared/constants/api';
import { API_URL } from '@/shared/constants/apiURL';
import { clearStorage, getAccessToken, getRefreshToken, setStorage } from '@/shared/utils/handleToken';

type FailedRequest = {
  resolve: (token?: string) => void;
  reject: (error?: any) => void;
};

let isRefreshing = false;
let failedRequests: FailedRequest[] = [];

// 요청 전 header에 accesstoken 입력
export const onResponse = (config: InternalAxiosRequestConfig) => {
  // reissue의 경우 헤더에 refresh 토큰 넣어주기
  if (config.url === API_URL.AUTH_REISSUE) {
    const newConfig = { ...config };
    newConfig.headers.Authorization = `Bearer ${getRefreshToken()}`;

    return newConfig;
  }

  const accessToken = getAccessToken();

  // 로그인을 해서 accessToken이 있는 경우
  if (accessToken) {
    const newConfig = { ...config };
    newConfig.headers.Authorization = `Bearer ${accessToken}`;
    return newConfig;
  }

  // 로그인을 안한 경우
  return config;
};

// 401 에러시 token 갱신 로직
export const onErrorResponse = async (error: AxiosError) => {
  const originRequest = error.config;

  if (!originRequest) throw new Error('에러 발생');

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
      const { data } = await postReissue();
      setStorage(data.accessToken, data.refreshToken);

      // 대기열 실행 및 초기화
      failedRequests.forEach((prom) => prom.resolve());
      failedRequests = [];

      return instance(originRequest);
    } catch (error) {
      failedRequests.forEach((prom) => prom.reject(error));
      failedRequests = [];

      window.location.replace(ROUTES_CONFIG.login.path);
      clearStorage();

      throw error;
    } finally {
      isRefreshing = false; // 요청 완료 후 상태 초기화
    }
  }

  return Promise.reject(error);
};
