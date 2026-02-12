import type { HTTPError } from 'ky';
import { HTTP_STATUS_CODE } from '@/shared/constants/api';

/** Response body 파싱 결과 (에러 메시지 등) */
type ApiErrorData = { message?: string; [key: string]: unknown };

/** error.response.data?.message 등 기존 호환용 response 형태 */
export type ApiErrorResponseShape<T = ApiErrorData> = {
  status: number;
  statusText: string;
  data?: T;
  headers: Record<string, string>;
};

/**
 * ky HTTPError를 래핑하는 에러 클래스.
 * Sentry에서 상태코드별로 그룹화할 수 있도록 name을 'ApiError: BAD_REQUEST' 등으로 설정.
 */
export class ApiError<T = ApiErrorData> extends Error {
  readonly response: ApiErrorResponseShape<T>;
  readonly request: Request;
  readonly status: number;

  private constructor(
    response: ApiErrorResponseShape<T>,
    request: Request,
    message: string,
    status: number,
    stack?: string
  ) {
    super(message);
    this.name = 'ApiError';
    this.response = response;
    this.request = request;
    this.status = status;
    if (stack) {
      this.stack = stack;
    }

    switch (status) {
      case HTTP_STATUS_CODE.BAD_REQUEST:
        this.name = 'ApiError: BAD_REQUEST';
        break;
      case HTTP_STATUS_CODE.UNAUTHORIZED:
        this.name = 'ApiError: UNAUTHORIZED';
        break;
      case HTTP_STATUS_CODE.FORBIDDEN:
        this.name = 'ApiError: FORBIDDEN';
        break;
      case HTTP_STATUS_CODE.NOT_FOUND:
        this.name = 'ApiError: NOT_FOUND';
        break;
      case HTTP_STATUS_CODE.METHOD_NOT_ALLOWED:
        this.name = 'ApiError: METHOD_NOT_ALLOWED';
        break;
      case HTTP_STATUS_CODE.CONFLICT:
        this.name = 'ApiError: CONFLICT';
        break;
      case HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR:
        this.name = 'ApiError: INTERNAL_SERVER_ERROR';
        break;
    }
  }

  /**
   * ky HTTPError 또는 fetch Response로부터 ApiError 생성.
   * response body를 파싱해 error.response.data?.message 호환 형태로 제공.
   */
  static async from<T = ApiErrorData>(
    source: HTTPError<T> | { response: Response; request: Request }
  ): Promise<ApiError<T>> {
    const { response, request } = source;

    let data: T | undefined;
    try {
      data = (await response.clone().json()) as T;
    } catch {
      data = undefined;
    }

    const message = (data as ApiErrorData)?.message ?? '';

    const responseShape: ApiErrorResponseShape<T> = {
      status: response.status,
      statusText: response.statusText,
      data,
      headers: Object.fromEntries(response.headers.entries()),
    };

    const err = new ApiError<T>(responseShape, request, message, response.status);
    err.stack = source instanceof Error ? source.stack : undefined;
    return err;
  }

  /** HTTPError로부터 생성 (생성자 대신 from 사용 권장) */
  static async fromHTTPError<T = ApiErrorData>(error: HTTPError<T>): Promise<ApiError<T>> {
    return ApiError.from(error);
  }
}

export function isApiError(error: unknown): error is ApiError {
  return error instanceof ApiError;
}
