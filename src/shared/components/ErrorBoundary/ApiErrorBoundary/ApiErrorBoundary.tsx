import * as Sentry from '@sentry/react';
import type { ErrorInfo } from 'react';
import { Suspense, type ReactNode } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorPage from '@/app/error';
import { isApiError, type ApiError } from '@/shared/types/ApiError';
import { ERROR_LEVEL } from '@/shared/types/errorLevel';

// sentry 로깅을 위한 핸들러
const handleError = (error: Error | ApiError, errorInfo: ErrorInfo) => {
  if (!isApiError(error)) {
    throw error;
  }

  // 추후 배포 환경에서 에러 레벨 세분화
  Sentry.withScope((scope) => {
    scope.setExtras({ componentStack: errorInfo.componentStack });
    if (error.status && error.status >= 500) {
      scope.setLevel(ERROR_LEVEL.ERROR);
    } else {
      scope.setLevel(ERROR_LEVEL.WARNING);
    }

    const newError = new Error(error.message);
    newError.name = error.name;

    Sentry.captureException(newError);
  });
};

export const ApiErrorBoundary = ({ children }: { children: ReactNode }) => {
  return (
    <ErrorBoundary FallbackComponent={ErrorPage} onError={handleError}>
      <Suspense fallback={<div />}>{children}</Suspense>
    </ErrorBoundary>
  );
};
