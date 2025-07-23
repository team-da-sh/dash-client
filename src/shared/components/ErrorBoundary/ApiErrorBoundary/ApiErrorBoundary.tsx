import * as Sentry from '@sentry/react';
import { isAxiosError } from 'axios';
import type { ErrorInfo } from 'react';
import { Suspense, type ReactNode } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorPage from '@/pages/error/ErrorPage';
import { errorContainerStyle } from '@/shared/components/ErrorBoundary/FetchErrorBoundary/fetchErrorBoundary.css';
import Spinner from '@/shared/components/Spinner/Spinner';
import { HTTP_STATUS_CODE } from '@/shared/constants/api';
import type { ApiError } from '@/shared/types/ApiError';
import { ERROR_LEVEL } from '@/shared/types/errorLevel';

// sentry 로깅을 위한 핸들러
const handleError = (error: Error | ApiError, errorInfo: ErrorInfo) => {
  // Api 통신 에러가 아니면 GlobalErrorBoundary로 에러처리 위임
  if (!isAxiosError(error)) {
    throw error;
  }

  console.log('api 까지 옴?');
  // 추후 배포 환경에서 에러 레벨 세분화
  Sentry.withScope((scope) => {
    scope.setExtras({ componentStack: errorInfo.componentStack });
    if (error.status && error.status >= HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR) {
      scope.setLevel(ERROR_LEVEL.ERROR);
    } else {
      scope.setLevel(ERROR_LEVEL.WARNING);
    }
    Sentry.captureException(error);
  });
};

export const ApiErrorBoundary = ({ children }: { children: ReactNode }) => {
  return (
    <ErrorBoundary FallbackComponent={ErrorPage} onError={handleError}>
      <Suspense
        fallback={
          <div className={errorContainerStyle}>
            <Spinner />
          </div>
        }>
        {children}
      </Suspense>
    </ErrorBoundary>
  );
};
