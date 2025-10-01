/* eslint-disable @typescript-eslint/no-explicit-any */
import type { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { HTTP_STATUS_CODE } from '@/shared/constants/api';

// Error name status 별로 확장한 ApiError class
export class ApiError<T = unknown> extends Error implements AxiosError<T> {
  config?: InternalAxiosRequestConfig;
  code?: string;
  request?: any;
  response?: AxiosResponse<T>;
  status?: number;
  isAxiosError: boolean;
  toJSON: () => any;

  constructor(error: AxiosError<T>, message?: string) {
    super(message ?? error.message);

    const errorStatus = error.response?.status || 0;
    let name = 'ApiError';

    switch (errorStatus) {
      case HTTP_STATUS_CODE.BAD_REQUEST: // 400
        name += ': BAD_REQUEST';
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
      case HTTP_STATUS_CODE.METHOD_NOT_ALLOWED: // 405
        name += ': METHOD_NOT_ALLOWED';
        break;
      case HTTP_STATUS_CODE.CONFLICT: // 409
        name += ': CONFLICT';
        break;
      case HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR: // 500
        name += ': INTERNAL_SERVER_ERROR';
        break;
    }

    this.name = name;
    this.stack = error.stack;

    this.config = error.config;
    this.code = error.code;
    this.request = error.request;
    this.response = error.response;
    this.status = error.status;
    this.isAxiosError = error.isAxiosError;
    this.toJSON = error.toJSON;
  }
}
