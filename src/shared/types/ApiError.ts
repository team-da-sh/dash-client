/* eslint-disable @typescript-eslint/no-explicit-any */
import type { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { HTTP_STATUS_CODE } from '@/shared/constants/api';

export class ApiError<T = unknown> extends Error implements AxiosError<T> {
  config: InternalAxiosRequestConfig;
  code?: string;
  request?: any;
  response?: AxiosResponse<T>;
  isAxiosError: boolean;
  toJSON: () => any;

  constructor(error: AxiosError<T>, message?: string) {
    super(message ?? error.message);

    const errorStatus = error.response?.status || 0;
    let name = 'ApiError';

    switch (errorStatus) {
      case HTTP_STATUS_CODE.BAD_REQUEST: // 400
        name += ': BAD_REQUESET';
        break;
      case HTTP_STATUS_CODE.UNAUTHORIZED: // 401
        name += ': UNAUTHORIZED';
        break;
      case HTTP_STATUS_CODE.FORBIDDEN: // 403
        name += ': FORBIDDEN';
        break;
      case HTTP_STATUS_CODE.NOT_FOUND: // 404
        name += ': NOT_FOUND';
        break;
      case HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR: // 500
        name += ': INTERNAL_SERVER_ERROR';
        break;
    }

    this.name = name;
    this.stack = error.stack;

    this.config = error.config!;
    this.code = error.code;
    this.request = error.request;
    this.response = error.response;
    this.isAxiosError = error.isAxiosError;
    this.toJSON = error.toJSON;
  }
}
