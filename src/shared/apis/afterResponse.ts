import { isServer } from '@tanstack/react-query';
import { type Options } from 'ky';
import { postLogout, postReissue } from '@/app/auth/apis/ky';
import { kyInstance } from '@/shared/apis/kyInstance';
import { HTTP_STATUS_CODE } from '@/shared/constants/api';
import { ApiError } from '@/shared/types/ApiError';

type QueuedRequest = {
  resolve: () => void;
  reject: (reason: unknown) => void;
};

let isRefreshing = false;
let failedQueue: QueuedRequest[] = [];

const isReissueRequest = (url: string) => url.includes('auth/reissue');

/** request.url(전체 URL)에서 ky prefixUrl 제거한 상대 path만 반환 (재시도 시 prefix 중복 방지) */
const getRetryPath = (requestUrl: string): string => {
  const pathname = new URL(requestUrl).pathname;
  if (pathname.startsWith('/api/')) return pathname.slice(5);
  return pathname.slice(1);
};

export const afterResponse = async (request: Request, options: Options, response: Response): Promise<Response> => {
  if (response.ok) return response;

  if (response.status === HTTP_STATUS_CODE.UNAUTHORIZED && !isReissueRequest(request.url) && !isServer) {
    const retryPath = getRetryPath(request.url);

    // 이미 다른 요청이 reissue 중이면 큐에 넣고, reissue 완료 후 해당 요청의 재시도 결과로 resolve됨
    if (isRefreshing) {
      return new Promise<void>((resolve, reject) => {
        failedQueue.push({ resolve, reject });
      }).then(() => kyInstance(retryPath, { ...options }));
    }

    isRefreshing = true;

    try {
      await postReissue();

      failedQueue.forEach(({ resolve }) => resolve());
      failedQueue = [];

      return kyInstance(retryPath, { ...options });
    } catch {
      failedQueue.forEach(({ reject }) => reject(new Error('Reissue failed')));
      failedQueue = [];

      postLogout();
      window.location.replace('/login');

      throw await ApiError.from({ response, request });
    } finally {
      isRefreshing = false;
    }
  }

  const err = await ApiError.from({ response, request });
  throw err;
};
