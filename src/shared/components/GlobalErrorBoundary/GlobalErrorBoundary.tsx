import { captureException } from '@sentry/react';
import type { ReactNode } from 'react';
import { useEffect } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import Error from '@/pages/error/Error';

const GlobalErrorFallback = ({ error }: { error: Error }) => {
  useEffect(() => {
    captureException(error);
  }, [error]);

  return <Error />;
};

const GlobalErrorBoundary = ({ children }: { children: ReactNode }) => {
  return <ErrorBoundary FallbackComponent={GlobalErrorFallback}>{children}</ErrorBoundary>;
};

export default GlobalErrorBoundary;
