import * as Sentry from '@sentry/react';
import { isAxiosError } from 'axios';
import type { ErrorInfo } from 'react';
import { Suspense, type ReactNode } from 'react';
import { ErrorBoundary, type FallbackProps } from 'react-error-boundary';
import Error from '@/pages/error/Error';
import { errorContainerStyle } from '@/shared/components/FetchErrorBoundary/fetchErrorBoundary.css';
import Spinner from '@/shared/components/Spinner/Spinner';

// sentry 로깅을 위한 핸들러
const handleError = (error: Error, errorInfo: ErrorInfo) => {
  if (!isAxiosError(error)) {
    throw error;
  }

  Sentry.withScope((scope) => {
    scope.setExtras({ componentStack: errorInfo.componentStack });
    if (error.status && error.status >= 500) {
      scope.setLevel('error');
    } else {
      scope.setLevel('warning');
    }
    Sentry.captureException(error);
  });
};

const ApiErrorFallback = ({ error }: FallbackProps) => {
  // Api 통신 에러가 아니면 GlobalErrorBoundary로 에러처리 위임
  if (!isAxiosError(error)) {
    throw error;
  }

  return <Error />;
};

export const ApiErrorBoundary = ({ children }: { children: ReactNode }) => {
  return (
    <ErrorBoundary FallbackComponent={ApiErrorFallback} onError={handleError}>
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
