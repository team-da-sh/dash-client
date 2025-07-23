import * as Sentry from '@sentry/react';
import type { ErrorInfo, ReactNode } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorPage from '@/pages/error/ErrorPage';
import { ERROR_LEVEL } from '@/shared/types/errorLevel';

const handleError = (error: Error, errorInfo: ErrorInfo) => {
  Sentry.withScope((scope) => {
    scope.setExtras({ componentStack: errorInfo.componentStack });
    scope.setLevel(ERROR_LEVEL.FATAL);

    const newError = new Error(error.message);
    newError.name = error.name;

    Sentry.captureException(newError);
  });
};

const GlobalErrorBoundary = ({ children }: { children: ReactNode }) => {
  return (
    <ErrorBoundary FallbackComponent={ErrorPage} onError={handleError}>
      {children}
    </ErrorBoundary>
  );
};

export default GlobalErrorBoundary;
