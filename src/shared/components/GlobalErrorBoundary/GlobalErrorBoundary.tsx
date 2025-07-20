import * as Sentry from '@sentry/react';
import type { ErrorInfo, ReactNode } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import Error from '@/pages/error/Error';

const handleError = (error: Error, errorInfo: ErrorInfo) => {
  Sentry.withScope((scope) => {
    scope.setExtras({ componentStack: errorInfo.componentStack });
    scope.setLevel('error');
    Sentry.captureException(error);
  });
};

const GlobalErrorBoundary = ({ children }: { children: ReactNode }) => {
  return (
    <ErrorBoundary FallbackComponent={Error} onError={handleError}>
      {children}
    </ErrorBoundary>
  );
};

export default GlobalErrorBoundary;
