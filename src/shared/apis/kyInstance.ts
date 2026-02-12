import ky, { type Options } from 'ky';
import { HTTP_STATUS_CODE } from '@/shared/constants/api';
import { ApiError } from '@/shared/types/ApiError';

const isServer = typeof window === 'undefined';

const getPrefixUrl = (): string => {
  if (isServer) {
    const base = process.env.BACKEND_BASE_URL;
    if (base) return base.endsWith('/') ? base.slice(0, -1) : base;
  }
  return '/api';
};

type QueuedRequest = {
  request: Request;
  options: Options;
  resolve: (value: Response) => void;
  reject: (reason: unknown) => void;
};

let isRefreshing = false;
let failedQueue: QueuedRequest[] = [];

const isReissueRequest = (url: string) => url.includes('auth/reissue');

const reissueViaFetch = async (): Promise<void> => {
  const res = await fetch('/api/auth/reissue', { method: 'POST', credentials: 'include' });
  if (!res.ok) throw new Error('Reissue failed');
};

const logoutAndRedirect = (): void => {
  if (isServer) return;
  const path = '/api/auth/logout';
  fetch(path, { method: 'POST', credentials: 'include' }).catch(() => {});
  window.location.replace('/login');
};

let kyInstanceRef: ReturnType<typeof ky.create> | null = null;

const afterResponse = async (request: Request, options: Options, response: Response): Promise<Response> => {
  if (response.ok) return response;

  const url = request.url;

  if (response.status === HTTP_STATUS_CODE.UNAUTHORIZED && !isReissueRequest(url) && typeof window !== 'undefined') {
    if (isRefreshing) {
      return new Promise<Response>((resolve, reject) => {
        failedQueue.push({ request, options, resolve, reject });
      }).then(() => {
        if (!kyInstanceRef) throw new Error('ky instance not ready');
        return kyInstanceRef(request.url, { ...options, retry: { limit: 0 } });
      });
    }

    isRefreshing = true;

    try {
      await reissueViaFetch();
      if (!kyInstanceRef) throw new Error('ky instance not ready');
      for (const item of failedQueue) {
        kyInstanceRef(item.request.url, { ...item.options, retry: { limit: 0 } })
          .then((res) => item.resolve(res as unknown as Response))
          .catch(item.reject);
      }
      failedQueue = [];
      return kyInstanceRef(request.url, { ...options, retry: { limit: 0 } });
    } catch {
      failedQueue.forEach(({ reject }) => reject(new Error('Reissue failed')));
      failedQueue = [];
      logoutAndRedirect();
      return response;
    } finally {
      isRefreshing = false;
    }
  }

  const err = await ApiError.from({ response, request });
  throw err;
};

kyInstanceRef = ky.create({
  prefixUrl: getPrefixUrl(),
  headers: {
    'Content-Type': 'application/json',
  },
  hooks: {
    afterResponse: [afterResponse],
  },
});

export const kyInstance = kyInstanceRef;
